var juego = document.getElementById("game");
var loading = document.getElementById("loading");
function loader(fin) {
    var contenedor = document.querySelector('.load-contenedor'),
    porcentaje = document.querySelector('.porcentaje'),
    page = document.querySelector('.page');
    contenedor.classList.add('visible');
    page.classList.remove('visible');
    var contador = 0,
        tiempo = setInterval(function() {
            contador = contador + 1;
            porcentaje.textContent = contador+'%';
            if (contador === 100){
                contenedor.classList.remove('visible');
                page.classList.add('visible');
                clearInterval(tiempo);
                contador = 0;
                loading.style.display = "none";
                juego.style.display = "block";
                if (fin){
                  return fin; 
                }
            }
        }, 40);
}
juego.addEventListener("focus",loader(), true);
