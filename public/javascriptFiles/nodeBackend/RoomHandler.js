const socket = io();

let currentOwnerId = null;
let mySocketId = null;

socket.on("connect", () => {
  mySocketId = socket.id;
});

document.getElementById("join-room-btn").addEventListener("click", () => {
  const roomCode = document
    .getElementById("input-room-code")
    .value.trim()
    .toUpperCase();
  const playerName = document.getElementById("input-player-name").value.trim();

  if (!roomCode || !playerName) {
    errMsg.textContent = "Por favor, preencha código da sala e nome.";
    errMsg.style.display = "block";
    return;
  }

  if (roomCode.length !== 6) {
    errMsg.textContent = "O código da sala deve ter 6 caracteres.";
    errMsg.style.display = "block";
    return;
  }

  if (playerName.length < 2 || playerName.length > 20) {
    errMsg.textContent = "O nome deve ter entre 2 e 20 caracteres.";
    errMsg.style.display = "block";
    return;
  }

  errMsg.style.display = "none";
  socket.emit("joinRoom", { roomCode, playerName });
});

socket.on("joinedRoom", ({ roomCode, ownerId, numQuestions }) => {
  currentOwnerId = ownerId;

  currentRoomCode = roomCode;
  document.getElementById("room-code").textContent = roomCode;
  document.getElementById("cds").style.display = "block";

  document.getElementById("room-code-section-WS").style.display = "block";
  document.getElementById("room-code-section").style.display = "none";
  document.getElementById("join-room-section").style.display = "none";

  if (typeof numQuestions === "number") {
    selectedNumQuestions = numQuestions;
    selectedQuestions =
      typeof getQuestionsByCount === "function"
        ? getQuestionsByCount(selectedNumQuestions)
        : Array.isArray(window.questionsArray)
        ? window.questionsArray.slice(0, selectedNumQuestions)
        : [];
  }
});

document.getElementById("confirm-creator-btn").addEventListener("click", () => {
  const playerName = creatorNameInput.value.trim();
  let maxPlayers = parseInt(maxPlayersInput.value, 10);
  let numQuestions = parseInt(
    (document.getElementById("creator-num-questions") || {}).value || "10",
    10
  );
  const creatorErrMsg = document.getElementById("creator-error-msg");

  creatorErrMsg.style.display = "none";

  if (!playerName) {
    creatorErrMsg.textContent = "Insira seu nome.";
    creatorErrMsg.style.display = "block";
    return;
  }

  if (playerName.length < 2 || playerName.length > 20) {
    creatorErrMsg.textContent = "O nome deve ter entre 2 e 20 caracteres.";
    creatorErrMsg.style.display = "block";
    return;
  }

  if (!maxPlayersInput.value || isNaN(maxPlayers)) {
    maxPlayers = 4;
  }

  if (isNaN(numQuestions) || numQuestions < 10 || numQuestions > 100) {
    numQuestions = 10;
  }

  if (maxPlayers < 2 || maxPlayers > 20) {
    creatorErrMsg.textContent = "Número de jogadores deve estar entre 2 e 20.";
    creatorErrMsg.style.display = "block";
    return;
  }

  selectedNumQuestions = numQuestions;
  selectedQuestions =
    typeof getQuestionsByCount === "function"
      ? getQuestionsByCount(selectedNumQuestions)
      : Array.isArray(window.questionsArray)
      ? window.questionsArray.slice(0, selectedNumQuestions)
      : [];

  socket.emit("createRoom", { playerName, maxPlayers, numQuestions });
});

socket.on("roomCreated", ({ roomCode, numQuestions }) => {
  currentRoomCode = roomCode;
  document.getElementById("room-code").textContent = roomCode;
  document.getElementById("cds").style.display = "block";
  document.getElementById("room-code").style.display = "block";

  document.getElementById("creator-player-name").style.display = "none";
  document.getElementById("creator-max-players").style.display = "none";
  document.getElementById("creator-num-questions").style.display = "none";
  document.getElementById("confirm-creator-btn").style.display = "none";

  document.getElementById("room-code-section-WS").style.display = "none";
  document.getElementById("room-code-section").style.display = "block";
  document.getElementById("startQuestions").style.display = "block";

  document.getElementById("players-list-section-1").style.display = "block";
  document.getElementById("h21").style.display = "block";
  document.getElementById("players-list-1").style.display = "block";

  if (typeof numQuestions === "number") {
    selectedNumQuestions = numQuestions;
    selectedQuestions =
      typeof getQuestionsByCount === "function"
        ? getQuestionsByCount(selectedNumQuestions)
        : Array.isArray(window.questionsArray)
        ? window.questionsArray.slice(0, selectedNumQuestions)
        : [];
    const sel = document.getElementById("creator-num-questions");
    if (sel) sel.value = String(numQuestions);
  }
});

socket.on("updatePlayers", ({ players, ownerId }) => {
  currentOwnerId = ownerId;
  const lists = ["players-list-1", "players-list-2"];
  lists.forEach((listId) => {
    const listElem = document.getElementById(listId);
    if (!listElem) return;
    listElem.innerHTML = "";
    players.forEach((player) => {
      const li = document.createElement("li");
      li.textContent = player.name + (player.id === ownerId ? " [Host]" : "");
      li.style.cursor = "pointer";

      li.addEventListener("click", () => {
        if (socket.id === ownerId && player.id !== ownerId) {
          if (confirm("Deseja expulsar [" + player.name + "] da partida?")) {
            socket.emit("kickPlayer", player.id);
          }
        }
      });

      listElem.appendChild(li);
    });
    listElem.style.display = "block";
  });

  document.getElementById("players-list-section-1").style.display = "block";
  document.getElementById("players-list-section-2").style.display = "block";
  document.getElementById("h21").style.display = "block";
});

socket.on("kicked", () => {
  alert("Você foi expulso da sala pelo host.");
  window.location.reload();
});

socket.on("hostLeft", () => {
  alert("Partida Encerrada: O host saiu da partida.");
  window.location.reload();
});

socket.on("gameEnded", ({ reason }) => {
  if (reason === "allPlayersLeft") {
    alert("Partida Encerrada: Todos os jogadores saíram da sala.");
  } else {
    alert("Partida Encerrada.");
  }
  window.location.reload();
});

socket.on("quizStartedCountdown", (startTime) => {
  const countdownElement = document.getElementById("starting-countdown");
  const timerSpan = document.getElementById("countdown-timer");

  countdownElement.style.display = "block";
  let timeLeft = startTime;
  timerSpan.textContent = timeLeft;

  const intervalId = setInterval(() => {
    timeLeft--;
    timerSpan.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(intervalId);
      countdownElement.style.display = "none";

      const isHost = currentOwnerId && mySocketId === currentOwnerId;

      if (isHost) {
        console.log("Showing debug menu for host");
        document.getElementById("debug-menu").style.display = "block";
        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("room-code-section").style.display = "none";
        document.getElementById("room-code-section-WS").style.display = "none";

        const questionNumElem = document.getElementById("questionNum");
        const playerInfoElem = document.getElementById("playerInfo");
        if (questionNumElem && playerInfoElem) {
          questionNumElem.textContent = "QUESTÃO 1";
          playerInfoElem.innerHTML = "";

          const playersList = document.getElementById("players-list-1");
          if (playersList) {
            const players = Array.from(playersList.querySelectorAll("li"));
            players.forEach((playerLi) => {
              const playerName = playerLi.textContent.replace(" [Host]", "");

              if (!playerLi.textContent.includes("[Host]")) {
                const li = document.createElement("li");
                li.textContent = playerName + " (Ainda não respondeu)";
                li.style.backgroundColor = "grey";
                li.style.color = "white";
                li.style.padding = "8px";
                li.style.margin = "4px 0";
                li.style.borderRadius = "4px";
                playerInfoElem.appendChild(li);
              }
            });
          }
        }
      } else {
        console.log("Showing quiz for players");
        document.getElementById("quiz-container").style.display = "flex";
        document.getElementById("debug-menu").style.display = "none";
        document.getElementById("room-code-section").style.display = "none";
        document.getElementById("room-code-section-WS").style.display = "none";

        const chosen =
          typeof selectedQuestions !== "undefined" && selectedQuestions.length
            ? selectedQuestions
            : typeof getQuestionsByCount === "function"
            ? getQuestionsByCount(selectedNumQuestions || 10)
            : Array.isArray(questionsArray)
            ? questionsArray.slice(0, selectedNumQuestions || 10)
            : [];
        startQuiz(chosen);
      }
    }
  }, 1000);
});

document.getElementById("startQuestions").addEventListener("click", () => {
  const roomCode = document.getElementById("room-code").textContent;
  const startBtn = document.getElementById("startQuestions");

  startBtn.disabled = true;
  startBtn.style.opacity = "0.5";
  startBtn.style.cursor = "not-allowed";
  startBtn.style.margin = "0 auto";
  startBtn.style.display = "block";

  const toSend =
    selectedQuestions && selectedQuestions.length
      ? selectedQuestions
      : typeof getQuestionsByCount === "function"
      ? getQuestionsByCount(selectedNumQuestions || 10)
      : Array.isArray(questionsArray)
      ? questionsArray.slice(0, selectedNumQuestions || 10)
      : [];
  socket.emit("startQuiz", { roomCode, questions: toSend });
});

socket.on("roomFull", ({ message }) => {
  errMsg.textContent = message;
  errMsg.style.display = "block";
});

socket.on("errorJoining", ({ type, message }) => {
  errMsg.textContent = message;
  errMsg.style.display = "block";
});

socket.on(
  "playerAnswered",
  ({
    playerId,
    question,
    answer,
    answeredCount,
    totalPlayers,
    playersStatus,
  }) => {
    console.log("Host recebeu atualização:", {
      playerId,
      question,
      answer,
      answeredCount,
      totalPlayers,
      playersStatus,
    });

    if (playersStatus) {
      updateQuestionStatus(question + 1, playersStatus);
    }

    if (mySocketId === currentOwnerId) {
      const waitingCount = totalPlayers - answeredCount;
      if (waitingCount > 0) {
        showHostWaitingCountdown(waitingCount);
      }
    }
  }
);

socket.on("updateQuestionStatus", ({ questionNumber, playersStatus }) => {
  updateQuestionStatus(questionNumber, playersStatus);
});

socket.on(
  "playerDisconnected",
  ({ playerId, playerName, remainingPlayers }) => {
    if (mySocketId === currentOwnerId) {
      console.log(
        `Jogador ${playerName} desconectou. Restam ${remainingPlayers} jogadores.`
      );

      if (remainingPlayers > 0) {
        showHostWaitingCountdown(remainingPlayers);
      }
    }
  }
);

function rebuildPlayerStatusList(playersListElement, playerInfoElement) {
  playerInfoElement.innerHTML = "";
  const players = Array.from(playersListElement.querySelectorAll("li"));
  players.forEach((playerLi) => {
    const playerName = playerLi.textContent.replace(" [Host]", "");
    if (!playerLi.textContent.includes("[Host]")) {
      const li = document.createElement("li");
      li.textContent = playerName + " (Ainda não respondeu)";
      li.style.backgroundColor = "grey";
      li.style.color = "white";
      li.style.padding = "8px";
      li.style.margin = "4px 0";
      li.style.transition = "all 0.3s ease";
      playerInfoElement.appendChild(li);
    }
  });
}

socket.on("newQuestion", ({ questionNumber }) => {
  if (mySocketId === currentOwnerId) {
    const questionNumElem = document.getElementById("questionNum");
    const playerInfoElem = document.getElementById("playerInfo");
    const playersList = document.getElementById("players-list-1");

    if (questionNumElem && playerInfoElem && playersList) {
      questionNumElem.textContent = `QUESTÃO ${questionNumber}`;
      rebuildPlayerStatusList(playersList, playerInfoElem);
    }
  }
});

socket.on("showQuestionInDebug", ({ questionText }) => {
  if (mySocketId === currentOwnerId) {
    const questionNumElem = document.getElementById("questionNum");
    if (questionNumElem) {
      const existingQuestion = questionNumElem.querySelector(
        ".debug-question-text"
      );
      if (existingQuestion) {
        existingQuestion.textContent = `"${questionText}"`;
      } else {
        const questionTextElem = document.createElement("div");
        questionTextElem.className = "debug-question-text";
        questionTextElem.textContent = `"${questionText}"`;
        questionTextElem.style.cssText = `
          font-size: 14px;
          color: #ccc;
          margin-top: 8px;
          font-style: italic;
          max-width: 600px;
          word-wrap: break-word;
        `;
        questionNumElem.appendChild(questionTextElem);
      }
    }
  }
});

socket.on("quizStarted", () => {
  if (mySocketId === currentOwnerId) {
    const questionNumElem = document.getElementById("questionNum");
    const playerInfoElem = document.getElementById("playerInfo");

    if (questionNumElem && playerInfoElem) {
      questionNumElem.textContent = `QUESTÃO 1`;
      playerInfoElem.innerHTML = "";
    }
  }
});

function updateQuestionStatus(questionNumber, playersStatus) {
  const questionNumElem = document.getElementById("questionNum");
  const playerInfoElem = document.getElementById("playerInfo");

  if (questionNumElem && playerInfoElem) {
    questionNumElem.textContent = `QUESTÃO ${questionNumber}`;
    playerInfoElem.innerHTML = "";

    playersStatus.forEach((player) => {
      const li = document.createElement("li");
      li.textContent = player.name;

      switch (player.status) {
        case "not_responded":
          li.style.backgroundColor = "grey";
          li.style.color = "white";
          li.textContent += " (Ainda não respondeu)";
          break;
        case "responded":
          li.style.backgroundColor = "orange";
          li.style.color = "white";
          li.textContent += " (Respondeu)";
          break;
        case "correct":
          li.style.backgroundColor = "green";
          li.style.color = "white";
          li.textContent += " (Acertou)";
          break;
        case "wrong":
          li.style.backgroundColor = "red";
          li.style.color = "white";
          li.textContent += " (Errou)";
          break;
        case "skipped":
          li.style.backgroundColor = "grey";
          li.style.color = "white";
          li.textContent += " (Pulou)";
          break;
        default:
          li.style.backgroundColor = "grey";
          li.style.color = "white";
          break;
      }

      li.style.padding = "8px";
      li.style.margin = "4px 0";
      li.style.transition = "all 0.3s ease";

      playerInfoElem.appendChild(li);
    });
  }
}

function showHostWaitingCountdown(waitingCount) {
  if (!debugMenu) return;
}

socket.on("showRanking", ({ ranking }) => {
  console.log("Ranking recebido:", ranking);

  const podiumContainer = document.getElementById("podium-container");
  if (podiumContainer) {
    podiumContainer.style.display = "block";
  }

  const debugMenu = document.getElementById("debug-menu");
  debugMenu.style.display = "none";

  if (ranking.length >= 1) {
    document.getElementById("first-name").textContent = ranking[0].name;
    document.getElementById(
      "first-score"
    ).textContent = `${ranking[0].score}/${ranking[0].totalQuestions}`;
  }

  if (ranking.length >= 2) {
    document.getElementById("second-name").textContent = ranking[1].name;
    document.getElementById(
      "second-score"
    ).textContent = `${ranking[1].score}/${ranking[1].totalQuestions}`;
  }

  if (ranking.length >= 3) {
    document.getElementById("third-name").textContent = ranking[2].name;
    document.getElementById(
      "third-score"
    ).textContent = `${ranking[2].score}/${ranking[2].totalQuestions}`;
  }

  if (ranking.length > 3) {
    const otherPlayers = document.getElementById("other-players");
    const otherPlayersList = document.getElementById("other-players-list");

    if (otherPlayers && otherPlayersList) {
      otherPlayers.style.display = "block";
      otherPlayersList.innerHTML = "";

      for (let i = 3; i < ranking.length; i++) {
        const li = document.createElement("li");
        li.style.cssText = `
          background: #333;
          color: white;
          padding: 0.8rem;
          margin: 0.5rem 0;
          border-radius: 8px;
          border-left: 4px solid #ff6b35;
        `;
        li.textContent = `${i + 1}º Lugar: ${ranking[i].name} (${
          ranking[i].score
        }/${ranking[i].totalQuestions})`;
        otherPlayersList.appendChild(li);
      }
    }
  }

  let currentPlayerName = "";
  const inputPlayerName = document.getElementById("input-player-name");
  const creatorPlayerName = document.getElementById("creator-player-name");

  if (inputPlayerName && inputPlayerName.value) {
    currentPlayerName = inputPlayerName.value;
  } else if (creatorPlayerName && creatorPlayerName.value) {
    currentPlayerName = creatorPlayerName.value;
  }

  const isOnPodium = ranking
    .slice(0, 3)
    .some((player) => player.name === currentPlayerName);

  const individualScore = document.getElementById("individual-score");
  if (individualScore) {
    if (!isOnPodium && ranking.length > 3) {
      individualScore.style.display = "block";
    } else {
      individualScore.style.display = "none";
    }
  }
});
