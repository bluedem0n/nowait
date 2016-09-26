window.addEventListener("load",function(){
/*Para cambiar la apariencia de las alertas*/

    var enviar = document.getElementById("enviar");   
    enviar.addEventListener("click", function(event) {
        event.preventDefault();

    swal("¡Gracias!", "¡Ya enviaste tus datos!", "success");
});
});