document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out',
    });

    const offcanvas = document.getElementById('mobileNavOffcanvas');
    const toggleButton = document.querySelector('[data-bs-target="#mobileNavOffcanvas"]');
    const closeButton = offcanvas ? offcanvas.querySelector('.btn-close') : null;

    function setOffcanvasState(isOpen) {
        if (!offcanvas) return;
        offcanvas.classList.toggle('show', isOpen);
        document.body.classList.toggle('offcanvas-open', isOpen);
        if (toggleButton) {
            toggleButton.setAttribute('aria-expanded', String(isOpen));
        }
    }

    if (toggleButton && offcanvas) {
        toggleButton.addEventListener('click', function(event) {
            event.preventDefault();
            const shouldOpen = !offcanvas.classList.contains('show');
            setOffcanvasState(shouldOpen);
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', function() {
            setOffcanvasState(false);
        });
    }

    document.querySelectorAll('.mobile-accordion-toggle').forEach(function(button) {
        button.addEventListener('click', function() {
            const targetId = button.dataset.target;
            const target = document.getElementById(targetId);
            if (!target) return;

            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            document.querySelectorAll('.mobile-accordion-toggle').forEach(function(item) {
                item.setAttribute('aria-expanded', 'false');
            });
            document.querySelectorAll('.mobile-submenu').forEach(function(item) {
                item.hidden = true;
            });

            if (!isExpanded) {
                button.setAttribute('aria-expanded', 'true');
                target.hidden = false;
            }
        });
    });

    document.querySelectorAll('.faq-accordion-toggle').forEach(function(button) {
        button.addEventListener('click', function() {
            const targetId = button.dataset.target;
            const target = document.getElementById(targetId);
            if (!target) return;

            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            document.querySelectorAll('.faq-accordion-toggle').forEach(function(item) {
                item.setAttribute('aria-expanded', 'false');
            });
            document.querySelectorAll('.faq-accordion-content').forEach(function(item) {
                item.hidden = true;
            });

            if (!isExpanded) {
                button.setAttribute('aria-expanded', 'true');
                target.hidden = false;
            }
        });
    });

    document.addEventListener('click', function(event) {
        if (!offcanvas || !offcanvas.classList.contains('show')) return;
        const clickedInside = offcanvas.contains(event.target) || toggleButton.contains(event.target);
        if (!clickedInside) {
            setOffcanvasState(false);
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && offcanvas && offcanvas.classList.contains('show')) {
            setOffcanvasState(false);
        }
    });

    const logosSwiper = new Swiper('.logos-swiper', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
        }
    });

    const testimonialsSwiper = new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        }
    });
});



