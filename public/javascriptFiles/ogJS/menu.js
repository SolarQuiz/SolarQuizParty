function Menu() {
  menu.style.display = 'flex';
  quizContainer.style.display = 'none';
  aboutSection.style.display = 'none';
  resultsContainer.style.display = 'none';
  funFactEl.style.display = 'none';
}

function startQuestionFromMenu(idx) {
  currentQuestion = idx;
  score = 0;
  Question();
  quizContainer.style.display = 'flex';
  menu.style.display = 'none';
}