// Selecciona el botón por su ID y agrega un evento click
document.getElementById("mostrarFechaHora").onclick = function() {
    // Muestra la fecha y hora actuales en el elemento con ID "demo"
    document.getElementById("demo").innerHTML = new Date();
};
