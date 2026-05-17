/* =========================
   PARTICLES
========================= */

const particlesContainer =
document.querySelector('.particles');

for(let i = 0; i < 80; i++){

  const particle =
  document.createElement('div');

  particle.classList.add('particle');

  particle.style.left =
  Math.random() * 100 + '%';

  particle.style.animationDuration =
  Math.random() * 12 + 6 + 's';

  particle.style.opacity =
  Math.random();

  const size =
  Math.random() * 4 + 2;

  particle.style.width =
  `${size}px`;

  particle.style.height =
  `${size}px`;

  particlesContainer.appendChild(particle);

}

/* =========================
   CARRINHO
========================= */

let cart = [];

/* ADICIONAR */

function addToCart(nome, preco){

  cart.push({

    nome,
    preco

  });

  updateCart();

  showNotification(
    `${nome} adicionado ao carrinho`
  );

}

/* ATUALIZAR CARRINHO */

function updateCart(){

  const cartItems =
  document.getElementById('cart-items');

  const totalElement =
  document.getElementById('cart-total');

  cartItems.innerHTML = '';

  let total = 0;

  cart.forEach((item,index)=>{

    total += item.preco;

    cartItems.innerHTML += `

      <div class="cart-item">

        <div>

          <h4>${item.nome}</h4>

          <p>R$${item.preco}</p>

        </div>

        <button onclick="removeItem(${index})">

          <i class="fas fa-trash"></i>

        </button>

      </div>

    `;

  });

  totalElement.innerText =
  total;

}

/* REMOVER ITEM */

function removeItem(index){

  const removed =
  cart[index];

  cart.splice(index,1);

  updateCart();

  showNotification(
    `${removed.nome} removido`
  );

}

/* FINALIZAR PEDIDO */

function finalizarPedido(){

  if(cart.length === 0){

    showNotification(
      'Seu carrinho está vazio'
    );

    return;

  }

  let mensagem =
  'Olá! Vim pelo site da VisuAll.%0A%0A';

  let total = 0;

  cart.forEach(item=>{

    mensagem +=
    `• ${item.nome} - R$${item.preco}%0A`;

    total += item.preco;

  });

  mensagem +=
  `%0A💰 Total: R$${total}`;

  mensagem +=
  `%0A%0AGostaria de fechar esse projeto.`;

  const numero =
  '5514981775443';

  window.open(

    `https://wa.me/${numero}?text=${mensagem}`,

    '_blank'

  );

}

/* =========================
   SLIDER PERSONALIZADO
========================= */

const slider =
document.getElementById('slider');

const quantity =
document.getElementById('quantity');

const price =
document.getElementById('price');

if(slider){

  slider.addEventListener('input', ()=>{

    const fotos =
    Number(slider.value);

    quantity.innerText =
    fotos;

    let valor = 0;

    /* PREÇO MÉDIO */

    if(fotos <= 5){

      valor =
      fotos * 6;

    }

    else if(fotos <= 10){

      valor =
      fotos * 4.5;

    }

    else{

      valor =
      fotos * 3.5;

    }

    price.innerText =
    `R$${Math.round(valor)}`;

  });

}

/* =========================
   NOTIFICAÇÃO
========================= */

function showNotification(text){

  const notification =
  document.createElement('div');

  notification.classList.add(
    'notification'
  );

  notification.innerText =
  text;

  document.body.appendChild(
    notification
  );

  setTimeout(()=>{

    notification.classList.add(
      'show'
    );

  },100);

  setTimeout(()=>{

    notification.classList.remove(
      'show'
    );

    setTimeout(()=>{

      notification.remove();

    },300);

  },2500);

}

/* =========================
   EFEITO HEADER
========================= */

const header =
document.querySelector('header');

window.addEventListener('scroll',()=>{

  if(window.scrollY > 50){

    header.style.background =
    '#020617f0';

    header.style.borderBottom =
    '1px solid #ffffff15';

  }

  else{

    header.style.background =
    '#020617bb';

  }

});

/* =========================
   ANIMAÇÃO SCROLL
========================= */

const observer =
new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.classList.add(
        'show-element'
      );

    }

  });

},{
  threshold:0.2
});

const hiddenElements =
document.querySelectorAll(
  '.service-card,.price-card,.portfolio-item,.product-card'
);

hiddenElements.forEach(el=>{

  el.classList.add('hidden-element');

  observer.observe(el);

});
