const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {

    event.preventDefault(); 

    const nombre = document.getElementById("txtNombre");
    const correo = document.getElementById("txtCorreoElectronico");
    const edad = document.getElementById("intEdad");

    let valido = true;

    nombre.classList.remove("error");
    correo.classList.remove("error");
    edad.classList.remove("error");

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre.value.trim() === "") {
        nombre.classList.add("error");
        valido = false;
    }

    if (!regexCorreo.test(correo.value.trim())) {
        correo.classList.add("error");
        valido = false;
    }

    if (edad.value === "" || edad.value < 1 || edad.value > 150) {
        edad.classList.add("error");
        valido = false;
    }

    const colorSeleccionado = document.querySelector('input[name="colorPreferido"]:checked');
    if (!colorSeleccionado) {
        alert("Seleccione un color preferido");
        valido = false;
    }

    const rango = document.getElementById("txtRangoEdad");
    if (rango.value === "*") {
        rango.classList.add("error");
        valido = false;
    } else {
        rango.classList.remove("error");
    }

    if (valido) 
    {
        alert("Formulario enviado correctamente");
        formulario.submit(); 
    } 
    else 
    {
        alert("Por favor corrija los campos marcados en rojo");
    }

});