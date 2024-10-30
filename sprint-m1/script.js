window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 5) {
        header.classList.add('scr');
    } else {
        header.classList.remove('scr');
    }
});
