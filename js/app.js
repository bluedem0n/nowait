window.onload = function() {

	/* Inicializando el juego y asignandole medidas al campo */
	var game = new Phaser.Game(400, 662, Phaser.AUTO, 'gameContainer');
	game.state.add('Boot', ZombiesGame.Boot);
	game.state.add('Preloader', ZombiesGame.Preloader);
	game.state.add('Game', ZombiesGame.Game);
	game.state.start('Boot');

	var juego = document.getElementById("game");
	var loading = document.getElementById("loading");
	var play = document.getElementById("play");

	var loader = function() {
		var contenedor = document.querySelector(".load-contenedor"),
		porcentaje = document.querySelector(".porcentaje"),
		// Hace referencia a mi siguiente contenedor
		page = document.querySelector(".page");
		// Visible hace que el porcentaje aparezca en contenedor
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
		},40);
	}

	/* Variables Drag and Drop */
	var cuadro1 = document.getElementById("cuadro1");
	var cuadro2 = document.getElementById("cuadro2");
	var arrastrable1 = document.getElementById("arrastrable1");
	var arrastrable2 = document.getElementById("arrastrable2");
	var arrastrable3 = document.getElementById("arrastrable3");
	var arrastrable4 = document.getElementById("arrastrable4");

	function start(elemento) {
		elemento.dataTransfer.effecAllowed = "move"; // Define el efecto como mover (Es el por defecto)
		elemento.dataTransfer.setData("data", elemento.target.id); // Coje el elemento que se va a mover
		elemento.dataTransfer.setDragImage(elemento.target, 0, 0); // Define la imagen que se vera al ser arrastrado el elemento y por donde se coje el elemento que se va a mover (el raton aparece en la esquina sup_izq con 0,0)
		// Le da opacidad al contenedor del elemento
		elemento.target.style.opacity = '0.4';
	}
	// Soltar el elemento dentro del contenedor 2
	function end(elemento){
		elemento.target.style.opacity = ''; // Pone la opacidad del elemento a 1
		elemento.dataTransfer.clearData("data");
	}

	function enter(elemento) {
		elemento.target.style.border = '2px dotted #da2329';
	}

	function leave(elemento) {
		elemento.target.style.border = '';
	}

	function over(elemento) {
		var elemArrastrable = elemento.dataTransfer.getData("data"); // Elemento arrastrado
		var id = elemento.target.id; // Elemento sobre el que se arrastra
		// return false para que se pueda soltar
		if (id == 'cuadro1'){ // donde estan los objetos del metropolitano
			return false;  // Cualquier elemento se puede soltar sobre el div destino 1
		}

		if (id == 'cuadro2'){ // bus
			return false; // En el cuadro2 se puede soltar cualquier elemento menos el elemento con id=arrastrable3
		}

	}
	function drop(elemento){

			var elementoArrastrado = elemento.dataTransfer.getData("data"); // Elemento arrastrado
			elemento.target.appendChild(document.getElementById(elementoArrastrado));
			elemento.target.style.border = '';  // Quita el borde
			tamContX = $('#'+elemento.target.id).width();
			tamContY = $('#'+elemento.target.id).height();

			tamElemX = $('#'+elementoArrastrado).width();
			tamElemY = $('#'+elementoArrastrado).height();

			posXCont = $('#'+elemento.target.id).position().left;
			posYCont = $('#'+elemento.target.id).position().top;
			// Posicion absoluta del raton
			x = elemento.layerX;
			y = elemento.layerY;

		// Si parte del elemento que se quiere mover se queda fuera se cambia las coordenadas para que no sea asi
			if (posXCont + tamContX <= x + tamElemX){
				x = posXCont + tamContX - tamElemX;
			}

			if (posYCont + tamContY <= y + tamElemY){
				y = posYCont + tamContY - tamElemY;
			}

			document.getElementById(elementoArrastrado).style.position = "absolute";
			document.getElementById(elementoArrastrado).style.left = x + "px";
			document.getElementById(elementoArrastrado).style.top = y + "px";
		}

			/* Alertas */
			var enviar = document.getElementById("enviar");
			enviar.addEventListener("click", function(event) {
			        event.preventDefault();
			    swal("¡Bienvenido!", "No Wait te sorprenderá", "success");
			});

		/* Eventos */
		play.addEventListener("click", loader);

		cuadro1.ondragenter = enter;
		cuadro1.ondragover = over;
		cuadro1.ondragleave = leave;
		cuadro1.ondrop = drop;

		arrastrable1.ondragstart = start;
		arrastrable1.ondragend = end;

		arrastrable2.ondragstart = start;
		arrastrable2.ondragend = end;

		arrastrable3.ondragstart = start;
		arrastrable3.ondragend = end;

		arrastrable4.ondragstart = start;
		arrastrable4.ondragend = end;

		cuadro2.ondrop = drop;
		cuadro2.ondragover = over;
		cuadro2.onleave = leave;

	};
