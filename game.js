var btn_piedra = document.getElementById("Piedra");
var btn_papel = document.getElementById("Papel");
var btn_tijeras = document.getElementById("Tijeras");
var btn_iniciar = document.getElementById("Iniciar_juego");
var img_usuario = document.getElementById("usuario");
var img_cpu = document.getElementById("cpu");
var marcador_usuario = document.getElementById("puntos_usuario").innerText;
var marcador_cpu = document.getElementById("puntos_cpu").innerText;

var Menu = "espera";
var Opcion_jugador;
var Opcion_cpu;




init_imagenes();
btn_iniciar.onclick = function() {
    Menu = "inicio";
    console.log(Opcion_jugador);
    Opcion_cpu = num_aleatorio()
    display_opcion_cpu(Opcion_cpu);
    game(Opcion_jugador, Opcion_cpu);

}
btn_piedra.onclick = function() {
    Opcion_jugador = 0;
    img_usuario.src = "./img/Piedra.png";
}
btn_papel.onclick = function() {
    Opcion_jugador = 1;
    img_usuario.src = "./img/Papel.png";
}
btn_tijeras.onclick = function() {
    Opcion_jugador = 2;
    img_usuario.src = "./img/Tijeras.png";
}

switch (Menu) {
    case "espera":
        console.log("Esperando..");
        break;
    case "inicio":
        console.log("Iniciando juego");
        break;
}


function init_imagenes() {
    btn_piedra.style.backgroundImage = " url('./img/Piedra.png')";
    btn_papel.style.backgroundImage = " url('./img/Papel.png')";
    btn_tijeras.style.backgroundImage = "url('./img/Tijeras.png')";
}

function num_aleatorio() {
    return parseInt(Math.random() * 3);
}

function game(opcion_jugador, opcion_cpu) {
    var escenario_1;
    var escenario_2;
    var escenario_3;
    var empate;
    if (opcion_jugador === opcion_cpu) {
        empate = true;
    } else if (opcion_jugador === 0 && opcion_cpu === 2) {
        escenario_1 = true;
    } else if (opcion_jugador === 1 && opcion_cpu === 0) {
        escenario_2 = true;
    } else if (opcion_jugador === 2 && opcion_cpu === 1) {
        escenario_3 = true;
    }


    if (escenario_1 || escenario_2 || escenario_3) {
        alert("usuario gana");
        marcador_usuario++;
        document.getElementById("puntos_usuario").innerText = marcador_usuario;


    } else if (empate) {
        alert("EMPATE");
    } else {
        alert("CPU gana");
        marcador_cpu++;
        document.getElementById("puntos_cpu").innerText = marcador_cpu;
    }
}

function display_opcion_cpu(opcion) {
    if (opcion === 0) {
        img_cpu.src = "./img/Piedra.png";
    } else if (opcion === 1) {
        img_cpu.src = "./img/Papel.png";
    } else {
        img_cpu.src = "./img/Tijeras.png";
    }
}