const particles = document.querySelector('.particles');

for(let i = 0; i < 50; i++){

  const particle = document.createElement('div');

  particle.classList.add('particle');

  particle.style.left = Math.random() * 100 + '%';

  particle.style.animationDuration =
  Math.random() * 10 + 5 + 's';

  particle.style.opacity = Math.random();

  particle.style.width =
  particle.style.height =
  Math.random() * 4 + 2 + 'px';

  particles.appendChild(particle);

}
