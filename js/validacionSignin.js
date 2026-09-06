
const formulario = document.querySelector("#form-sign-in");
const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formulario.addEventListener("submit",
    function(e) {
        e.preventDefault();

        const nombre = document.querySelector("#nombre-de-usuario");
        const correo = document.querySelector("#correo");
        const numeroTel = document.querySelector("#numero-de-telefono")

        const formularioValido = true;
    }
)