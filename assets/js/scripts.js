/**
 * SuperPepe Publii Theme JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    initStarsBackground();
    initCountdownTimer();
    initSmoothScrolling();
    initAnimations();
    initPresaleCalculator();
});

/**
 * Generate animated stars background
 */
function initStarsBackground() {
    const starsContainers = document.querySelectorAll('.stars-container');

    starsContainers.forEach(container => {
        container.innerHTML = '';

        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'absolute w-1 h-1 bg-white rounded-full animate-pulse';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = (2 + Math.random() * 2) + 's';
            container.appendChild(star);
        }
    });
}

/**
 * Initialize countdown timer
 */
function initCountdownTimer() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const daysEl = document.querySelector('[data-countdown="days"]');
            const hoursEl = document.querySelector('[data-countdown="hours"]');
            const minutesEl = document.querySelector('[data-countdown="minutes"]');
            const secondsEl = document.querySelector('[data-countdown="seconds"]');

            if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
            if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
            if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
            if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

/**
 * Initialize smooth scrolling
 */
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize animations
 */
function initAnimations() {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));
}

/**
 * Initialize presale calculator
 */
function initPresaleCalculator() {
    const amountInput = document.querySelector('input[placeholder="0"]');
    const receiveInput = document.querySelectorAll('input[placeholder="0"]')[1];
    const tokenPrice = 0.00008;

    if (amountInput && receiveInput) {
        amountInput.addEventListener('input', function() {
            const amount = parseFloat(this.value) || 0;
            const tokens = amount / tokenPrice;
            receiveInput.value = tokens.toLocaleString();
        });
    }
}
