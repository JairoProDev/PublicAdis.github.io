/* *This file is for make css corrections in our page components */
let i = 0;

//* *This is for adjust the slider images
document.getElementById("webAppImage").style.marginTop = "9.5%";

document.getElementById("phoneAppImage").style.marginTop = "-10%";

document.getElementById("phoneAppImage").style.marginRight = "34%";

document.getElementById("phoneAppImage").style.marginLeft = "16%";

//* *This is for adjust the page logo hover:
document.getElementById("logoContainer").onmouseover = () => {
  document.getElementById("pageLogoSpan").style.color = "#079cff";
};

document.getElementById("logoContainer").onmouseout = () => {
  document.getElementById("pageLogoSpan").style.color = "#ffffff";
};

document.getElementById("gmailIcon").onmouseover = () => {
  setTimeout(() => {
    document.getElementById("gmailIconMessage").style.display = "block";
  }, 300);
};

document.getElementById("gmailIcon").onmouseout = () => {
  setTimeout(() => {
    document.getElementById("gmailIconMessage").style.display = "none";
  }, 300);
};

document.getElementById("gmailIcon").addEventListener("click", (event) => {
  event.preventDefault();

  navigator.clipboard.writeText("publicadis@gmail.com");
});

// Mobile menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navOptionsList = document.getElementById("navOptionsList");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      navOptionsList.classList.toggle("active");

      // Change icon based on menu state
      const icon = mobileMenuBtn.querySelector("i");
      if (navOptionsList.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".navOption");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navOptionsList.classList.remove("active");
        const icon = mobileMenuBtn.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  });

  // Add scroll animation to navbar
  const navbar = document.getElementById("navBar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "var(--shadow-md)";
      navbar.style.height = "12vh";
    } else {
      navbar.style.boxShadow = "none";
      navbar.style.height = "15vh";
    }
  });
});

// Services tabs functionality
document.addEventListener("DOMContentLoaded", () => {
  const serviceTabs = document.querySelectorAll(".service-tab");
  const serviceContents = document.querySelectorAll(".service-content");

  serviceTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      serviceTabs.forEach((t) => t.classList.remove("active"));

      // Add active class to clicked tab
      tab.classList.add("active");

      // Hide all content sections
      serviceContents.forEach((content) => {
        content.classList.remove("active");
      });

      // Show selected content
      const targetId = tab.getAttribute("data-target");
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
});
