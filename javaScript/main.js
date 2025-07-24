// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const message = document.getElementById("message").value;

  // Prepare success message
  const successMessage = `Thank you, ${name}! Your message has been sent successfully. I'll get back to you at ${email} soon.`;

  // Show modal with success message
  document.getElementById("modalMessage").textContent = successMessage;
  document.getElementById("successModal").style.display = "flex";

  // Reset form
  this.reset();
});

// Close modal when clicking the close button (×)
document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("successModal").style.display = "none";
});

// Close modal when clicking the "Close" button
document.getElementById("closeModalBtn").addEventListener("click", function () {
  document.getElementById("successModal").style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", function (event) {
  const modal = document.getElementById("successModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
// Add animation to project cards on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Animate elements when they come into view
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
  });

  // Add animation delay for each card
  projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(10, 25, 47, 0.98)";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.3)";
  } else {
    navbar.style.background = "rgba(10, 25, 47, 0.95)";
    navbar.style.boxShadow = "none";
  }
});
