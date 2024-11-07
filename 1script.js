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

// script.js

// Seleccionamos el formulario y la tabla
const form = document.getElementById('formRegistro');
const tablaDatos = document.getElementById('tablaDatos').getElementsByTagName('tbody')[0];

// Función para enviar los datos al webhook
function enviarDatosWebhook(data) {
    fetch('https://webhook.site/#!/view/22b88f77-1999-4283-af32-d7fee8b6712b/3840f95f-4c69-4afa-8e55-0bcc657bc043/1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Datos enviados:', data);
    })
    .catch(error => {
        console.error('Error al enviar los datos:', error);
    });
}

// Función para agregar los datos a la tabla
function agregarATabla(data) {
    const nuevaFila = tablaDatos.insertRow();
    const celdaNombre = nuevaFila.insertCell(0);
    const celdaEquipo = nuevaFila.insertCell(1);
    const celdaEdad = nuevaFila.insertCell(2);
    const celdaPosicion = nuevaFila.insertCell(3);

    celdaNombre.textContent = data.nombre;
    celdaEquipo.textContent = data.equipo;
    celdaEdad.textContent = data.edad;
    celdaPosicion.textContent = data.posicion;
}

// Evento al enviar el formulario
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario recargue la página

    // Obtener los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const equipo = document.getElementById('equipo').value;
    const edad = document.getElementById('edad').value;
    const posicion = document.getElementById('posicion').value;

    // Crear un objeto con los datos
    const datosFormulario = {
        nombre,
        equipo,
        edad,
        posicion
    };

    // Enviar los datos al webhook
    enviarDatosWebhook(datosFormulario);

    // Agregar los datos a la tabla
    agregarATabla(datosFormulario);

    // Limpiar el formulario
    form.reset();
});

