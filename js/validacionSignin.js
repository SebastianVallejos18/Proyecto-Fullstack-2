const formulario = document.querySelector("#form-sign-in");

const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const patronTelefono = /^(\+?56)?9\d{8}$/;

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.querySelector("#nombre-de-usuario");
    const correo = document.querySelector("#correo");
    const numeroTel = document.querySelector("#numero-de-telefono");
    const mensaje = document.querySelector('#mensajeConfirmacion');

    let formularioValido = true;

    nombre.classList.remove("campo-error", "campo-verified");
    correo.classList.remove("campo-error", "campo-verified");
    numeroTel.classList.remove("campo-error", "campo-verified");

    // 1. Validar Nombre
    if (nombre.value.trim() === '' || nombre.value.trim().length === 0) {
        nombre.classList.add("campo-error");
        formularioValido = false;
    } else {
        nombre.classList.add("campo-verified");
    }

    // 2. Validar Correo
    if (!patronCorreo.test(correo.value.trim())) {
        correo.classList.add("campo-error");
        formularioValido = false;
    } else {
        correo.classList.add("campo-verified");
    }

    // 3. Validar Teléfono (usando la Regex declarada arriba)
    const telefonoLimpio = numeroTel.value.trim().replaceAll(' ', '');

    if (!patronTelefono.test(telefonoLimpio)) {
        numeroTel.classList.add("campo-error");
        formularioValido = false;
    } else {
        numeroTel.classList.add("campo-verified");
    }

    // 4. Mensaje de confirmación
    if (formularioValido) {
        mensaje.textContent = '¡Formulario enviado correctamente!';
        mensaje.style.color = 'green';
    } else {
        mensaje.textContent = 'Por favor, corrige los campos marcados en rojo.';
        mensaje.style.color = 'red';
    }
});