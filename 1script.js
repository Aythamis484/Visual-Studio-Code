// script.js

// Función para actualizar la fecha y hora
function actualizarFechaHora() {
    const fechaHora = new Date(); // Obtener la fecha y hora actual
    const opciones = {
        weekday: 'long', // Día de la semana
        year: 'numeric', // Año con 4 dígitos
        month: 'long', // Mes en formato largo
        day: 'numeric', // Día del mes
        hour: '2-digit', // Hora en formato de 2 dígitos
        minute: '2-digit', // Minuto en formato de 2 dígitos
        second: '2-digit' // Segundo en formato de 2 dígitos
    };

    // Formateamos la fecha y hora con las opciones indicadas
    const fechaHoraFormateada = fechaHora.toLocaleString('es-ES', opciones);

    // Mostrar la fecha y hora en el elemento con id "fecha-hora"
    document.getElementById('fecha-hora').textContent = `Fecha y hora actual: ${fechaHoraFormateada}`;
}

// Llamar a la función para actualizar la fecha y hora cuando se cargue la página
actualizarFechaHora();

// Actualizar la fecha y hora cada segundo (1000 milisegundos)
setInterval(actualizarFechaHora, 1000);
