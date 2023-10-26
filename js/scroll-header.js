let previousScroll = 0;

window.addEventListener("scroll", function() {
    const currentScroll = window.scrollY;

    if (currentScroll > previousScroll) {
        // El usuario hace scroll hacia abajo
        document.body.classList.add("scroll-show");
    } else {
        // El usuario hace scroll hacia arriba
        document.body.classList.remove("scroll-show");
    }

    previousScroll = currentScroll;
});
