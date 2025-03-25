function cargarcomponente(id, url) {
    //función local
    fetch(url) //hace una petición para obtener un arvivo
        .then((response) => response.text()) //convierte la respuesta a texto
        .then((data) => (document.getElementById(id).innerHTML = data)) //inserta el texto en el contenedor
        .catch((error) => console.error(`Error al cargar ${url}:`, error)); //manejo de errores
}

export function cargarpartials() {
    //función que se exporta

    document.addEventListener("DOMContentLoaded", function () {
        cargarcomponente("header-container", "/pages/partials/header.html"); //llama a la función para cargar el header
        cargarcomponente("aside-container", "/pages/partials/aside.html");
        cargarcomponente("footer-container", "/pages/partials/footer.html");
    });
}
