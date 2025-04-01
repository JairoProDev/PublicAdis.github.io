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

/* Main Application Initialization */
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the website components
  initializeWebsite();
  
  // Register service worker for PWA functionality if needed
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  }
});

function initializeWebsite() {
  // Load each component
  if (typeof loadHeader === 'function') loadHeader();
  if (typeof loadHero === 'function') loadHero();
  if (typeof loadServices === 'function') loadServices();
  if (typeof loadBenefits === 'function') loadBenefits();
  if (typeof loadBusinessTools === 'function') loadBusinessTools();
  if (typeof loadFeatures === 'function') loadFeatures();
  if (typeof loadApplication === 'function') loadApplication();
  if (typeof loadContact === 'function') loadContact();
  if (typeof loadFooter === 'function') loadFooter();
  
  // Initialize global animations and interactions
  initGlobalInteractions();
}

function initGlobalInteractions() {
  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') === '#') return;
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        // Smooth scroll to element
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without page reload
        history.pushState(null, null, targetId);
      }
    });
  });
  
  // Add scroll-triggered animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
  
  // Mobile-specific adjustments
  if (window.innerWidth <= 768) {
    // Disable certain animations on mobile to improve performance
    document.querySelectorAll('.device-mockup').forEach(el => {
      el.style.transition = 'none';
    });
    
    // Adjust section heights for mobile
    document.querySelectorAll('.pageSection').forEach(section => {
      if (section.id !== 'mainSection') {
        section.style.minHeight = 'auto';
      }
    });
  }
  
  // Copy email functionality
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Check if user is on mobile, if so, don't prevent default
      if (window.innerWidth > 768) {
        e.preventDefault();
        
        const email = this.getAttribute('href').replace('mailto:', '');
        
        // Copy to clipboard
        navigator.clipboard.writeText(email)
          .then(() => {
            // Show success message if we have the alert function
            if (typeof showAlert === 'function') {
              showAlert('Correo copiado al portapapeles', 'success');
            } else {
              alert('Correo copiado al portapapeles');
            }
          })
          .catch(err => {
            console.error('No se pudo copiar el correo:', err);
          });
      }
    });
  });
  
  // Initialize floating whatsapp button behavior
  const whatsappButton = document.querySelector('.quick-action-button');
  if (whatsappButton) {
    // Hide when near footer
    window.addEventListener('scroll', () => {
      const footer = document.querySelector('.site-footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (footerTop < windowHeight - 100) {
          whatsappButton.classList.add('hidden');
        } else {
          whatsappButton.classList.remove('hidden');
        }
      }
    });
  }
}

// Utility function to get URL parameters
function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

// Handle UTM parameters for analytics if needed
function handleUTMParameters() {
  const utmSource = getURLParameter('utm_source');
  const utmMedium = getURLParameter('utm_medium');
  const utmCampaign = getURLParameter('utm_campaign');
  
  if (utmSource || utmMedium || utmCampaign) {
    // Store UTM parameters in session storage for later use
    sessionStorage.setItem('utm_source', utmSource);
    sessionStorage.setItem('utm_medium', utmMedium);
    sessionStorage.setItem('utm_campaign', utmCampaign);
    
    // Add UTM parameters to all WhatsApp links
    document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link => {
      let href = link.getAttribute('href');
      
      // Add UTM info to the message
      if (href.includes('?text=')) {
        href += ` (Fuente: ${utmSource || 'directa'}, Medio: ${utmMedium || 'web'})`;
      } else {
        href += `?text=Hola, vengo de ${utmSource || 'su página web'} a través de ${utmMedium || 'navegación directa'}`;
      }
      
      link.setAttribute('href', href);
    });
  }
}
