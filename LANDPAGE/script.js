document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple form validation
    const form = document.querySelector('#contact-form');
    form.addEventListener('submit', (e) => {
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        if (!name || !email) {
            alert('Please fill in all fields.');
            e.preventDefault();
        }
    });
});
