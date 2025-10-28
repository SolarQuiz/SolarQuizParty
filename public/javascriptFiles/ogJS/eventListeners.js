function setupEventListeners() {
  playBtn.addEventListener("click", () => {
    menu.style.display = "none";
    joinRoomSection.style.display = "flex";
    playAudio(Tap);
  });

  aboutBtn.addEventListener("click", () => {
    menu.style.display = "none";
    aboutSection.style.display = "block";
    playAudio(Tap);
  });

  backFromAbout.addEventListener("click", () => {
    aboutSection.style.display = "none";
    Menu();
    playAudio(Tap);
  });

  questBtn.addEventListener("click", () => {
    menu.style.display = "none";
    aboutSection.style.display = "none";
    roomCodeSection.style.display = "block";
    document.getElementById("room-creator-info").style.display = "block";
    playAudio(Tap);
  });

  backFromMenuJoin.addEventListener("click", () => {
    joinRoomSection.style.display = "none";
    roomCodeSection.style.display = "none";
    Menu();
    playAudio(Tap);
  });

  nextBtn.addEventListener("click", nextQuestion);

  restartBtn.addEventListener("click", () => {
    window.location.reload();
  });
}
