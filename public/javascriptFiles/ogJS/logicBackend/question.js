let answerHistory = [];

function startQuiz(selectedQuestions) {
  questions = selectedQuestions;
  currentQuestion = 0;
  score = 0;
  answerHistory = [];

  const isHost = mySocketId === currentOwnerId;

  if (!isHost) {
    menu.style.display = "none";
    joinRoomSection.style.display = "none";
    roomCodeSectionWS.style.display = "none";
  }

  totalQuestionsResults.textContent = questions.length;
  totalQuestionsEl.textContent = questions.length;

  if (!isHost) {
    showQuestion();
  }
}

function showQuestion() {
  funFactEl.style.display = "none";
  selectedOption = null;
  nextBtn.style.pointerEvents = "none";
  nextBtn.style.opacity = 0.5;

  currentQuestionEl.textContent = currentQuestion + 1;
  const q = questions[currentQuestion];
  questionContainer.textContent = q.question;

  optionsContainer.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = `${String.fromCharCode(65 + idx)}. ${opt}`;
    btn.classList.remove("correct", "incorrect", "selected");
    btn.addEventListener("click", () => selectOption(idx, btn));
    optionsContainer.appendChild(btn);
  });

  if (mySocketId === currentOwnerId) {
    const questionNumElem = document.getElementById("questionNum");
    const playerInfoElem = document.getElementById("playerInfo");

    if (questionNumElem && playerInfoElem) {
      questionNumElem.textContent = `QUESTÃO ${currentQuestion + 1}`;
      playerInfoElem.innerHTML = "";
    }
  }

  startTimer(30);
}

function selectOption(idx, btn) {
  if (selectedOption !== null) return;

  selectedOption = idx;

  Array.from(optionsContainer.children).forEach((button) => {
    button.classList.remove("selected");
  });

  btn.classList.add("selected");

  console.log("Jogador respondeu:", {
    roomCode: currentRoomCode,
    question: currentQuestion,
    answer: idx,
    playerId: socket.id,
  });

  socket.emit("answer", {
    roomCode: currentRoomCode,
    question: currentQuestion,
    answer: idx,
    playerId: socket.id,
  });
}

function skipQuestion() {
  if (selectedOption !== null) return;

  selectedOption = "Não Respondido";

  socket.emit("answer", {
    roomCode: currentRoomCode,
    question: currentQuestion,
    answer: selectedOption,
    playerId: socket.id,
  });
}

const skipBtn = document.querySelector(".skip");
skipBtn.addEventListener("click", skipQuestion);

function showAnswers(correctIdx) {
  Array.from(optionsContainer.children).forEach((button, idx) => {
    button.disabled = true;
    button.style.cursor = "default";

    if (idx === correctIdx) {
      button.classList.add("correct");
      if (selectedOption === idx) {
        playAudio(Correct);
        score++;
      }
    } else if (idx === selectedOption) {
      button.classList.add("incorrect");
      playAudio(Incorrect);
    }
  });

  const fact = questions[currentQuestion].fact;
  if (fact) {
    funFactEl.textContent = fact;
    funFactEl.style.display = "block";
  }
}

function startTimer(seconds = 30) {
  let timeLeft = seconds;
  nextBtn.disabled = true;

  clearInterval(timer);

  timer = setInterval(() => {
    document.getElementById("timer").textContent = `${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      nextBtn.disabled = false;

      if (selectedOption === null) {
        selectedOption = "Não Respondido";
        socket.emit("answer", {
          roomCode: currentRoomCode,
          question: currentQuestion,
          answer: selectedOption,
          playerId: socket.id,
        });
      }

      return;
    }

    timeLeft--;
  }, 1000);
}

function nextQuestion(correctIdx) {
  answerHistory.push({
    questionIndex: currentQuestion,
    correct: selectedOption === correctIdx,
  });
  clearInterval(timer);

  currentQuestion++;
  if (currentQuestion >= questions.length) {
    showResults();
  } else {
    setTimeout(showQuestion, 5000);
    rebuildPlayerStatusList();
  }
}

function showResults() {
  quizContainer.style.display = "none";
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.style.display = "block";
  document.getElementById("final-score").textContent = score;
  document.getElementById("total-questions-results").textContent =
    questions.length;

  if (currentRoomCode && socket) {
    socket.emit("playerScore", {
      roomCode: currentRoomCode,
      playerId: socket.id,
      score: score,
      totalQuestions: questions.length,
    });
  }
}

socket.on("startQuiz", () => {
  const chosen =
    typeof selectedQuestions !== "undefined" &&
    selectedQuestions &&
    selectedQuestions.length
      ? selectedQuestions
      : typeof getQuestionsByCount === "function"
      ? getQuestionsByCount(
          typeof selectedNumQuestions === "number" && selectedNumQuestions
            ? selectedNumQuestions
            : 10
        )
      : Array.isArray(questionsArray)
      ? questionsArray.slice(
          0,
          typeof selectedNumQuestions === "number" && selectedNumQuestions
            ? selectedNumQuestions
            : 10
        )
      : [];
  startQuiz(chosen);
});

socket.on("stopTimer", () => {
  clearInterval(timer);
  console.log("Timer parado pelo servidor");
});

socket.on("showCorrect", ({ correctIdx }) => {
  clearInterval(timer);

  showAnswers(correctIdx);
  setTimeout(() => nextQuestion(correctIdx), 5000);
});
