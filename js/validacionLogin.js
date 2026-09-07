const formulario = document.querySelector("#form-login");
const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formulario.addEventListener("submit",
    function(e) {
        e.preventDefault();

        const nombre = document.querySelector("#nombre-de-usuario");
        const correo = document.querySelector("#correo");
        const mensaje = document.querySelector('#mensajeConfirmacion');

        const errorNombre = document.querySelector("#error-nombre-de-usuario");
        const errorCorreo = document.querySelector("#error-correo");

        let formularioValido = true;

        // Se remueven las clases style antes de validar, asi los campos estan "limpios" y se setean correctamente
        nombre.classList.remove("campo-error", "campo-verified");
        correo.classList.remove("campo-error", "campo-verified");

        // Se limpian los mensajes de error antes de validar
        errorNombre.textContent = "";
        errorCorreo.textContent = "";

        // 1. Validar Nombre
        if (nombre.value.trim() === '' || nombre.value.trim().length === 0) {
            nombre.classList.add("campo-error");
            errorNombre.textContent = "Por favor ingresa tu nombre de usuario.";
            formularioValido = false;
        } else {
            nombre.classList.add("campo-verified");
        }

        // 2. Validar Correo
        if (!patronCorreo.test(correo.value.trim())) {
            correo.classList.add("campo-error");
            errorCorreo.textContent = "Ingresa un correo válido, ej: nombre@dominio.com";
            formularioValido = false;
        } else {
            correo.classList.add("campo-verified");
        }

        // 3. Mensaje de confirmación
        if (formularioValido) {
            mensaje.textContent = '¡Formulario enviado correctamente!';
            mensaje.style.color = 'green';
        } else {
            mensaje.textContent = 'Por favor, corrige los campos marcados en rojo.';
            mensaje.style.color = 'red';
        }
    }
);