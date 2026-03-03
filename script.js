// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');
    
    // Validation
    if (!name || !email || !phone || !service || !message) {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.className = 'form-message error';
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.className = 'form-message error';
        return;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone) || phone.replace(/\D/g, '').length < 10) {
        formMessage.textContent = 'Please enter a valid phone number.';
        formMessage.className = 'form-message error';
        return;
    }
    
    // If all validation passes
    formMessage.textContent = '✓ Message sent successfully! We\'ll contact you soon.';
    formMessage.className = 'form-message success';
    
    // Reset form
    this.reset();
    
    // Clear message after 5 seconds
    setTimeout(function() {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
    }, 5000);
    
    // In a real application, you would send this data to a server
    console.log({
        name,
        email,
        phone,
        service,
        message
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});