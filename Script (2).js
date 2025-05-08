// Script.js

// Example JavaScript code for Danielle's Custom Care

// Function to display a welcome message
function displayWelcomeMessage() {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'alert alert-primary text-center'; // Bootstrap classes for styling
    messageContainer.textContent = "Welcome to Danielle's Custom Care!"; // Welcome message string
    document.body.prepend(messageContainer); // Add the message at the top of the body
    console.log("Welcome to Danielle's Custom Care!"); // Log the welcome message
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    displayWelcomeMessage();

    // Example Bootstrap functionality: Add a button dynamically
    const button = document.createElement('button');
    button.className = 'btn btn-success mt-3'; // Bootstrap button styling
    button.textContent = 'Click Me!'; // Button text string
    button.onclick = () => alert('Button clicked!'); // Alert message string
    document.body.appendChild(button); // Append the button to the body
});