document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar la recarga de la página

    // Obtener los datos del formulario
    var nombre = document.getElementById('nombre').value;
    var equipo = document.getElementById('equipo').value;
    var edad = document.getElementById('edad').value;
    var posicion = document.getElementById('posicion').value;
    var nombreApellidos = document.getElementById('nombre-apellidos').value; // El campo oculto

    // Crear un objeto con los datos del formulario
    var datosFormulario = {
        nombre: nombre,
        equipo: equipo,
        edad: edad,
        posicion: posicion,
        'nombre-apellidos': nombreApellidos
    };

    // Enviar los datos al Webhook
    enviarDatosAlWebhook(datosFormulario);

    // Agregar los datos a la tabla
    agregarDatosATabla(datosFormulario);

    // Limpiar el formulario
    document.getElementById('formulario').reset();
});

// Función para enviar los datos al Webhook
function enviarDatosAlWebhook(datos) {
    fetch('https://webhook.site/7d580ff9-65b4-42eb-b1e2-c67d9a7a1667', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => console.log('Datos enviados al Webhook:', response))
    .catch(error => console.error('Error al enviar los datos al Webhook:', error));
}

// Función para agregar los datos a la tabla
function agregarDatosATabla(datos) {
    // Obtener el cuerpo de la tabla donde se agregarán las filas
    var tablaCuerpo = document.getElementById('tablaDatos').getElementsByTagName('tbody')[0];

    // Crear una nueva fila
    var fila = document.createElement('tr');

    // Crear las celdas para cada dato
    var celdaNombre = document.createElement('td');
    var celdaEquipo = document.createElement('td');
    var celdaEdad = document.createElement('td');
    var celdaPosicion = document.createElement('td');
    var celdaNombreApellidos = document.createElement('td');

    // Asignar los valores de los datos a las celdas
    celdaNombre.textContent = datos.nombre;
    celdaEquipo.textContent = datos.equipo;
    celdaEdad.textContent = datos.edad;
    celdaPosicion.textContent = datos.posicion;
    celdaNombreApellidos.textContent = datos['nombre-apellidos'];

    // Añadir las celdas a la fila
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaEquipo);
    fila.appendChild(celdaEdad);
    fila.appendChild(celdaPosicion);
    fila.appendChild(celdaNombreApellidos);

    // Agregar la fila a la tabla
    tablaCuerpo.appendChild(fila);
}
