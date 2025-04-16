document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });
  });
  

//   newsletter footer

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email");
    const successMessage = document.getElementById("success-message");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const email = emailInput.value;
  
      if (validateEmail(email)) {
        successMessage.style.display = "block";
        emailInput.value = ""; // Clear input
        setTimeout(() => {
          successMessage.style.display = "none";
        }, 3000); // Hide message after 3 seconds
      } else {
        alert("Please enter a valid email address!");
      }
    });
  
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });
  