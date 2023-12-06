// Chat 

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const messageArea = document.getElementById('messageArea');

    input.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            const messageText = input.value.trim();
            if (messageText) {
                createMessageBubble(messageText);
                input.value = '';
                event.preventDefault(); 
            }
        }
    });
    
    sendButton.addEventListener('click', function() {
        const messageText = input.value.trim();
        if (messageText) {
            createMessageBubble(messageText);
            input.value = '';
        }
    });

    function createMessageBubble(text) {
        const messageBubble = document.createElement('li');
        messageBubble.textContent = text;
        messageBubble.classList.add('message-bubble');
        messageArea.appendChild(messageBubble);
        messageArea.scrollTop = 0;
    }
});

// Botão "Postar" da página de venda de itens

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('sell-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        window.location.href = "seus-itens.html"; 
    });
});

// Verificar Qual informação de mercado foi clicada e mudar as informações dela

document.addEventListener('DOMContentLoaded', function() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const produto = urlParams.get('produto');

    const nomeProduto = decodeURIComponent(produto);

    if (nomeProduto) {
        document.querySelector('#titulo-produto').textContent = nomeProduto;
    }

    const listaPrecoProduto = document.querySelector('#lista-preco-produto');
    console.log(listaPrecoProduto);

    if (listaPrecoProduto) {
        const precoProdutos = listaPrecoProduto.querySelectorAll('li');
        precoProdutos.forEach((precoProduto) => {
            precoProduto.textContent = "PREÇO " + "'" + nomeProduto + "'";
        });
    }

    const descricaoProduto = document.querySelector('#description');

    if (descricaoProduto) {
        descricaoProduto.innerHTML = "DESCRIÇÃO<br><br>'" + nomeProduto + "'";
    }    
});
