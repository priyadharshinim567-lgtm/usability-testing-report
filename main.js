// main.js
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Trigger chart animation if it's the charts section
        if (entry.target.id === 'charts') {
          animateCharts();
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
  });

  // Function to animate bar charts
  function animateCharts() {
    const bars = document.querySelectorAll('[data-height]');
    bars.forEach(bar => {
      const height = bar.getAttribute('data-height');
      if (height) {
        setTimeout(() => {
          bar.style.height = height;
        }, 300);
      }
    });
  }
});
