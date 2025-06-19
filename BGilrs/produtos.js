// Dados dos produtos (simulando um banco de dados)
const produtos = [
  {
      id: 1,
      nome: "Acessório",
      categoria: "Acessórios",
      descricao: "A peça que estava faltando para seu look perfeito para o dia a dia.",
      imagens: ["fotos/B1.jpg"],
      estoque: 15,
      avaliacoes: 24,
      rating: 4.5,
      tags: ["Novo", "Promoção"],
      fornecedor: "Fornecedor A",
      tempoEntrega: "5-7 dias úteis"
  },
  {
      id: 2,
      nome: "Acessório",
      categoria: "Acessórios",
      descricao: "Acessório versátil e elegante para complementar seu estilo.",
      imagens: ["fotos/B2.jpg"],
      estoque: 20,
      avaliacoes: 18,
      rating: 4.0,
      tags: ["Novo"],
      fornecedor: "Fornecedor B",
      tempoEntrega: "3-5 dias úteis"
  },
  {
      id: 3,
      nome: "Acessório",
      categoria: "Acessórios",
      descricao: "Acessório moderno e confortável para o dia a dia.",
      imagens: ["fotos/B3.jpg"],
      estoque: 10,
      avaliacoes: 12,
      rating: 4.2,
      tags: ["Novo"],
      fornecedor: "Fornecedor C",
      tempoEntrega: "4-6 dias úteis"
  },
  {
      id: 4,
      nome: "Acessório",
      categoria: "Acessórios",
      descricao: "Acessório elegante e versátil para complementar seu look.",
      imagens: ["fotos/B4.jpg"],
      estoque: 12,
      avaliacoes: 8,
      rating: 4.3,
      tags: ["Novo"],
      fornecedor: "Fornecedor D",
      tempoEntrega: "3-5 dias úteis"
  },
  {
      id: 5,
      nome: "Acessório",
      categoria: "Acessórios",
      descricao: "Peça única que adiciona charme e sofisticação ao seu estilo.",
      imagens: ["fotos/B5.jpg"],
      estoque: 18,
      avaliacoes: 15,
      rating: 4.7,
      tags: ["Novo", "Exclusivo"],
      fornecedor: "Fornecedor E",
      tempoEntrega: "4-6 dias úteis"
  },
  {
      id: 6,
      nome: "Acessório",
      categoria: "Acessórios",
      descricao: "Acessório moderno e funcional para o dia a dia.",
      imagens: ["fotos/B6.jpg"],
      estoque: 14,
      avaliacoes: 11,
      rating: 4.1,
      tags: ["Novo"],
      fornecedor: "Fornecedor F",
      tempoEntrega: "5-7 dias úteis"
  },
  {
      id: 7,
      nome: "Acessório",
      categoria: "Acessórios",
      descricao: "Peça delicada e elegante para momentos especiais.",
      imagens: ["fotos/B8.jpg"],
      estoque: 16,
      avaliacoes: 13,
      rating: 4.4,
      tags: ["Novo"],
      fornecedor: "Fornecedor H",
      tempoEntrega: "4-6 dias úteis"
  },
  {
      id: 8,
      nome: "Acessório",
      categoria: "Acessórios",
      descricao: "Acessório versátil que combina com qualquer ocasião.",
      imagens: ["fotos/B9.jpg"],
      estoque: 11,
      avaliacoes: 9,
      rating: 4.6,
      tags: ["Novo", "Exclusivo"],
      fornecedor: "Fornecedor I",
      tempoEntrega: "5-7 dias úteis"
  },
  {
      id: 9,
      nome: "Acessório",
      categoria: "Acessórios",
      descricao: "Peça contemporânea com design único e exclusivo.",
      imagens: ["fotos/B10.jpg"],
      estoque: 13,
      avaliacoes: 7,
      rating: 4.9,
      tags: ["Novo", "Premium"],
      fornecedor: "Fornecedor J",
      tempoEntrega: "3-5 dias úteis"
  },
  {
      id: 10,
      nome: "Acessório",
      categoria: "Acessórios",
      descricao: "Peça única que adiciona charme e sofisticação ao seu estilo.",
      imagens: ["fotos/B13.jpg"],
      estoque: 17,
      avaliacoes: 12,
      rating: 4.6,
      tags: ["Novo", "Exclusivo"],
      fornecedor: "Fornecedor L",
      tempoEntrega: "4-6 dias úteis"
  },
  {
      id: 11,
      nome: "Acessório",
      categoria: "Acessórios",
      descricao: "Acessório moderno e funcional para o dia a dia.",
      imagens: ["fotos/B14.jpg"],
      estoque: 13,
      avaliacoes: 8,
      rating: 4.2,
      tags: ["Novo"],
      fornecedor: "Fornecedor M",
      tempoEntrega: "5-7 dias úteis"
  },
  {
      id: 12,
      nome: "Acessório",
      categoria: "Acessórios",
      descricao: "Peça delicada e elegante para momentos especiais.",
      imagens: ["fotos/B15.jpg"],
      estoque: 11,
      avaliacoes: 9,
      rating: 4.7,
      tags: ["Novo", "Limitado"],
      fornecedor: "Fornecedor N",
      tempoEntrega: "3-5 dias úteis"
  },
  {
      id: 13,
      nome: "Acessório",
      categoria: "Acessórios",
      descricao: "Acessório versátil que combina com qualquer ocasião.",
      imagens: ["fotos/B16.jpg"],
      estoque: 15,
      avaliacoes: 11,
      rating: 4.4,
      tags: ["Novo"],
      fornecedor: "Fornecedor O",
      tempoEntrega: "4-6 dias úteis"
  },
  {
      id: 14,
      nome: "Acessório",
      categoria: "Acessórios",
      descricao: "Peça contemporânea com design único e exclusivo.",
      imagens: ["fotos/B17.jpg"],
      estoque: 12,
      avaliacoes: 7,
      rating: 4.8,
      tags: ["Novo", "Exclusivo"],
      fornecedor: "Fornecedor P",
      tempoEntrega: "5-7 dias úteis"
  },
  {
      id: 15,
      nome: "Acessório",
      categoria: "Acessórios",
      descricao: "Acessório sofisticado para mulheres que valorizam qualidade e estilo.",
      imagens: ["fotos/B18.jpg"],
      estoque: 16,
      avaliacoes: 13,
      rating: 4.5,
      tags: ["Novo", "Premium"],
      fornecedor: "Fornecedor Q",
      tempoEntrega: "3-5 dias úteis"
  },
  {
      id: 16,
      nome: "Acessório",
      categoria: "Acessórios",
      descricao: "Acessório elegante e versátil para complementar seu look.",
      imagens: ["fotos/B20.jpg"],
      estoque: 10,
      avaliacoes: 6,
      rating: 4.9,
      tags: ["Novo", "Exclusivo"],
      fornecedor: "Fornecedor R",
      tempoEntrega: "4-6 dias úteis"
  }
];

// Carrinho de compras
let carrinho = [];

// Elementos do DOM
const productModal = document.getElementById('productModal');
const cartSidebar = document.querySelector('.cart-sidebar');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.total-amount');

function atualizarCarrinho() {
  cartItems.innerHTML = '';
  let total = 0;

  carrinho.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'cart-item';
      itemElement.innerHTML = `
          <div class="cart-item-image">
              <img src="${item.imagem}" alt="${item.nome}">
          </div>
          <div class="cart-item-details">
              <h4 class="cart-item-title">${item.nome}</h4>
              <div class="cart-item-quantity">
                  <button class="quantity-btn minus" data-id="${item.id}">-</button>
                  <span>${item.quantidade}</span>
                  <button class="quantity-btn plus" data-id="${item.id}">+</button>
              </div>
          </div>
          <button class="remove-item" data-id="${item.id}">&times;</button>
      `;
      cartItems.appendChild(itemElement);
      total += item.quantidade;
  });

  cartTotal.textContent = `Total: ${total} item(s)`;
}

// Função para renderizar os produtos
function renderizarProdutos(categoria = 'todos') {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    const produtosFiltrados = categoria === 'todos' 
        ? produtos 
        : produtos.filter(produto => produto.categoria === categoria);

    produtosFiltrados.forEach(produto => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${produto.imagens[0]}" alt="${produto.nome}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${produto.nome}</h3>
                <button class="button-primary" onclick="adicionarAoCarrinho(${produto.id})">
                    Adicionar ao Carrinho
                </button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Função para filtrar produtos
function filtrarProdutos(categoria) {
    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.dataset.category === categoria) {
            button.classList.add('active');
        }
    });
    renderizarProdutos(categoria);
}

// Função para adicionar ao carrinho
function adicionarAoCarrinho(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    if (produto) {
        // Aqui você pode implementar a lógica do carrinho
        alert(`Produto "${produto.nome}" adicionado ao carrinho!`);
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar produtos iniciais
    renderizarProdutos();

    // Adicionar eventos aos botões de filtro
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filtrarProdutos(button.dataset.category);
        });
    });

    // Smooth scroll para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Modal de produto
document.querySelectorAll('.quick-view-button').forEach(btn => {
  btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productId = btn.dataset.productId;
      const produto = produtos.find(p => p.id === parseInt(productId));
      
      if (produto) {
          const modal = document.querySelector('.product-modal');
          const modalContent = modal.querySelector('.modal-content');
          
          modalContent.innerHTML = `
              <button class="modal-close">&times;</button>
              <div class="modal-body">
                  <div class="product-gallery">
                      <div class="main-image">
                          <img src="${produto.imagens[0]}" alt="${produto.nome}">
                      </div>
                      <div class="thumbnail-list">
                          ${produto.imagens.map((img, index) => `
                              <img src="${img}" alt="Thumbnail ${index + 1}" 
                                   class="thumbnail ${index === 0 ? 'active' : ''}"
                                   onclick="changeMainImage(this.src)">
                          `).join('')}
                      </div>
                  </div>
                  <div class="product-details">
                      <h2 class="product-title">${produto.nome}</h2>
                      <div class="product-rating">
                          ${Array(5).fill().map((_, i) => `
                              <i class='bx ${i < Math.floor(produto.rating) ? 'bxs-star' : 
                                           i < produto.rating ? 'bxs-star-half' : 'bx-star'}'></i>
                          `).join('')}
                          <span>(${produto.avaliacoes})</span>
                      </div>
                      <div class="product-description">
                          <p>${produto.descricao}</p>
                      </div>
                      <div class="product-meta">
                          <div class="meta-item">
                              <i class='bx bx-package'></i>
                              <span>Entrega em ${produto.tempoEntrega}</span>
                          </div>
                          <div class="meta-item">
                              <i class='bx bx-refresh'></i>
                              <span>Garantia de 7 dias</span>
                          </div>
                          <div class="meta-item">
                              <i class='bx bx-credit-card'></i>
                              <span>Parcele em até 12x</span>
                          </div>
                      </div>
                      <div class="product-actions">
                          <div class="quantity-selector">
                              <button class="quantity-btn minus">-</button>
                              <input type="number" value="1" min="1" max="${produto.estoque}">
                              <button class="quantity-btn plus">+</button>
                          </div>
                          <button class="add-to-cart-btn" data-id="${produto.id}">
                              Adicionar ao Carrinho
                          </button>
                          <button class="buy-now-btn" data-id="${produto.id}">
                              Comprar Agora
                          </button>
                      </div>
                  </div>
              </div>
          `;
          
          modal.style.display = 'block';
          
          // Event listeners para o modal
          modal.querySelector('.modal-close').addEventListener('click', () => {
              modal.style.display = 'none';
          });
          
          modal.querySelector('.add-to-cart-btn').addEventListener('click', () => {
              const quantidade = parseInt(modal.querySelector('.quantity-selector input').value);
              adicionarAoCarrinho(produto.id);
              modal.style.display = 'none';
          });
      }
  });
});

// Função para mudar a imagem principal
function changeMainImage(src) {
  const mainImage = document.querySelector('.main-image img');
  mainImage.src = src;
  
  document.querySelectorAll('.thumbnail').forEach(thumb => {
      thumb.classList.remove('active');
      if (thumb.src === src) {
          thumb.classList.add('active');
      }
  });
}

// Event listeners para o carrinho
document.querySelector('.cart-close').addEventListener('click', () => {
  cartSidebar.classList.remove('active');
});

document.querySelector('.checkout-btn').addEventListener('click', () => {
  if (carrinho.length === 0) {
      alert('Seu carrinho está vazio!');
      return;
  }
  
  // Aqui você pode adicionar a lógica para redirecionar para a página de checkout
  alert('Redirecionando para o checkout...');
});

// Animação suave ao rolar para as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
});

// Animação do header ao rolar
const header = document.querySelector('.main-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
      header.classList.remove('scroll-up');
      return;
  }
  
  if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
      header.classList.remove('scroll-up');
      header.classList.add('scroll-down');
  } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
      header.classList.remove('scroll-down');
      header.classList.add('scroll-up');
  }
  lastScroll = currentScroll;
});

// Animação dos produtos ao aparecer na tela
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
      }
  });
}, observerOptions);

document.querySelectorAll('.product-item').forEach(item => {
  observer.observe(item);
});