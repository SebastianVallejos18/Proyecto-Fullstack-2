const formulario = document.querySelector("#form-contacto");
const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        const nombre = document.querySelector("#nombre-contacto");
        const correo = document.querySelector("#correo-contacto");
        const mensajeTexto = document.querySelector("#mensaje-contacto");
        const mensaje = document.querySelector('#mensajeConfirmacion');

        const errorNombre = document.querySelector("#error-nombre-contacto");
        const errorCorreo = document.querySelector("#error-correo-contacto");
        const errorMensaje = document.querySelector("#error-mensaje-contacto");

        let formularioValido = true;

        nombre.classList.remove("campo-error", "campo-verified");
        correo.classList.remove("campo-error", "campo-verified");
        mensajeTexto.classList.remove("campo-error", "campo-verified");

        errorNombre.textContent = "";
        errorCorreo.textContent = "";
        errorMensaje.textContent = "";


        // 1. Validar Nombre
        if (nombre.value.trim() === '') {
            nombre.classList.add("campo-error");
            errorNombre.textContent = "Por favor ingresa tu nombre.";
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

        // 3. Validar Mensaje
        if (mensajeTexto.value.trim().length < 10) {
            mensajeTexto.classList.add("campo-error");
            errorMensaje.textContent = "Tu mensaje debe tener al menos 10 caracteres.";
            formularioValido = false;
        } else {
            mensajeTexto.classList.add("campo-verified");
        }

        // 4. Mensaje de confirmación
        if (formularioValido) {
            mensaje.textContent = '¡Mensaje enviado correctamente!';
            mensaje.style.color = 'green';
        } else {
            mensaje.textContent = 'Por favor, corrige los campos marcados en rojo.';
            mensaje.style.color = 'red';
        }
    }
);