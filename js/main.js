// Advora Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  
  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Skip empty anchors
      if (href === '#') {
        e.preventDefault();
        return;
      }
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Mobile menu toggle (if needed in future)
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      const navMenu = document.querySelector('.nav-menu');
      navMenu.classList.toggle('mobile-active');
    });
  }
  
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all cards and sections
  document.querySelectorAll('.card, .step, .result-card').forEach(el => {
    observer.observe(el);
  });
  
  // Lead magnet form handling (placeholder for Mailchimp)
  const leadForm = document.getElementById('lead-magnet-form');
  
  if (leadForm) {
    leadForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = this.querySelector('input[type="email"]').value;
      
      // Mailchimp integration will be added here
      // For now, show success message
      alert('Thank you! We\'ll send you the guide shortly.');
      
      // Reset form
      this.reset();
    });
  }
  
  // Google Analytics event tracking
  function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        'event_category': category,
        'event_label': label
      });
    }
  }
  
  // Track CTA button clicks
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
      const label = this.textContent.trim();
      trackEvent('CTA', 'click', label);
    });
  });
  
  // Track outbound links
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', function() {
      const url = this.href;
      trackEvent('Outbound Link', 'click', url);
    });
  });
  
});

// Add fade-in animation class
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    animation: fadeIn 0.6s ease-in;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);
