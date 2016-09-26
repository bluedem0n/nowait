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

	/* Variables Drag and Drop */
	var cuadro1 = document.getElementById("cuadro1");
	var cuadro2 = document.getElementById("cuadro2");
	var arrastrable1 = document.getElementById("arrastrable1");
	var arrastrable2 = document.getElementById("arrastrable2");
	var arrastrable3 = document.getElementById("arrastrable3");
	var arrastrable4 = document.getElementById("arrastrable4");

	function start(elemento) {
		elemento.dataTransfer.effecAllowed = 'move';
		elemento.dataTransfer.setData("data", elemento.target.id);
		elemento.dataTransfer.setDragImage(elemento.target, 0, 0);
		elemento.target.style.opacity = '0.4';
	}
	function end(elemento){
		elemento.target.style.opacity = '';
		elemento.dataTransfer.clearData("data");
	}

	function enter(elemento) {
		elemento.target.style.border = '2px dotted #da2329';
	}

	function leave(elemento) {
		elemento.target.style.border = '';
	}

	function over(elemento) {
		var elemArrastrable = elemento.dataTransfer.getData("data");
		var id = elemento.target.id;

		if (id == 'cuadro1'){
			return false;
		}

		if ((id == 'cuadro2') && (elemArrastrable != 'arrastrable3')){
			return false;
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

			x = elemento.layerX;
			y = elemento.layerY;

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
