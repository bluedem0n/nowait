window.onload = function() {
    var juego = document.getElementById("game");
    var loading = document.getElementById("loading");
    var play = document.getElementById("play");

    var loader = function() {
            var contenedor = document.querySelector(".load-contenedor"),
                porcentaje = document.querySelector(".porcentaje"),
                page = document.querySelector(".page");
            contenedor.classList.add("visible");
            page.classList.remove("visible");
            var contador = 0,
                tiempo = setInterval(function() {
                    contador = contador + 1;
                    porcentaje.textContent = contador + '%';
                    if (contador === 100) {
                        contenedor.classList.remove('visible');
                        page.classList.add('visible');
                        clearInterval(tiempo);
                        contador = 0;
                        loading.style.display = "none";
                        juego.style.display = "block";
                    }
                }, 40);
        }
        /* Eventos */
    play.addEventListener("click", loader);

}
