import "./styles/main.css";
import { Header } from "./components/Header/Header.js";
import { Hero } from "./components/Hero/Hero.js";
import { Services } from "./components/Services/Services.js";
import { Benefits } from "./components/Benefits/Benefits.js";
import { Footer } from "./components/Footer/Footer.js";
import { BusinessTools } from "./components/BusinessTools/BusinessTools.js";
import { Sectors } from "./components/Sectors/Sectors.js";
import { Testimonials } from "./components/Testimonials/Testimonials.js";

// Initialize components when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize components
  const header = new Header();
  const hero = new Hero();
  const services = new Services();
  const benefits = new Benefits();
  const footer = new Footer();
  const businessTools = new BusinessTools();
  const sectors = new Sectors();
  const testimonials = new Testimonials();

  // Initialize each component
  header.init();
  hero.init();
  services.init();
  benefits.init();
  footer.init();
  businessTools.init();
  sectors.init();
  testimonials.init();

  // Handle loader
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 300);
    }, 500);
  }
});

// Debug information
console.log("Main script loaded");
