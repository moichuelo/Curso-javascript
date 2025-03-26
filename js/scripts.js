//importamos la función de los parciales y la ejecutamos
import { cargarpartials } from "./partials.js";
cargarpartials();

let pagina = window.location.pathname.split("/").pop(); //obtenemos el nombre del archivo html que se está visualizando

//******************************************************************************************************************
// ************************************************************************** cbasicos.html
//******************************************************************************************************************
if (pagina == "cbasicos.html") {
    //hacemos una comprobación para que solo afecte a la página que queremos
    document.getElementById("intro").innerHTML =
        "Este texto ha sido cambiado con Js. Archivo script.js";

    //Añadimos un escuchador de eventos a un elemento html
    document.getElementById("color").addEventListener("click", cambiarColor);
    document
        .getElementById("inputbutton")
        .addEventListener("click", saludarprompt); //se puede llamar a la función saludar para utilizar el input
}
function saludar() {
    let input = document.getElementById("inputname").value;
    console.log("Hola " + input);
    // document.getElementById("inputbutton").innerHTML = input;
}

function saludarprompt() {
    let input = window.prompt("Introduce tu nombre");
    console.log("Hola " + input);
    // document.getElementById("inputbutton").innerHTML = input;
}

function cambiarTexto() {
    document.getElementById("intro").innerHTML =
        "Este texto ha sido cambiado con Js. En este caso hemos utilizado una función de script.js";
}

function cambiarColor() {
    document.getElementById("intro").style.color = "rgb(250, 104, 0)";
}

function abrirModal() {
    document.getElementById("miModal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("miModal").style.display = "none";
}

function accionSi() {
    console.log("El usuario eligió: Seguir adelante");
    cerrarModal();
}

//convertimos las funciones en globales para que puedan ser llamadas desde html
window.abrirModal = abrirModal;
window.cerrarModal = cerrarModal;
window.accionSi = accionSi;
window.cambiarTexto = cambiarTexto;

//******************************************************************************************************************
// ************************************************************************** condicionales.html
//******************************************************************************************************************
if (pagina == "Condicionales.html") {
    //hacemos una comprobación para que solo afecte a la página que queremos
    document
        .getElementById("inputbutton")
        .addEventListener("click", comprobarEdad);

    document
        .getElementById("inputbutton2")
        .addEventListener("click", comprobarhora);

    document
        .getElementById("inputbutton3")
        .addEventListener("click", comprobardia);
}

function comprobarEdad() {
    let edad = document.getElementById("inputedad").value;
    let nombre = "Javier";
    let texto = "";

    if (edad >= 18) {
        texto = "Eres mayor de edad";
        if (nombre == "Javier") {
            texto = texto + " y te llamas Javier";
        }
        document.getElementById("parrafov").innerHTML = texto;
    } else {
        document.getElementById("parrafov").innerHTML = "Eres menor de edad";
    }
}

function comprobarhora() {
    let date = new Date();
    let hora = date.getHours();

    if (hora >= 6 && hora < 12) {
        document.getElementById("parrafov2").innerHTML = "Buenos dias";
    } else if (hora >= 12 && hora < 20) {
        document.getElementById("parrafov2").innerHTML = "Buenas tardes";
    } else {
        document.getElementById("parrafov2").innerHTML = "Buenas noches";
    }
}

function comprobardia() {
    let date = new Date();
    let dia = date.getDay();

    switch (dia) {
        case 0:
            document.getElementById("parrafov3").innerHTML = "Domingo";
            break;
        case 1:
            document.getElementById("parrafov3").innerHTML = "Lunes";
            break;
        case 2:
            document.getElementById("parrafov3").innerHTML = "Martes";
            break;
        case 3:
            document.getElementById("parrafov3").innerHTML = "Miercoles";
            break;
        case 4:
            document.getElementById("parrafov3").innerHTML = "Jueves";
            break;
        case 5:
            document.getElementById("parrafov3").innerHTML = "Viernes";
            break;
        case 6:
            document.getElementById("parrafov3").innerHTML = "Sabado";
            break;
        default:
            document.getElementById("parrafov3").innerHTML = "Dia no valido";
            break;
    }
}
