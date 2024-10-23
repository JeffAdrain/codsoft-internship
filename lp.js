// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Feature highlight on hover
document.querySelectorAll('.feature').forEach(feature => {
    feature.addEventListener('mouseover', () => {
        feature.style.backgroundColor = '#e0e0e0';
    });
    feature.addEventListener('mouseout', () => {
        feature.style.backgroundColor = 'white';
    });
});

// Modal functionality
const signupButton = document.getElementById('signup-button');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-button');

signupButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Form submission handling
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you for signing up, ${name}!`);
    modal.style.display = 'none';
    this.reset();
});
