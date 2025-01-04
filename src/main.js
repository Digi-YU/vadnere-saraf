import './style.css'
import { createPOIComponent } from './components/PointsOfInterest'
import { createNavbar } from './components/Navbar'
import { initModals } from './components/Modal'

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Navbar
  const navContainer = document.querySelector('#nav-container');
  if (navContainer) {
    createNavbar(navContainer);
  }

  // Initialize POI Component
  const container = document.querySelector('#app main section .container');
  if (container) {
    createPOIComponent(container);
    initModals();
  }
});
