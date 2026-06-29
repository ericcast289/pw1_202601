document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje");

    // Expresión regular para validar correo
    let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexCorreo.test(correo)) {
        mensaje.textContent = "Correo electrónico no válido";
        return;
    }

    mensaje.style.color = "green";
    mensaje.textContent = "Formulario enviado correctamente";
});