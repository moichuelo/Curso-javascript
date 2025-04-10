function cargarcomponente(id, url, callback) {
    fetch(url)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById(id).innerHTML = data;
            if (typeof callback === "function") callback(); // Ejecuta el callback si existe
        })
        .catch((error) => console.error(`Error al cargar ${url}:`, error));
}

function resaltarEnlaceActivo() {
    const links = document.querySelectorAll("#aside-container ul li a");
    const currentUrl = window.location.pathname;

    links.forEach((link) => {
        const linkUrl = new URL(link.href);
        if (linkUrl.pathname === currentUrl) {
            link.classList.add("active");
        }
    });
}

export function cargarpartials() {
    document.addEventListener("DOMContentLoaded", function () {
        cargarcomponente("header-container", "/pages/partials/header.html");
        cargarcomponente(
            "aside-container",
            "/pages/partials/aside.html",
            resaltarEnlaceActivo
        );
        cargarcomponente("footer-container", "/pages/partials/footer.html");
    });
}
