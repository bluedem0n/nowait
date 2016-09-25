  /* Variables Drag and Drop */
    var cuadro1 = document.getElementById("cuadro1");
    var cuadro2 = document.getElementById("cuadro2");
    var arrastrable1 = document.getElementById("arrastrable1");
    var arrastrable2 = document.getElementById("arrastrable2");
    var arrastrable3 = document.getElementById("arrastrable3");

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
			elemento.target.style.border = '3px dotted #555';
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

    /* Eventos */
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

    cuadro2.ondrop = drop;
    cuadro2.ondragover = over;
    cuadro2.onleave = leave;

