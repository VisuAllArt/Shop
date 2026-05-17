/* =========================
   PARTICLES
========================= */

const particles = document.querySelector('.particles');

for(let i = 0; i < 50; i++){

  const particle = document.createElement('div');

  particle.classList.add('particle');

  particle.style.left =
  Math.random() * 100 + '%';

  particle.style.animationDuration =
  Math.random() * 10 + 5 + 's';

  particle.style.opacity =
  Math.random();

  particle.style.width =
  particle.style.height =
  Math.random() * 4 + 2 + 'px';

  particles.appendChild(particle);

}

/* =========================
   PREÇO PERSONALIZADO
========================= */

const slider =
document.getElementById('slider');

const quantity =
document.getElementById('quantity');

const price =
document.getElementById('price');

slider.addEventListener('input', () => {

  const fotos = Number(slider.value);

  quantity.innerText = fotos;

  let valor = 0;

  /* MÉDIA DOS PREÇOS */

  if(fotos <= 5){

    valor = fotos * 6;

  }

  else if(fotos <= 10){

    valor = fotos * 4.5;

  }

  else{

    valor = fotos * 3.5;

  }

  price.innerText =
  `R$${Math.round(valor)}`;

});

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

}

/* ATUALIZAR */

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

  totalElement.innerText = total;

}

/* REMOVER */

function removeItem(index){

  cart.splice(index,1);

  updateCart();

}

/* FINALIZAR PEDIDO */

function finalizarPedido(){

  if(cart.length === 0){

    alert('Seu carrinho está vazio.');

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
  `%0A💰 Total do Pedido: R$${total}`;

  mensagem +=
  `%0A%0AGostaria de fechar esse serviço.`;

  const numero =
  '5514981775443';

  window.open(

    `https://wa.me/${numero}?text=${mensagem}`,

    '_blank'

  );

    }
