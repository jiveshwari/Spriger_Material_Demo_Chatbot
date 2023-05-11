/* Copyright (c) 2023 Jiveshwari Chinchghare */

document.getElementById("send-button").addEventListener("click", function() {
    sendMessage();
});

document.getElementById("message-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    let messageInput = document.getElementById("message-input");
    let messageList = document.getElementById("message-list");
    let messageContent = messageInput.value.trim();
    
    if (messageContent !== "") {
        // Create a new sent message element
        let sentMessageElement = document.createElement("p");
        sentMessageElement.className = "message sent";
        sentMessageElement.innerHTML = '<div class="content">' + messageContent + '</div>';
        messageList.appendChild(sentMessageElement);

        // Scroll to the bottom of the chat window
        messageList.scrollTop = messageList.scrollHeight;

        // Clear the input field
        messageInput.value = "";

        // Simulate received message after a short delay
        setTimeout(function() {
            // Create a new received message element
            let receivedMessageElement = document.createElement("p");
            receivedMessageElement.className = "message received";
            receivedMessageElement.innerHTML = '<div class="content">You wrote: ' + messageContent + '</div>';
            messageList.appendChild(receivedMessageElement);

            // Scroll to the bottom of the chat window
            messageList.scrollTop = messageList.scrollHeight;
        }, 300); // Delay in milliseconds for simulating received message
    }
}