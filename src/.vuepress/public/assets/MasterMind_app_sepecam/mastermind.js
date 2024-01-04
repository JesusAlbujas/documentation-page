var fila = 9;
var partinum = 0;
var filaFichas = ["", "", "", ""];
var colores = [4];
var partidas = [];
var iniciado = true;

function iniciaJuego() {
    var numcolor = [4];
    var colorFicha = "";

    document.getElementById("colboton").disabled = true;
    document.getElementById("colboton").style.color = "grey";
    if (iniciado) {
        document.getElementById("areamensajes").innerHTML = "&nbsp;&nbsp;&nbsp;BIENVENIDO al juego MASTER-MIND <br><br>&nbsp;El juego consiste en adivinar una combinación de 4 colores elegida al azar por la máquina.<br>&nbsp;Empezando por la fila inferior, elegir en las listas desplegables la posición y el color y después pulsar el botón ELEGIR<br>&nbsp;Una vez completada la fila, completar la acción pulsando el botón PONER.<br>&nbsp;La máquina dará pistas al jugador posicionando un pin de color blanco si alguno de los colores ha sido acertado, y un pin de color negro si se ha acertado el color y la posición<br>&nbsp;La combinación oculta debe adivinarse antes de los 10 intentos que representan las 10 filas de fichas.";
    }
    else {
        // Prototipo mensaje: document.getElementById("areamensajes").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;MENSAJE del juego MASTER-MIND:<br><br>&nbsp;...";
        document.getElementById("areamensajes").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;MENSAJE del juego MASTER-MIND:<br><br>&nbsp;Nueva partida...<br><br>&nbsp;Ya sabes la mecánica ¿no?";
    }
    document.getElementById("pos1").selected = true;
    document.getElementById("color1").selected = true;
    // Genera combinación de colores
    for (let i = 0; i < 4; i++) {
        var flag = false;
        var x = parseInt((Math.random() * 6) + 1);
        for (let k = 0; k < (i + 1); k++) {
            if (x == numcolor[k]) {
                flag = true;
            }
        }
        if (flag) {
            i--;
        }
        else {
            numcolor[i] = x;
            switch (x) {
                case 1:
                    colores[i] = "amarilla";
                    break;
                case 2:
                    colores[i] = "azul";
                    break;
                case 3:
                    colores[i] = "magenta";
                    break;
                case 4:
                    colores[i] = "naranja";
                    break;
                case 5:
                    colores[i] = "roja";
                    break;
                case 6:
                    colores[i] = "verde";
                    break;
                default:
                    document.getElementById("areamensajes").innerHTML = "Error de asignación";
            }
        }
    }
    /* Hacer trampa para comprobaciones
    document.getElementById("trampa").innerHTML = colores[0] + "&nbsp;&nbsp;" + colores[1] + "&nbsp;&nbsp;" + colores[2] + "&nbsp;&nbsp;" + colores[3] + "&nbsp;&nbsp;";
    */
}

function elegirFicha() {
    var flag = false;
    var ponerFlag = false;
    var posicionColum = document.getElementById("posicion").value;
    var selecposic = document.getElementById("posicion");
    // alert(selecposic.selectedIndex + " " + typeof(selecposic.selectedIndex));
    selecposic.options[selecposic.selectedIndex].disabled = true;
    var colorFicha = document.getElementById("color").value;
    var posicionImg = "fil" + fila + "col" + posicionColum;
    var nombFicha = "ficha_" + colorFicha + ".png";
    var etiquetaFicha = "<img src=" + nombFicha + " alt='' width='30px'>";

    for (let i = 0; i < 4; i++) {
        if (colorFicha == filaFichas[i]) {
            flag = true;
        }
    }
    if (flag) {
        document.getElementById("areamensajes").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;MENSAJE del juego MASTER-MIND:<br><br>&nbsp;ATENCIÓN: NO está permitido repetir colores en las fichas.";
        selecposic.options[selecposic.selectedIndex].disabled = false;
        document.getElementsByTagName("p")[0].setAttribute("class", "blinking");
    }
    else {
        document.getElementById(posicionImg).innerHTML = etiquetaFicha;
        document.getElementsByTagName("p")[0].setAttribute("class", "ptexto");
        document.getElementById("areamensajes").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;MENSAJE del juego MASTER-MIND:<br><br>&nbsp;COLOR ACEPTADO en ficha " + posicionColum;
        filaFichas[Number(posicionColum) - 1] = colorFicha;
    }

    for (let i = 0; i < 4; i++) {
        if (filaFichas[i] == "") {
            ponerFlag = true;
        }
    }

    if ((!ponerFlag) && (!flag)) {
        document.getElementById("colboton").disabled = false;
        document.getElementById("colboton").style.color = "darkblue";
        document.getElementById("areamensajes").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;MENSAJE del juego MASTER-MIND:<br><br>&nbsp;Antes de pulsar el botón PONER se puede corregir alguno de los colores de las fichas pulsando en el recuadro que la contiene.";
    }

    return;
}

function cambiaColorFicha(clicked_id) {
    // https://qastack.mx/programming/4825295/javascript-onclick-to-get-the-id-of-the-clicked-button

    document.getElementById("colboton").disabled = true;
    document.getElementById("colboton").style.color = "grey";

    var filaObtenida = clicked_id.substring(3, 4);
    var columObtenida = clicked_id.substring(7, 8);
    // alert("ID: " + clicked_id + "; Fila: " + filaObtenida + "; Columna: " + columObtenida);
    if (filaObtenida != fila) {
        document.getElementById("areamensajes").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;MENSAJE del juego MASTER-MIND:<br><br>&nbsp;NO se pueden cambiar colores de fichas en filas distintas a la actual.";
    }
    else {
        document.getElementById("areamensajes").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;MENSAJE del juego MASTER-MIND:<br><br>&nbsp;Seleccionar ahora la posición de la ficha y el nuevo color elegido.";
        var selecposic = document.getElementById("posicion");
        for (let k = 1; k < 5; k++) {
            if (k != columObtenida) {
                selecposic.options[k - 1].disabled = true;
            }
            else {
                selecposic.options[k - 1].disabled = false;
                var selecPos = "pos" + columObtenida;
                document.getElementById(selecPos).selected = true;
            }
        }
    }
}

function evaluarFila() {
    var pinnegros = 0;
    var pinblancos = 0;
    var etiquetaPinNg = "<img src='pin_negro.png' alt='' width='20px'>";
    var etiquetaPinBl = "<img src='pin_blanco.png' alt='' width='20px'>";

    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 4; k++) {
            if ((filaFichas[i] == colores[k]) && (i == k)) {
                // Coincidencia de color y posición (pin negro)
                pinnegros++;
            }
            else {
                if ((filaFichas[i] == colores[k]) && (i != k)) {
                    // Coincidencia de color pero NO de posición (pin blanco)
                    pinblancos++;
                }
            }
        }
    }
    // Coloca los pines de aciertos
    if (pinnegros != 0) {
        for (let i = 1; i < (pinnegros + 1); i++) {
            var posicionPin = "fila" + fila + "pin" + i;
            document.getElementById(posicionPin).innerHTML = etiquetaPinNg;
        }
    }
    if (pinblancos != 0) {
        for (let i = (pinnegros + 1); i < (pinnegros + pinblancos + 1); i++) {
            var posicionPin = "fila" + fila + "pin" + i;
            document.getElementById(posicionPin).innerHTML = etiquetaPinBl;
        }
    }
    // Presenta mensajes
    if (pinnegros == 4) {
        document.getElementById("areamensajes").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;MENSAJE del juego MASTER-MIND:<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¡ HAS ACERTADO TODAS !<br><br>&nbsp;FIN de PARTIDA<br><br>&nbsp;";
        document.getElementsByTagName("p")[0].setAttribute("class", "blinking");
        document.getElementById("colboton").disabled = true;
        document.getElementById("colboton").style.color = "grey";
        document.getElementById("posboton").disabled = true;
        document.getElementById("posboton").style.color = "grey";
        var temporiza = setTimeout("limpiaMensaje()", 8000);
    }
    else {
        document.getElementById("areamensajes").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;MENSAJE del juego MASTER-MIND:<br><br>&nbsp;Has acertado " + pinnegros + " fichas que coinciden en color y posición, y " + pinblancos + " fichas solo en color.<br><br>&nbsp;Inténtalo de nuevo.";
    }
    // Inicializa controles para fila siguiente
    fila--;
    if (fila < 0) {
        document.getElementById("areamensajes").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;MENSAJE del juego MASTER-MIND:<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¡ HAS PERDIDO ESTA VEZ !<br><br>&nbsp;FIN de PARTIDA<br><br>&nbsp;";
        document.getElementsByTagName("p")[0].setAttribute("class", "blinking");
        document.getElementById("colboton").disabled = true;
        document.getElementById("colboton").style.color = "grey";
        document.getElementById("posboton").disabled = true;
        document.getElementById("posboton").style.color = "grey";
        var temporiza = setTimeout("limpiaMensaje()", 8000);
    }
    else {
        for (let i = 0; i < 4; i++) {
            filaFichas[i] = "";
            var selecPos = "pos" + (i + 1);
            document.getElementById(selecPos).disabled = false;
        }
        document.getElementById("pos1").selected = true;
        document.getElementById("color1").selected = true;
        document.getElementById("colboton").disabled = true;
        document.getElementById("colboton").style.color = "grey";
    }
}

function limpiaMensaje() {
    document.getElementById("areamensajes").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;MENSAJE del juego MASTER-MIND:<br><br>&nbsp;Has necesitado " + (9 - fila) + " intentos." + "<br><br>Pulsar NUEVA para comenzar de nuevo.<br>Pulsar SALIR para finalizar el juego.";
    document.getElementsByTagName("p")[0].setAttribute("class", "ptexto");
    // Almacena resultados de partidas
    partinum++;
    partidas[partinum] = (9 - fila);
    document.getElementById("colboton").textContent = "Nueva";
    // Atención: => document.getElementById("colboton").innerHTML = "Nueva"; <= Tambien funciona
    document.getElementById("posboton").textContent = "Salir";
    document.getElementById("colboton").disabled = false;
    document.getElementById("posboton").disabled = false;
    document.getElementById("colboton").style.color = "darkblue";
    document.getElementById("posboton").style.color = "darkblue";
    document.getElementById("colboton").setAttribute("onclick", "nuevaPartida()");
    document.getElementById("posboton").setAttribute("onclick", "finalPartida()");
}

function nuevaPartida() {
    var etiquetaFicha = "<img src='ficha_translucida.png' alt='' width='30px'>";
    var etiquetaPin = "<img src='pin_translucido.png' alt='' width='20px'>";

    document.getElementById("colboton").textContent = "Poner";
    document.getElementById("posboton").textContent = "Elegir";
    document.getElementById("colboton").disabled = true;
    document.getElementById("posboton").disabled = false;
    document.getElementById("colboton").style.color = "grey";
    document.getElementById("posboton").style.color = "darkblue";
    document.getElementById("colboton").setAttribute("onclick", "evaluarFila()");
    document.getElementById("posboton").setAttribute("onclick", "elegirFicha()");
    // Limpia fichas y reinicia variables
    for (let i = 0; i < 10; i++) {
        for (let k = 1; k < 5; k++) {
            var posicionImg = "fil" + i + "col" + k;          
            document.getElementById(posicionImg).innerHTML = etiquetaFicha;
        }
        for (let k = 1; k < 5; k++) {
            var posicionPin = "fila" + i + "pin" + k;            
            document.getElementById(posicionPin).innerHTML = etiquetaPin;
        }
    }

    fila = 9;
    filaFichas = ["", "", "", ""];
    iniciado = false;

    iniciaJuego();
}

function finalPartida() {
    var parrafo = "";
    var etiquetaFicha = "<img src='ficha_gris.png' alt='' width='30px'>";
    var etiquetaPin = "<img src='pin_gris.png' alt='' width='20px'>";

    document.getElementById("colboton").disabled = true;
    document.getElementById("colboton").style.color = "grey";
    document.getElementById("posboton").disabled = true;
    document.getElementById("posboton").style.color = "grey";
    for (let i = 1; i < (partinum + 1); i++) {
        parrafo = parrafo + "&nbsp;Partida " + i + ": " + partidas[i] + " intentos.<br>";
    }
    document.getElementById("areamensajes").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;MENSAJE del juego MASTER-MIND:<br><br>" + parrafo + "<br>&nbsp;Tómate algo...";
    // Rellena con fichas y pines grises
    for (let i = 0; i < 10; i++) {
        for (let k = 1; k < 5; k++) {
            var posicionImg = "fil" + i + "col" + k;
            document.getElementById(posicionImg).setAttribute("onclick", "noHaceNada()");           
            document.getElementById(posicionImg).innerHTML = etiquetaFicha;
            var posicionPin = "fila" + i + "pin" + k;            
            document.getElementById(posicionPin).innerHTML = etiquetaPin;
        }
    }

}

function noHaceNada() {
    return;
}