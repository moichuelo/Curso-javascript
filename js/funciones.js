//9 ******************************************************************************************************************
//9 ************************************************************************** cbasicos.html
//9 ******************************************************************************************************************
export function cbasicos() {
    //8 código js que se ejecutrá cuando se carga el html cbasicos.html
    document.getElementById("intro").innerHTML =
        "Este texto ha sido cambiado con Js. Archivo script.js";

    //Añadimos un escuchador de eventos a un elemento html
    document.getElementById("color").addEventListener("click", cambiarColor);
    document
        .getElementById("inputbutton")
        .addEventListener("click", saludarprompt); //se puede llamar a la función saludar para utilizar el input
    document.getElementById("inputb").addEventListener("click", () => {
        saludar(); // Ejecutamos la función cuando se hace clic
    });

    document.getElementById("amodal").addEventListener("click", () => {
        abrirModal(); // Ejecutamos la función cuando se hace clic
    });

    document.getElementById("cmodal").addEventListener("click", () => {
        cerrarModal(); // Ejecutamos la función cuando se hace clic
    });

    document.getElementById("asi").addEventListener("click", () => {
        accionSi(); // Ejecutamos la función cuando se hace clic
    });
}

function saludarprompt() {
    //8 función que se llama localmente
    let input = window.prompt("Introduce tu nombre");
    console.log("Hola " + input);
}

function cambiarColor() {
    //8 función que se llama localmente
    document.getElementById("intro").style.color = "rgb(250, 104, 0)";
}

export function cambiarTexto2() {
    //8 función que se llama desde script.js previa petición de html
    document.getElementById("intro").innerHTML =
        "Este texto ha sido cambiado con Js. En este caso hemos utilizado una función de script.js";
}

function saludar() {
    //8 función que se llama localmente
    let input = document.getElementById("inputname").value;
    console.log("Hola " + input);
    // document.getElementById("inputbutton").innerHTML = input;
}

function abrirModal() {
    //8 función que se llama localmente
    document.getElementById("miModal").style.display = "flex";
}

function cerrarModal() {
    //8 función que se llama localmente
    document.getElementById("miModal").style.display = "none";
}

function accionSi() {
    //8 función que se llama localmente
    console.log("El usuario eligió: Seguir adelante");
    cerrarModal();
}

//9 ******************************************************************************************************************
//9 ************************************************************************** condicionales.html
//9 ******************************************************************************************************************
export function condicionales() {
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
            console.log(edad);
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

//9 ******************************************************************************************************************
//9 ************************************************************************** bucles.html
//9 ******************************************************************************************************************
export function bucles() {
    for (let i = 0; i < 10; i++) {
        document.getElementById("bucles").innerHTML += i + " ";
    }

    for (let i = 1; i <= 6; i++) {
        document.getElementById("bucles").innerHTML +=
            "<h" + i + ">Titulo " + i + "</h" + i + ">";
    }

    // let i = 11 % 2;
    // console.log(i);
    // let num = Math.floor(Math.random() * 1000);
    // console.log(num);

    // let pregunta = window.prompt("Dime tu nombre");
    // let i = 1;
    // while (pregunta != "Juan") {
    //     pregunta = window.prompt("Dime tu nombre");
    //     i++;
    //     if (i == 3) {
    //         document.getElementById("bucles2").innerHTML =
    //             "Has fallado 3 veces";
    //         break;
    //     }
    // }
    // if (i != 3) {
    //     document.getElementById("bucles2").innerHTML = "Hola Juan";
    // }

    // do {
    //     pregunta = window.prompt("Dime tu nombre");
    // } while (pregunta != "Juan");
}

//9 ******************************************************************************************************************
//9 ************************************************************************** funciones.html
//9 ******************************************************************************************************************
export function funciones() {
    document.getElementById("bsaludo").addEventListener("click", saludarf);
    document
        .getElementById("bnumero")
        .addEventListener("click", adivinarNumero);
}
// console.log("Funciones");

function saludarf() {
    let nombre = obtenerNombre();
    console.log("Hola " + nombre);
}

function obtenerNombre() {
    let nombre = window.prompt("Introduce tu nombre");
    return nombre;
}

/**
 * Adivina un número entre 1 y 5
 *
 * Pide un número al usuario y si coincide con el número secreto
 * (3) muestra un mensaje de "Has ganado" y devuelve true.
 * Si no coincide, vuelve a llamar a si misma hasta que el usuario
 * acierte el número.
 *
 * @return {boolean} True si el usuario acierta el número
 */
function adivinarNumero() {
    const adv = 3;
    const respuesta = window.prompt("introduce un número del 1 al 5");

    if (respuesta == adv) {
        alert("Has ganado");
        return true;
    }

    return adivinarNumero();
}
