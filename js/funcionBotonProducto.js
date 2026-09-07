// Buscamos el contenedor que envuelve todos los productos
const contenedorProductos = document.querySelector("main");

contenedorProductos.addEventListener("click", function(e) {

    if (e.target.classList.contains("btn-agregar")) {

        // Buscamos el <article> que contiene ese botón
        const producto = e.target.closest("article");

        // Dentro de ese article, buscamos su span de mensaje
        const mensaje = producto.querySelector(".mensaje-agregado");

        mensaje.textContent = "Producto agregado";
        mensaje.style.color = "green";

        setTimeout(function() {
            mensaje.textContent = "";
        }, 2000);
    }
});