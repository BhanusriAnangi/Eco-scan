document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".video-slide");
    const headings = document.querySelectorAll(".typewriter");
    let currentSlide = 0;

    function changeSlide() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");

        // Trigger typing effect for the new slide
        const currentHeading = headings[currentSlide];
        const text = currentHeading.getAttribute("data-text");
        currentHeading.innerHTML = ""; // Clear any existing content

        let charIndex = 0;
        const type = () => {
            if (charIndex < text.length) {
                currentHeading.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(type, 100); // Adjust typing speed
            }
        };

        type();
    }

    // Initial typing for the first slide
    changeSlide();

    setInterval(changeSlide, 7000); // Change every 7 seconds
});


// about us section

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        // Remove active class from all tabs and contents
        tabs.forEach((t) => t.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));
  
        // Add active class to clicked tab and corresponding content
        tab.classList.add("active");
        const target = tab.dataset.tab;
        document.getElementById(target).classList.add("active");
      });
    });
  });
  