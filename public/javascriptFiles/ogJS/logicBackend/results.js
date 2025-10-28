function Results() {
  quizContainer.style.display = 'none';
  resultsContainer.style.display = 'block';
  finalScoreEl.textContent = score;
  totalQuestionsResults.textContent = questions.length;
  
  if (currentRoomCode && socket) {
    socket.emit('playerScore', {
      roomCode: currentRoomCode,
      playerId: socket.id,
      score: score,
      totalQuestions: questions.length
    });
  }

  let pct = (score / questions.length) * 100;

  if (pct >= 90) {
    resultMessage.textContent = "Incrível! Você domina o espaço como ninguém!";
    playAudio(Correct);
  } else if (pct >= 80) {
    resultMessage.textContent = "Excelente! Seu conhecimento sobre o universo é impressionante!";
    playAudio(Correct);
  } else if (pct >= 70) {
    resultMessage.textContent = "Muito bom! Você sabe bastante sobre o cosmos!";
    playAudio(Correct);
  } else if (pct >= 60) {
    resultMessage.textContent = "Ótimo progresso! Continue explorando as estrelas!";
    playAudio(Correct);
  } else if (pct >= 50) {
    resultMessage.textContent = "Bom trabalho! O universo tem muito mais para você descobrir!";
    playAudio(Correct);
  } else if (pct >= 40) {
    resultMessage.textContent = "Você está no caminho certo! Cada passo conta na jornada espacial!";
    playAudio(Incorrect);
  } else if (pct >= 30) {
    resultMessage.textContent = "Não desista! O conhecimento do universo é uma aventura constante!";
    playAudio(Incorrect);
  } else if (pct >= 20) {
    resultMessage.textContent = "Continue tentando! O espaço é fascinante e espera por você!";
    playAudio(Incorrect);
  } else if (pct >= 10) {
    resultMessage.textContent = "Cada tentativa te aproxima das estrelas! Persista!";
    playAudio(Incorrect);
  } else { 
    resultMessage.textContent = "Tente novamente! O universo está cheio de maravilhas para descobrir.";
    playAudio(Incorrect);
  }

  if (score == 0 || questions.length == 0) {
    resultMessage.textContent = "Você pulou ou errou TODAS as questões!? Eu acho que você tem potencial pra tentar de novo.."
    playAudio(Incorrect);
  }
}