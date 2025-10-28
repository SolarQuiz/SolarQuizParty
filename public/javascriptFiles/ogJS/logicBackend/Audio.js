function playAudio(audio) {
  if (!audio.paused) {
    audio.pause();
    audio.currentTime = 0;
  }
  audio.play();
}