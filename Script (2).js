// Script.js

// Example JavaScript code for Danielle's Custom Care

// Function to display a welcome message
function displayWelcomeMessage() {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'alert alert-primary text-center'; // Bootstrap classes for styling
    messageContainer.textContent = "Welcome to Danielle's Custom Care!";
    document.body.prepend(messageContainer); // Add the message at the top of the body
    console.log("Welcome to Danielle's Custom Care!");
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    displayWelcomeMessage();

    // Example Bootstrap functionality: Add a button dynamically
    const button = document.createElement('button');
    button.className = 'btn btn-success mt-3'; // Bootstrap button styling
    button.textContent = 'Click Me!';
    button.onclick = () => alert('Button clicked!'); // Example button functionality
    document.body.appendChild(button);
});