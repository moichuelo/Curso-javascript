//importamos la función de los parciales y la ejecutamos
import { cargarpartials } from "./partials.js";
cargarpartials();

// JavaScript para manejar la apertura y cierre del menú con el botón hamburguesa
const hamburger = document.querySelector(".hamburger");
const aside = document.querySelector("#aside-container");
hamburger.addEventListener("click", () => {
    aside.classList.toggle("open");
    hamburger.classList.toggle("open");
});

//obtenemos el nombre del archivo html que se está visualizando
let pagina = window.location.pathname.split("/").pop();

//9 ******************************************************************************************************************
//9 ************************************************************************** cbasicos.html
//9 ******************************************************************************************************************
if (pagina == "cbasicos.html") {
    //hacemos una comprobación para que solo afecte a la página que queremos
    import("/js/funciones.js")
        .then((module) => {
            module.cbasicos();
        })
        .catch((error) => {
            console.error(error);
        });
}

//la siguiente función debemos realizarla con esta sintaxis al llamarla desde html
async function cambiarTexto() {
    console.log("Estoy en cambiarTexto");
    try {
        const { cambiarTexto2 } = await import("./funciones.js");

        cambiarTexto2(); // Llamamos a la función importada dinámicamente
    } catch (error) {
        console.error("Error al importar la función saludar():", error);
    }
}

//convertimos las funciones en globales para que puedan ser llamadas desde html
window.cambiarTexto = cambiarTexto;

//9 ******************************************************************************************************************
//9 ************************************************************************** condicionales.html
//9 ******************************************************************************************************************
if (pagina == "Condicionales.html") {
    import("/js/funciones.js")
        .then((module) => {
            module.condicionales();
        })
        .catch((error) => {
            console.error(error);
        });
}

//9 ******************************************************************************************************************
//9 ************************************************************************** bucles.html
//9 ******************************************************************************************************************
if (pagina == "Bucles.html") {
    import("/js/funciones.js")
        .then((module) => {
            module.bucles();
        })
        .catch((error) => {
            console.error(error);
        });
}

//9 ******************************************************************************************************************
//9 ************************************************************************** funciones.html
//9 ******************************************************************************************************************
if (pagina == "Funciones.html") {
    import("/js/funciones.js")
        .then((module) => {
            module.funciones();
        })
        .catch((error) => {
            console.error(error);
        });
}

//9 ******************************************************************************************************************
//9 ************************************************************************** intdom.html
//9 ******************************************************************************************************************
if (pagina == "intdom.html") {
    import("/js/funciones.js")
        .then((module) => {
            module.intdom();
        })
        .catch((error) => {
            console.error(error);
        });
}

//9 ******************************************************************************************************************
//9 ************************************************************************** eventos.html
//9 ******************************************************************************************************************
if (pagina == "Eventos.html") {
    import("/js/funciones.js")
        .then((module) => {
            module.eventos();
        })
        .catch((error) => {
            console.error(error);
        });
}

//9 ******************************************************************************************************************
//9 ************************************************************************** Timing.html
//9 ******************************************************************************************************************
if (pagina == "Timing.html") {
    import("/js/funciones.js")
        .then((module) => {
            module.timing();
        })
        .catch((error) => {
            console.error(error);
        });
}

//9 ******************************************************************************************************************
//9 ************************************************************************** metnat.html
//9 ******************************************************************************************************************
if (pagina == "metnat.html") {
    import("/js/funciones.js")
        .then((module) => {
            module.metnat();
        })
        .catch((error) => {
            console.error(error);
        });
}

//9 ******************************************************************************************************************
//9 ************************************************************************** arrays.html
//9 ******************************************************************************************************************
if (pagina == "arrays.html") {
    import("/js/funciones.js")
        .then((module) => {
            module.arrays();
        })
        .catch((error) => {
            console.error(error);
        });
}
