document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const toggleContainer = document.querySelector('.toggle-buttons');
    const contentItems = document.querySelectorAll('.content-item');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            // Update toggle buttons
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            toggleContainer.setAttribute('data-active', target);
            
            // Update content
            contentItems.forEach(item => item.classList.remove('active'));
            document.getElementById(`${target}-content`).classList.add('active');
        });
    });
});