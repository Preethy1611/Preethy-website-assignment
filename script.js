// Navigation Toggle for Mobile View
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll on Link Click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reservation Form Submission
document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('res-name').value;
    let email = document.getElementById('res-email').value;
    let phone = document.getElementById('res-phone').value;
    let date = document.getElementById('res-date').value;
    let time = document.getElementById('res-time').value;
    let guests = document.getElementById('res-guests').value;

    if (name && email && phone && date && time && guests) {
        alert(`Thank you, ${name}! Your reservation for ${guests} guest(s) on ${date} at ${time} has been confirmed.`);
    } else {
        alert("Please fill in all fields.");
    }
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
    } else {
        alert("Please fill in all fields.");
    }
});
