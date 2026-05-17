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

/* PREÇO PERSONALIZADO */

const slider = document.getElementById('slider');
const quantity = document.getElementById('quantity');
const price = document.getElementById('price');

slider.addEventListener('input', () => {

  const fotos = slider.value;

  quantity.innerText = fotos;

  let valor = fotos * 3.5;

  if(fotos >= 10){
    valor = fotos * 4.5;
  }

  if(fotos >= 20){
    valor = fotos * 3.5;
  }

  price.innerText = `R$${Math.round(valor)}`;

});
