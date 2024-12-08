// chatbot.js
document.getElementById("chatbot-button").addEventListener("click", function() {
    let userQuery = prompt("How can we assist you? (e.g., I am looking for a 3-bedroom house in Bangalore)");
    if (userQuery) {
        alert("Searching properties based on your query: " + userQuery);
        // Add your backend logic here to search properties or connect to an API.
    }
});
