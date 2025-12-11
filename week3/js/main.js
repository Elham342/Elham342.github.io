console.log("JavaScript Loaded - Week 3");

// DARK MODE
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    themeToggle.textContent = 
      document.body.classList.contains("dark") 
        ? "Light Mode" 
        : "Dark Mode";
  });
}

// FOOTER YEAR
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// FORM VALIDATION
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Thank you, " + name + "! Your form was submitted (practice).");
    contactForm.reset();
  });
}
