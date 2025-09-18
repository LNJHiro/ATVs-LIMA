// Aguarda o DOM (a estrutura da página) ser completamente carregado antes de executar o script.
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os elementos importantes que vamos manipular.
    const cartItemsContainer = document.querySelector('.cart-items');
    const orderSummary = document.querySelector('.order-summary');
    const cartContent = document.querySelector('.cart-content');

    // Função principal para atualizar todos os cálculos e a exibição do carrinho.
    const updateCart = () => {
        // Seleciona todos os itens *atualmente* no carrinho.
        const cartItems = document.querySelectorAll('.cart-item');
        
        let subtotal = 0;
        let totalItems = 0;

        // Itera sobre cada item do carrinho para calcular o subtotal.
        cartItems.forEach(item => {
            const priceElement = item.querySelector('.item-price p');
            const quantityInput = item.querySelector('.item-quantity input');

            // Extrai o valor numérico do texto do preço (ex: "R$ 89,90" -> 89.90).
            const price = parseFloat(priceElement.innerText.replace('R$ ', '').replace(',', '.'));
            const quantity = parseInt(quantityInput.value);

            // Adiciona o valor do item (preço * quantidade) ao subtotal.
            subtotal += price * quantity;
            totalItems += quantity;
        });

        // Atualiza o resumo do pedido com os novos valores.
        updateOrderSummary(subtotal, totalItems);

        // Verifica se o carrinho está vazio para mostrar uma mensagem.
        if (cartItems.length === 0) {
            showEmptyCartMessage();
        }
    };

    // Função para atualizar a seção "Resumo do Pedido".
    const updateOrderSummary = (subtotal, totalItems) => {
        // Seleciona os elementos do resumo que precisam ser atualizados.
        const subtotalElement = orderSummary.querySelector('.summary-row span:last-child');
        const totalItemsElement = orderSummary.querySelector('.summary-row span:first-child');
        const totalElement = orderSummary.querySelector('.summary-total span:last-child');
        
        // Formata os valores para o padrão brasileiro (BRL).
        const formattedSubtotal = subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        const formattedTotal = subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // Assumindo frete grátis por enquanto.

        // Atualiza o HTML com os valores formatados.
        subtotalElement.innerText = formattedSubtotal;
        totalItemsElement.innerText = `Subtotal (${totalItems} itens)`;
        totalElement.innerText = formattedTotal;
    };

    // Função para mostrar uma mensagem quando o carrinho estiver vazio.
    const showEmptyCartMessage = () => {
        cartContent.innerHTML = `
            <div class="empty-cart-message">
                <h2>Seu carrinho está vazio</h2>
                <p>Adicione produtos da nossa vitrine para vê-los aqui.</p>
                <a href="index.html" class="cta-button">Voltar para a loja</a>
            </div>
        `;
        // Adiciona um estilo para a mensagem de carrinho vazio
        const style = document.createElement('style');
        style.innerHTML = `
            .empty-cart-message {
                grid-column: 1 / -1; /* Ocupa todo o espaço do grid */
                text-align: center;
                padding: 50px 20px;
                background-color: #f9f9f9;
                border-radius: 8px;
            }
            .empty-cart-message h2 {
                font-size: 1.8rem;
                margin-bottom: 15px;
            }
            .empty-cart-message p {
                margin-bottom: 30px;
                color: var(--cor-cinza);
            }
        `;
        document.head.appendChild(style);
    };

    // Adiciona os "escutadores de eventos" para interatividade.
    // Usamos o container dos itens para delegar os eventos. Isso é mais eficiente.
    cartItemsContainer.addEventListener('click', (event) => {
        // Verifica se o clique foi no botão "Remover".
        if (event.target.classList.contains('remove-item')) {
            // Encontra o elemento 'cart-item' mais próximo e o remove.
            const itemToRemove = event.target.closest('.cart-item');
            itemToRemove.remove();
            // Atualiza o carrinho após a remoção.
            updateCart();
        }
    });

    cartItemsContainer.addEventListener('change', (event) => {
        // Verifica se a mudança foi em um input de quantidade.
        if (event.target.matches('.item-quantity input')) {
            // Garante que a quantidade não seja menor que 1.
            if (event.target.value < 1) {
                event.target.value = 1;
            }
            // Atualiza o carrinho após a mudança de quantidade.
            updateCart();
        }
    });

    // Chama a função updateCart() uma vez no início para calcular os totais iniciais.
    updateCart();
});
