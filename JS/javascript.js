/* Javascript para Chat */

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
        messageArea.prepend(messageBubble);
        messageArea.scrollTop = 0;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('sell-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        window.location.href = "seus-itens.html"; 
    });
});

  