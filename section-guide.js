document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const toggleContainer = document.querySelector('.toggle-buttons');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            toggleContainer.setAttribute('data-active', target);
        });
    });
});