// ======= CARRINHO DE COMPRAS =======
let cart = []; // Array para armazenar produtos do carrinho
const cartCount = document.querySelector('.cart-count'); // Elemento que mostra quantidade no ícone

// Seleciona todos os botões de "Adicionar ao carrinho"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card'); // Seleciona o card do produto
        const productName = productCard.querySelector('h3').innerText;
        const productPrice = productCard.querySelector('.price').innerText;

        // Cria objeto do produto
        const product = {
            name: productName,
            price: productPrice
        };

        // Adiciona ao carrinho
        cart.push(product);

        // Atualiza contador do carrinho
        cartCount.innerText = cart.length;

        // Feedback visual
        button.innerText = 'Adicionado ✅';
        setTimeout(() => {
            button.innerText = 'Adicionar ao carrinho';
        }, 1500);

        console.log('Carrinho:', cart); // Mostra no console (para desenvolvimento)
    });
});

// ======= MENU SUBMENU HOVER =======
const menuItems = document.querySelectorAll('li.has-submenu');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.submenu').style.display = 'block';
    });
    item.addEventListener('mouseleave', () => {
        item.querySelector('.submenu').style.display = 'none';
    });
});
