document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show')
})

ScrollReveal().reveal('.header');
ScrollReveal().reveal('.services');
ScrollReveal().reveal('.about-one');
ScrollReveal().reveal('.about-two');
