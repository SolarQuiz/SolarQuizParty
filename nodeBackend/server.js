const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "../public")));

let rooms = {};

io.on("connection", (socket) => {
  console.log(`Usuário conectado: ${socket.id}`);

  socket.on("createRoom", ({ playerName, maxPlayers, numQuestions }) => {
    const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    rooms[roomCode] = {
      players: [{ id: socket.id, name: playerName }],
      maxPlayers,
      owner: socket.id,
      quizStarted: false,
      numQuestions:
        typeof numQuestions === "number" &&
        numQuestions >= 10 &&
        numQuestions <= 100
          ? numQuestions
          : 10,
      playerScores: {},
    };

    socket.join(roomCode);
    socket.emit("roomCreated", {
      roomCode,
      numQuestions: rooms[roomCode].numQuestions,
    });

    io.to(roomCode).emit("updatePlayers", {
      players: rooms[roomCode].players,
      ownerId: rooms[roomCode].owner,
    });

    console.log(`Sala ${roomCode} criada por ${playerName}`);
  });

  socket.on("joinRoom", ({ roomCode, playerName }) => {
    roomCode = roomCode.toUpperCase();

    if (!rooms[roomCode]) {
      socket.emit("errorJoining", {
        type: "notFound",
        message: "Sala inexistente.",
      });
      return;
    }

    const room = rooms[roomCode];

    if (room.players.length >= room.maxPlayers) {
      socket.emit("errorJoining", {
        type: "full",
        message: "A sala está cheia.",
      });
      return;
    }

    room.players.push({ id: socket.id, name: playerName });
    socket.join(roomCode);

    socket.emit("joinedRoom", {
      roomCode,
      ownerId: room.owner,
      numQuestions: room.numQuestions,
    });

    io.to(roomCode).emit("updatePlayers", {
      players: room.players,
      ownerId: room.owner,
    });

    console.log(`Jogador ${playerName} entrou na sala ${roomCode}`);
  });

  socket.on("kickPlayer", (playerId) => {
    for (const roomCode in rooms) {
      const room = rooms[roomCode];
      if (room.owner === socket.id) {
        const playerIndex = room.players.findIndex((p) => p.id === playerId);
        if (playerIndex !== -1) {
          const [kickedPlayer] = room.players.splice(playerIndex, 1);
          const kickedSocket = io.sockets.sockets.get(kickedPlayer.id);
          if (kickedSocket) {
            kickedSocket.leave(roomCode);
            kickedSocket.emit("kicked");
            kickedSocket.disconnect();
          }

          io.to(roomCode).emit("updatePlayers", {
            players: room.players,
            ownerId: room.owner,
          });
          break;
        }
      }
    }
  });

  socket.on("disconnect", () => {
    for (const roomCode in rooms) {
      const room = rooms[roomCode];
      const playerIndex = room.players.findIndex((p) => p.id === socket.id);

      if (playerIndex !== -1) {
        const wasHost = room.owner === socket.id;
        const disconnectedPlayer = room.players[playerIndex];
        room.players.splice(playerIndex, 1);

        if (room.answers) {
          for (const question in room.answers) {
            if (room.answers[question][socket.id] !== undefined) {
              delete room.answers[question][socket.id];
            }
          }
        }

        if (room.players.length === 0) {
          delete rooms[roomCode];
          console.log(`Sala ${roomCode} excluída por estar vazia.`);
        } else if (
          room.players.length === 1 &&
          room.players[0].id === room.owner
        ) {
          const hostSocket = io.sockets.sockets.get(room.owner);
          if (hostSocket) {
            hostSocket.emit("gameEnded", { reason: "allPlayersLeft" });
          }
          delete rooms[roomCode];
          console.log(`Sala ${roomCode} finalizada - apenas host restou.`);
        } else {
          if (wasHost) {
            io.to(roomCode).emit("hostLeft");
            console.log(
              `Host saiu da sala ${roomCode}. Notificando outros jogadores.`
            );
          } else {
            io.to(roomCode).emit("updatePlayers", {
              players: room.players,
              ownerId: room.owner,
            });

            if (room.quizStarted && room.owner) {
              const ownerSocket = io.sockets.sockets.get(room.owner);
              if (ownerSocket) {
                ownerSocket.emit("playerDisconnected", {
                  playerId: socket.id,
                  playerName: disconnectedPlayer.name,
                  remainingPlayers: room.players.filter(
                    (p) => p.id !== room.owner
                  ).length,
                });
              }
            }
          }
          console.log(
            `Jogadores restantes na sala ${roomCode}:`,
            room.players.map((p) => p.name)
          );
        }
      }
    }
    console.log(`Usuário desconectado: ${socket.id}`);
  });

  socket.on("startQuiz", ({ roomCode, questions }) => {
    const room = rooms[roomCode];
    if (!room) return;

    if (socket.id !== room.owner) return;

    console.log(`Quiz iniciado na sala ${roomCode} pelo host.`);

    room.answers = {};
    room.playerScores = {};

    if (Array.isArray(questions) && questions.length) {
      room.questions = questions;
    }

    let countdown = 10;
    io.to(roomCode).emit("quizStartedCountdown", countdown);

    const interval = setInterval(() => {
      countdown--;
      if (countdown > 0) {
        io.to(roomCode).emit("quizStartedCountdown", countdown);
      } else {
        clearInterval(interval);
        room.quizStarted = true;
        io.to(roomCode).emit("startQuiz");

        if (room.owner && room.questions && room.questions.length > 0) {
          const ownerSocket = io.sockets.sockets.get(room.owner);
          if (ownerSocket) {
            ownerSocket.emit("showQuestionInDebug", {
              questionText: room.questions[0].question,
            });
          }
        }
      }
    }, 1000);
  });

  socket.on("answer", ({ roomCode, question, answer, playerId }) => {
    if (!rooms[roomCode]) return;
    if (!rooms[roomCode].answers) rooms[roomCode].answers = {};
    if (!rooms[roomCode].answers[question])
      rooms[roomCode].answers[question] = {};

    if (rooms[roomCode].answers[question][playerId] !== undefined) {
      return;
    }

    rooms[roomCode].answers[question][playerId] = answer;

    const answeredCount = Object.keys(rooms[roomCode].answers[question]).length;
    const room = rooms[roomCode];

    const totalPlayers = room.players.filter(
      (player) => player.id !== room.owner
    ).length;

    if (totalPlayers < 2) {
      console.log(
        `Apenas ${totalPlayers} jogador(es) na sala. Aguardando mais jogadores ou tempo esgotar.`
      );
    }

    if (room.owner) {
      const ownerSocket = io.sockets.sockets.get(room.owner);
      if (ownerSocket) {
        const playersStatus = room.players
          .filter((player) => player.id !== room.owner)
          .map((player) => {
            const playerAnswer = rooms[roomCode].answers[question][player.id];
            let status = "not_responded";

            if (playerAnswer !== undefined) {
              if (answeredCount >= totalPlayers) {
                const correctIdx = rooms[roomCode].questions[question].answer;
                if (playerAnswer === correctIdx) {
                  status = "correct";
                } else if (
                  playerAnswer === -1 ||
                  playerAnswer === "Não Respondido"
                ) {
                  status = "skipped";
                } else {
                  status = "wrong";
                }
              } else {
                status = "responded";
              }
            }

            return {
              id: player.id,
              name: player.name,
              status: status,
            };
          });

        console.log(
          `Enviando status para host: ${answeredCount}/${totalPlayers} responderam`
        );
        console.log("Status dos jogadores:", playersStatus);

        ownerSocket.emit("playerAnswered", {
          playerId,
          question,
          answer,
          answeredCount,
          totalPlayers,
          playersStatus,
        });
      }
    }

    if (
      answeredCount >= totalPlayers ||
      (totalPlayers === 1 && answeredCount >= 1)
    ) {
      const correctIdx =
        rooms[roomCode].questions && rooms[roomCode].questions[question]
          ? rooms[roomCode].questions[question].answer
          : undefined;
      if (typeof correctIdx === "undefined") {
        console.warn("Perguntas não definidas na sala ou índice inválido.");
      }

      const playersStatus = room.players
        .filter((player) => player.id !== room.owner)
        .map((player) => {
          const playerAnswer = rooms[roomCode].answers[question][player.id];
          let status = "not_responded";

          if (playerAnswer !== undefined) {
            if (playerAnswer === correctIdx) {
              status = "correct";
            } else if (
              playerAnswer === -1 ||
              playerAnswer === "Não Respondido"
            ) {
              status = "skipped";
            } else {
              status = "wrong";
            }
          }

          return {
            id: player.id,
            name: player.name,
            status: status,
          };
        });

      if (room.owner) {
        const ownerSocket = io.sockets.sockets.get(room.owner);
        if (ownerSocket) {
          ownerSocket.emit("updateQuestionStatus", {
            questionNumber: question + 1,
            playersStatus: playersStatus,
          });
        }
      }

      setTimeout(() => {
        if (room.owner) {
          const ownerSocket = io.sockets.sockets.get(room.owner);
          if (ownerSocket && question + 1 < rooms[roomCode].questions.length) {
            ownerSocket.emit("newQuestion", {
              questionNumber: question + 2,
            });

            const nextQuestion = rooms[roomCode].questions[question + 1];
            if (nextQuestion && nextQuestion.question) {
              ownerSocket.emit("showQuestionInDebug", {
                questionText: nextQuestion.question,
              });
            }
          }
        }
      }, 5000);

      io.to(roomCode).emit("stopTimer");

      io.to(roomCode).emit("showCorrect", { correctIdx });
    }
  });

  socket.on("playerScore", ({ roomCode, playerId, score, totalQuestions }) => {
    if (!rooms[roomCode]) return;

    const room = rooms[roomCode];
    if (!room.playerScores) room.playerScores = {};

    const player = room.players.find((p) => p.id === playerId);
    if (player) {
      room.playerScores[playerId] = {
        name: player.name,
        score: score,
        totalQuestions: totalQuestions,
      };

      console.log(
        `Pontuação recebida: ${player.name} - ${score}/${totalQuestions}`
      );

      const nonHostPlayers = room.players.filter((p) => p.id !== room.owner);
      const receivedScores = Object.keys(room.playerScores).length;

      if (receivedScores >= nonHostPlayers.length) {
        const ranking = calculateRanking(room.playerScores, room);

        io.to(roomCode).emit("showRanking", { ranking });
      }
    }
  });
});

function calculateRanking(playerScores, room) {
  const scores = Object.values(playerScores)
    .filter((player) => {
      const isHost =
        room.players.find((p) => p.id === room.owner)?.name === player.name;
      return !isHost;
    })
    .map((player) => ({
      name: player.name,
      score: player.score,
      totalQuestions: player.totalQuestions,
      percentage: (player.score / player.totalQuestions) * 100,
    }));

  scores.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }

    return b.percentage - a.percentage;
  });

  return scores;
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
