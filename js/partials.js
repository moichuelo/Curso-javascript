document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(id, url) {
        fetch(url)
            .then((response) => response.text())
            .then((data) => (document.getElementById(id).innerHTML = data))
            .catch((error) => console.error(`Error al cargar ${url}:`, error));
    }

    loadComponent("header-container", "../pages/partials/header.html");
    loadComponent("aside-container", "../pages/partials/aside.html");
    loadComponent("footer-container", "../pages/partials/footer.html");
});
