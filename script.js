// loading screen
const loaderWrapper = document.querySelector(".loader-wrapper");
const loaderText = document.querySelector(".loader-text");
const randomDuration = Math.floor(Math.random() * (2000 - 1000 + 1) + 1000); // Random time between 1-2s

// For flow loader - update dots periodically
if (loaderWrapper.classList.contains("histogram-loader")) {
  const texts = [
    "connecting data points",
    "analyzing patterns",
    "processing insights",
  ];
  let textIndex = 0;

  textIndex = (textIndex + randomDuration) % texts.length;
  loaderText.textContent = texts[textIndex];
}

// Ensure all content is loaded
window.addEventListener("load", () => {
  setTimeout(() => {
    loaderWrapper.classList.add("fade-out");
    setTimeout(() => {
      loaderWrapper.style.display = "none";
    }, 500);
  }, randomDuration);
});

//menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const menuNav = document.querySelector(".menu-nav");
  const body = document.body;

  // Track menu state
  let isMenuOpen = false;

  // Toggle menu function
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    // Toggle classes for animations
    menuButton.classList.toggle("menu-button-active");
    menuNav.classList.toggle("menu-nav-active");
    body.classList.toggle("no-scroll");

    // Update button text
    menuButton.textContent = isMenuOpen ? "Close" : "Menu";

    // Handle link animations
    const links = menuNav.querySelectorAll("a");
    links.forEach((link, index) => {
      if (isMenuOpen) {
        link.style.animation = `slideIn 0.4s ease forwards ${
          index * 0.1 + 0.3
        }s`;
      } else {
        link.style.animation = "";
      }
    });
  }

  // Add click event listener
  menuButton.addEventListener("click", toggleMenu);

  // Close menu when clicking a link
  menuNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      toggleMenu();
    }
  });
});

// Theme Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-input");

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    if (savedTheme === "dark") {
      themeToggle.checked = true;
    }
  }

  // Theme toggle handler
  themeToggle.addEventListener("change", function () {
    if (this.checked) {
      transitionTheme("dark");
    } else {
      transitionTheme("light");
    }
  });

  // Theme transition function
  function transitionTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Add animation class to main elements
    const elements = document.querySelectorAll(
      "body, .header-section, .about-section, .slogan-section, .footer-section"
    );
    elements.forEach((element) => {
      element.style.transition =
        "background-color var(--theme-transition), color var(--theme-transition)";
    });
  }

  // Add hover animation to toggle
  const themeSwitch = document.querySelector(".theme-switch");
  themeSwitch.addEventListener("mouseenter", () => {
    themeSwitch.style.transform = "scale(1.05)";
  });

  themeSwitch.addEventListener("mouseleave", () => {
    themeSwitch.style.transform = "scale(1)";
  });
});
