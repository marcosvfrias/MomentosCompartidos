document.addEventListener("scroll", function() {
    var footer = document.querySelector(".footer");
    // Calcula la posición del scroll.
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.offsetHeight;

    // Comprueba si el usuario ha llegado al final de la página.
    if (windowHeight + scrollPosition >= bodyHeight) {
        footer.style.display = "block"; // Muestra el footer.
    } else {
        footer.style.display = "none"; // Oculta el footer.
    }
});
