// script.js

// Función para actualizar la fecha y hora
function actualizarFechaHora() {
    const fechaHora = new Date();
    const fechaHoraFormateada = fechaHora.toLocaleString(); // Devuelve la fecha y hora en formato local

    // Actualizamos el contenido del elemento con id 'fecha-hora'
    document.getElementById('fecha-hora').textContent = `Fecha y hora actual: ${fechaHoraFormateada}`;
}

// Llamamos a la función para actualizar la fecha y hora al cargar la página
actualizarFechaHora();

// Actualizamos la fecha y hora cada segundo
setInterval(actualizarFechaHora, 1000);


    // Formateamos la fecha y hora con las opciones indicadas
    const fechaHoraFormateada = fechaHora.toLocaleString('es-ES', opciones);

    // Mostrar la fecha y hora en el elemento con id "fecha-hora"
    document.getElementById('fecha-hora').textContent = `Fecha y hora actual: ${fechaHoraFormateada}`;
    

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
    fetch('https://webhook.site/22b88f77-1999-4283-af32-d7fee8b6712b', {
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

