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

//9 ******************************************************************************************************************
//9 ************************************************************************** intdom.html
//9 ******************************************************************************************************************
export function intdom() {
    document.getElementById("tituid").innerHTML = "Introducción a DOM";
    document.querySelector(".parraqs").innerHTML = "Párrafo con queryselector";

    var listas = document.querySelectorAll(".lisqs");
    // console.log(listas);
    for (let i = 0; i < listas.length; i++) {
        listas[i].style.color = "red";
    }

    var parrafoss = document.getElementsByTagName("p");
    console.log(parrafoss);

    var listas2 = document.getElementsByClassName("lisqs");
    console.log(listas2);

    var articulo = document.createElement("p");
    articulo.innerHTML = "Nuevo parrafo";
    document.getElementById("articulo").appendChild(articulo);

    document.getElementById("borrar").remove();

    var parseo = document.getElementById("parsear");
    parseo.insertAdjacentHTML(
        "beforebegin",
        "<span class='nueva'>Esto es un texto</span>"
    );
}

//9 ******************************************************************************************************************
//9 ************************************************************************** eventos.html
//9 ******************************************************************************************************************
export function eventos() {
    var boton = document.getElementById("button");
    boton.addEventListener("click", (evento) => {
        alert("Has pulsado el boton");
    });

    // document.body.addEventListener("keydown", ftecla);
    document.getElementById("campo").addEventListener("keydown", ftecla);

    var botonr = document.getElementById("buttonr");
    botonr.addEventListener("click", (evento) => {
        document.getElementById("campo").removeEventListener("keydown", ftecla);
    });
}

function ftecla(evento) {
    if (evento.key == "Enter") {
        alert("Has pulsado el boton enter");
    }
}

//9 ******************************************************************************************************************
//9 ************************************************************************** timing.html
//9 ******************************************************************************************************************
export function timing() {
    document.addEventListener("DOMContentLoaded", () => {
        console.log("Pagina cargada");
    });
    document.querySelector("body").addEventListener("load", () => {
        console.log("Pagina cargada");
    });
    alert("Pagina cargada");
    setTimeout(() => {
        alert("Hola");
    }, 3000);
    let intervalor = setInterval(() => {
        alert("Hola");
    }, 2000);
    setTimeout(() => {
        clearInterval(intervalor);
    }, 7000);
}

//9 ******************************************************************************************************************
//9 ************************************************************************** metnat.html
//9 ******************************************************************************************************************

export function metnat() {
    let suma = "3 + 6";
    console.log("El resultado tras eval es:" + eval(suma));

    console.log(isNaN(6));

    let nums = 123;
    let string = String(nums);
    console.log(string + 12);

    let texto = "hola";
    let texto2 = "MUNDO";
    texto = texto.toUpperCase();
    texto2 = texto2.toLowerCase();
    console.log(texto);
    console.log(texto2);

    let numn = Number(string);
    console.log(numn + 12);

    let num3 = "3.1416";
    num3 = parseInt(num3);
    console.log(num3);

    let num4 = "3.1416";
    console.log(Math.round(num4));
    console.log(Math.floor(num4));
    console.log(Math.ceil(num4));

    let precio = 3.57492;
    console.log(Math.round(precio * 10) / 10);

    let fecha = new Date();
    console.log(fecha.getDay());
}

//9 ******************************************************************************************************************
//9 ************************************************************************** arrays.html
//9 ******************************************************************************************************************

export function arrays() {
    let zoo = ["elefante", "gato", "perro", "loro", "mono"];
    console.log(zoo[1]);

    console.log("El tamaño del array es: " + zoo.length);

    zoo.push("caballo", "jirafa");
    console.log(zoo);

    // zoo = zoo.concat(["gato", "perro"]); //concatena arrays opción más ineficiente
    // console.log(zoo);

    // zoo[0] = "gato"; //forma peligrosa de añadir elementos
    // zoo[1] = "elefante";
    // console.log(zoo);

    let ultimo = zoo.pop(); // elimina el ultimo elemento y lo devuelve
    console.log(zoo);
    console.log(ultimo);
    console.log("");
    // let zoo2 = zoo.slice(2, 4); // devuelve una copia del array
    // console.log(zoo2);

    let primero = zoo.shift(); // elimina el primer elemento y lo devuelve
    console.log(zoo);
    console.log(primero);

    zoo.unshift("mono", "delfín"); //pone elementos al principio del array
    console.log(zoo);

    zoo.splice(1, 2); //elimina 2 elementos a partir de la pos 1
    console.log(zoo);

    if (zoo.indexOf("caballoo") == -1) {
        console.log("No se encuentra en el array");
    } else {
        console.log("Si se encuentra en el array");
    }

    console.log(zoo);

    console.log(zoo.indexOf("mono"));

    // guardarHistorial("Crear archivo");
    // guardarHistorial("escribimos texto");
    // guardarHistorial("gaurdamos el texto");
    // guardarHistorial("modificamos el archivo");
    // guardarHistorial("Crear archivo22222");
    // guardarHistorial("Eliminamos archivo");

    // console.log(historial);

    // for (let i = 0; i < zoo.length / 2; i++) {
    //     console.log("la posición de " + zoo[i] + " es " + i);
    // }

    // zoo.forEach((element, index) => {
    //     console.log("la posición de " + element + " es " + index);
    // });

    let numarrays = [1, 2, 3, [4, 5, 6], [7, 8, 9, [10, 11, 12]]];
    console.log(numarrays[4][3][1]);

    let numarrays2 = numarrays.flat(Infinity);
    console.log("numarrays2", numarrays2);

    zoo.sort();
    console.log(zoo);

    let numarrays3 = [5, 10, 22, 1, 4];
    numarrays3.sort(function (a, b) {
        return b - a;
    });
    console.log(numarrays3);

    console.log(zoo.includes("caballo", 1));

    // let varios = zoo.concat(numarrays3, numarrays2);
    let varios = [...zoo, ...numarrays3, ...numarrays2];
    console.log(varios);

    console.log(zoo.join(" - "));
    console.log(zoo.toString());
}

// let historial = [];
// function guardarHistorial(accion) {
//     historial.unshift(accion);

//     if (historial.length > 5) {
//         historial.pop();
//     }
// }
