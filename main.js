// DOM Elements
    const themeToggle = document.getElementById('themeToggle');
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    const contactForm = document.getElementById('contactForm');
    const messageInput = document.getElementById('message');
    const warningText = document.getElementById('warningText');
    const roles = document.querySelectorAll('.role');
    
    // Theme Toggle
    function toggleTheme() {
      document.body.classList.toggle('dark-theme');
      
      if (document.body.classList.contains('dark-theme')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
      } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
      }
    }
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      themeToggle.textContent = '☀️';
    }
    
    // Mobile Navigation Toggle
    function toggleMobileMenu() {
      navLinks.classList.toggle('active');
    }
    
    // Role Switching Animation
    let currentRole = 0;
    function switchRole() {
      // Fade out current role
      roles[currentRole].classList.remove('active');
      
      // Move to next role
      currentRole = (currentRole + 1) % roles.length;
      
      // Fade in next role
      setTimeout(() => {
        roles[currentRole].classList.add('active');
      }, 300);
    }
    
    // Form Validation
    function validateForm(e) {
      e.preventDefault();
      
      const message = messageInput.value.trim();
      const wordCount = message.split(/\s+/).filter(word => word.length > 0).length;
      
      if (wordCount < 10) {
        warningText.textContent = "Please enter at least 10 words.";
        return false;
      } else if (wordCount > 200) {
        warningText.textContent = "Please limit your message to 200 words.";
        return false;
      }
      
      warningText.textContent = "";
      alert("Message sent successfully! (Demo)");
      contactForm.reset();
      return true;
    }
    
    // Event Listeners
    themeToggle.addEventListener('click', toggleTheme);
    mobileToggle.addEventListener('click', toggleMobileMenu);
    contactForm.addEventListener('submit', validateForm);
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
    
    // Initialize role switching
    setInterval(switchRole, 3000);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      });
    });
  
