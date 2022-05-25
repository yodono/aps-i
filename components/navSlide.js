const MOBILE_WIDTH_PX = 768;

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links > li');

    // Toggle Nav
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
    
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) 
                link.style.animation = '';
            else link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`; 
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > MOBILE_WIDTH_PX)
            navLinks.forEach(link => {
                if (window.innerWidth > MOBILE_WIDTH_PX) 
                    link.style.animation = '';
            });
    })
}

navSlide();

