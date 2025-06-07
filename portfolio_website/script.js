// 1. Current Time Display
function showTime() {
    const now = new Date();
    const timeElement = document.getElementById('currentTime');
    
    if (timeElement) {
        // Format: "Day, Month Date Year, HH:MM:SS"
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            timeZoneName: 'short' 
        };
        timeElement.textContent = now.toLocaleDateString('en-US', options);
    }
}

// Initializes time display
showTime();
setInterval(showTime, 1000);

// 2. Smooths Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 3. Highlights Active Section While Scrolling
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// 4. Console Greeting 
console.log("👋 Welcome to Sean's Portfolio! Check out my projects :)");

//5. Blocks Spam
document.addEventListener('DOMContentLoaded', function() {
    const emailElement = document.getElementById('email-link');
    if (emailElement) {
        emailElement.setAttribute('href', 'mailto:sean.agyei1' + '@gmail.com');
        emailElement.textContent = 'sean.agyei1@gmail.com';
    }
});