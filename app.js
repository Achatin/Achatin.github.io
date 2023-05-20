const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.replace('opacity-0', 'opacity-100');
            entry.target.classList.replace('-translate-x-full', '-translate-x-0');
            entry.target.classList.replace('blur-sm', 'blur-none');
        } else {
            entry.target.classList.replace('opacity-100', 'opacity-0');
            entry.target.classList.replace('-translate-x-0', '-translate-x-full');
            entry.target.classList.replace('blur-none', 'blur-sm');
        }
    });
});

const observedElements = document.querySelectorAll('.opacity-0');
observedElements.forEach((el) => observer.observe(el));


// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});