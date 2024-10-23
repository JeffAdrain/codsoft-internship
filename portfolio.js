// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project filter functionality
function filterProjects() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        const title = project.querySelector('h3').textContent.toLowerCase();
        const keywords = project.querySelector('h3').getAttribute('data-keywords').toLowerCase();
        if (title.includes(searchInput) || keywords.includes(searchInput)) {
            project.style.display = '';
        } else {
            project.style.display = 'none';
        }
    });
}

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('form-message');
    message.textContent = `Thank you, ${name}! Your message has been sent.`;
    message.classList.remove('hidden');
    this.reset();
});