/* Javascript para Chat */

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const messageArea = document.getElementById('messageArea');

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
    }
});
