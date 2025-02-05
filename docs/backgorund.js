const form = document.getElementById('employmentForm');
const progress = document.querySelector('.progress');
const inputs = form.querySelectorAll('input, select, textarea');

function updateProgress() {
    const totalFields = inputs.length;
    let filledFields = 0;

    inputs.forEach(input => {
        if (input.value.trim() !== '') {
            filledFields++;
        }
    });

    const percentage = (filledFields / totalFields) * 100;
    progress.style.width = `${percentage}%`;
}

inputs.forEach(input => {
    input.addEventListener('input', updateProgress);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Animate button
    const button = form.querySelector('button');
    button.textContent = 'Application Submitted!';
    button.style.backgroundColor = '#28a745';
    
    // You would typically send the form data to a server here
    setTimeout(() => {
        alert('Thank you for your application! We will contact you soon.');
    }, 1000);
});

// Add floating label effect
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.parentElement.classList.remove('focused');
        }
    });
});