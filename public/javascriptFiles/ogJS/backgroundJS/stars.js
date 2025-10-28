function generateStars(count = 60) {
  const body = document.body;

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;

    const size = Math.random() < 0.6 
      ? Math.random() * 3 + 2
      : Math.random() < 0.8 
        ? Math.random() * 5 + 5
        : Math.random() * 10 + 10;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;

    body.appendChild(star);
  }
}