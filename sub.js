// Accordion functionality
const accordions = document.querySelectorAll(".accordion-button");

accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
        const panel = accordion.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
});

// Modal functionality for booking form
const modal = document.getElementById("bookingModal");
const bookingBtn = document.querySelector(".book-button");
const closeBtn = document.querySelector(".close-btn");

function openBookingForm() {
    modal.style.display = "block";
}

function closeBookingForm() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Live validation and form submission
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(msg => msg.innerText = '');

    // Name validation (Only letters and spaces)
    const name = document.getElementById("name");
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name.value.trim())) {
        document.getElementById("name-error").innerText = "Name must only contain letters and spaces.";
        isValid = false;
    }

    // Email validation (Improved regex)
    const email = document.getElementById("email");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.value.trim())) {
        document.getElementById("email-error").innerText = "Please enter a valid email address.";
        isValid = false;
    }

    // Phone validation (Must be exactly 10 digits)
    const phone = document.getElementById("phone");
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.value.trim())) {
        document.getElementById("phone-error").innerText = "Phone number must be exactly 10 digits.";
        isValid = false;
    }

    // Date validation (No past dates)
    const date = document.getElementById("date");
    const today = new Date().toISOString().split('T')[0];  // Get today's date in YYYY-MM-DD format
    if (date.value.trim() === "" || date.value < today) {
        document.getElementById("date-error").innerText = "Please select a valid date (no past dates allowed).";
        isValid = false;
    }

    // Time validation (Required)
    const time = document.getElementById("time");
    if (!time.value.trim()) {
        document.getElementById("time-error").innerText = "Please select a time.";
        isValid = false;
    }

    // If form is valid, submit it
    if (isValid) {
        alert("Your appointment has been successfully scheduled!");
        closeBookingForm();
    }
});

// Name field restriction (Only letters and spaces)
const nameField = document.getElementById("name");
nameField.addEventListener("input", function () {
    this.value = this.value.replace(/[^A-Za-z\s]/g, '');  // Remove any character that's not a letter or space
});

// Phone field restriction (Only 10 digits, no letters)
const phoneField = document.getElementById("phone");
phoneField.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, '');  // Remove any character that's not a digit
});
