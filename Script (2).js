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

  // Add hover effect to the button
  cardButton.addEventListener("mouseover", () => {
    cardButton.classList.add("btn-success"); // Change to green on hover
  });

  cardButton.addEventListener("mouseout", () => {
    cardButton.classList.remove("btn-success"); // Revert to primary on mouse out
  });

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

  // Add the services section dynamically
  const servicesSection = document.createElement("section");
  servicesSection.id = "services";
  servicesSection.className = "mb-5";

  const servicesTitle = document.createElement("h2");
  servicesTitle.className = "text-center";
  servicesTitle.textContent = "Our Services";

  const servicesList = document.createElement("ul");
  servicesList.className = "list-group";

  const services = [
    "Custom Care Plans",
    "24/7 Support",
    "Professional Staff",
    "Personalized Custom Attention"
  ];

  services.forEach((service, index) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";

    const serviceButton = document.createElement("button");
    serviceButton.className = "btn btn-primary w-100";
    serviceButton.textContent = service;

    // Add hover effect
    serviceButton.onmouseover = () => serviceButton.classList.add("btn-success");
    serviceButton.onmouseout = () => serviceButton.classList.remove("btn-success");

    // Add click event for "Custom Care Plans"
    if (index === 0) {
      serviceButton.addEventListener("click", () => {
        const popup = document.getElementById("customCarePopup");
        popup.style.visibility = "visible";
        popup.style.opacity = "1";
      });
    }

    // Add click event for "24/7 Support"
    if (index === 1) {
      serviceButton.addEventListener("click", () => {
        const popup = document.getElementById("supportPopup");
        popup.style.visibility = "visible";
        popup.style.opacity = "1";
      });
    }

    listItem.appendChild(serviceButton);
    servicesList.appendChild(listItem);
  });

  servicesSection.appendChild(servicesTitle);
  servicesSection.appendChild(servicesList);
  document.body.appendChild(servicesSection);

  // Add the popup box for "Custom Care Plans"
  const customCarePopup = document.createElement("div");
  customCarePopup.id = "customCarePopup";
  customCarePopup.className = "popup";
  customCarePopup.innerHTML = `
    <h2>Custom Care Plans</h2>
    <p>We offer personalized care plans tailored to your unique needs. Contact us to learn more!</p>
    <button class="btn btn-primary" id="closeCustomCarePopup">Close</button>
  `;
  document.body.appendChild(customCarePopup);

  // Add the popup box for "24/7 Support"
  const supportPopup = document.createElement("div");
  supportPopup.id = "supportPopup";
  supportPopup.className = "popup";
  supportPopup.innerHTML = `
    <h2>24/7 Support</h2>
    <p>We provide round-the-clock support to ensure your needs are met at any time. Reach out to us now!</p>
    <button class="btn btn-primary" id="closeSupportPopup">Close</button>
  `;
  document.body.appendChild(supportPopup);

  // Add event listener to close the "Custom Care Plans" popup
  document.getElementById("closeCustomCarePopup").addEventListener("click", () => {
    customCarePopup.style.visibility = "hidden";
    customCarePopup.style.opacity = "0";
  });

  // Add event listener to close the "24/7 Support" popup
  document.getElementById("closeSupportPopup").addEventListener("click", () => {
    supportPopup.style.visibility = "hidden";
    supportPopup.style.opacity = "0";
  });

  // Add the contact section dynamically
  const contactSection = document.createElement("section");
  contactSection.id = "contact";
  contactSection.className = "mb-5";

  const contactTitle = document.createElement("h2");
  contactTitle.className = "text-center";
  contactTitle.textContent = "Contact Us";

  const contactForm = document.createElement("form");
  contactForm.action = "#";
  contactForm.method = "post";
  contactForm.className = "row g-3";

  const nameDiv = document.createElement("div");
  nameDiv.className = "col-md-6";
  const nameLabel = document.createElement("label");
  nameLabel.htmlFor = "name";
  nameLabel.className = "form-label";
  nameLabel.textContent = "Name:";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "name";
  nameInput.name = "name";
  nameInput.className = "form-control";
  nameInput.placeholder = "Enter your name";
  nameInput.required = true;
  nameDiv.appendChild(nameLabel);
  nameDiv.appendChild(nameInput);

  const emailDiv = document.createElement("div");
  emailDiv.className = "col-md-6";
  const emailLabel = document.createElement("label");
  emailLabel.htmlFor = "email";
  emailLabel.className = "form-label";
  emailLabel.textContent = "Email:";
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "email";
  emailInput.name = "email";
  emailInput.className = "form-control";
  emailInput.placeholder = "Enter your email";
  emailInput.required = true;
  emailDiv.appendChild(emailLabel);
  emailDiv.appendChild(emailInput);

  const messageDiv = document.createElement("div");
  messageDiv.className = "col-12";
  const messageLabel = document.createElement("label");
  messageLabel.htmlFor = "message";
  messageLabel.className = "form-label";
  messageLabel.textContent = "Message:";
  const messageTextarea = document.createElement("textarea");
  messageTextarea.id = "message";
  messageTextarea.name = "message";
  messageTextarea.className = "form-control";
  messageTextarea.placeholder = "Write your message here";
  messageTextarea.required = true;
  messageDiv.appendChild(messageLabel);
  messageDiv.appendChild(messageTextarea);

  const submitButtonDiv = document.createElement("div");
  submitButtonDiv.className = "col-12";
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "btn btn-primary";
  submitButton.textContent = "Send Message";
  submitButtonDiv.appendChild(submitButton);

  contactForm.appendChild(nameDiv);
  contactForm.appendChild(emailDiv);
  contactForm.appendChild(messageDiv);
  contactForm.appendChild(submitButtonDiv);

  contactSection.appendChild(contactTitle);
  contactSection.appendChild(contactForm);
  document.body.appendChild(contactSection);
});
