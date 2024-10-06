document.getElementById('registro-form').addEventListener('submit', function (event) {
    event.preventDefault();  // Evitar que se recargue la página
    alert("Usuario registrado con éxito!");
    // Aquí podrías enviar los datos a un servidor o guardarlos en localStorage
});