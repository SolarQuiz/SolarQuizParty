function startTimer() {
  clearInterval(timer);
  timeLeft = 30;
  timerEl.textContent = timeLeft + 's';
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft + 's';
    if (timeLeft <= 0) {
      clearInterval(timer);
      timeoutHandler();
    }
  }, 1000);
}

function timeoutHandler() {
  funFactLocked = true;

  Array.from(optionsContainer.children).forEach(button => {
    button.disabled = true;
    button.classList.add('skipped');
    button.classList.remove('selected');
  });
  funFactEl.textContent = 'Questão pulada: Você não respondeu :(';
  playAudio(Incorrect);
  funFactEl.style.display = 'block';
  nextBtn.disabled = true;
  selectedOption = null;

  setTimeout(() => {
    if (menu.style.display === 'none') {
      nextQuestion();
      funFactLocked = false;
    } else {
      Menu();
      funFactLocked = false;
    }
  }, 500);
}