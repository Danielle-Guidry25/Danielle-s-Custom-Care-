// Script.js

// Example JavaScript code for Danielle's Custom Care

// Function to display a welcome message
function displayWelcomeMessage() {
  const messageContainer = document.createElement("div");
  messageContainer.className = "alert alert-primary text-center"; // Bootstrap classes for styling
  messageContainer.textContent = "Welcome to Danielle's Custom Care!"; // Welcome message string
  document.body.prepend(messageContainer); // Add the message at the top of the body
  console.log("Welcome to Danielle's Custom Care!"); // Log the welcome message
}

// Function to dynamically add a Bootstrap-styled card
function addBootstrapCard() {
  const cardContainer = document.createElement("div");
  cardContainer.className = "card mt-4"; // Bootstrap card styling

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = "Our Services";

  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent = "We offer personalized care plans tailored to your needs.";

  const cardButton = document.createElement("a");
  cardButton.className = "btn btn-primary";
  cardButton.href = "#services";
  cardButton.textContent = "Learn More";

  // Append elements to the card
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardButton);
  cardContainer.appendChild(cardBody);

  // Append the card to the body
  document.body.appendChild(cardContainer);
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  displayWelcomeMessage();

  // Example Bootstrap functionality: Add a button dynamically
  const button = document.createElement("button");
  button.className = "btn btn-success mt-3"; // Bootstrap button styling
  button.textContent = "Click Me!"; // Button text string
  button.onclick = () => alert("Button clicked!"); // Alert message string
  document.body.appendChild(button); // Append the button to the body

  // Add a Bootstrap card dynamically
  addBootstrapCard();
});
