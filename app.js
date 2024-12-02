// app.js
let currentUser = "left"; // Track which user is sending the message

document.getElementById('send-button').addEventListener('click', sendMessage);

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        displayMessage(messageText, currentUser);

        // Switch users
        currentUser = currentUser === "left" ? "right" : "left";
        
        // Clear the input field
        messageInput.value = "";
    }
}

function displayMessage(text, user) {
    const chatBox = document.getElementById('chat-box');
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', user);
    
    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.textContent = text;

    messageElement.appendChild(messageContent);
    chatBox.appendChild(messageElement);
    
    // Scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;
}
