// Mobile menu toggle
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }


// video loop
    document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('video[data-locator="masthead-video"]');
    if (video) {
        video.play().catch(() => {
        // Autoplay might be blocked, handle if needed
        console.log('Autoplay prevented');
        });
    }
    });

// Initialize AOS
    AOS.init({
        once: true, // animation happens only once on scroll
        duration: 600,
        easing: 'ease-in-out',
    });
