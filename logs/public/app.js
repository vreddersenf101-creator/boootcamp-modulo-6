const mensaje = document.getElementById('mensaje');
const tiempo = document.getElementById('tiempo');
const ultimaConsulta = document.getElementById('ultima-consulta');
const botonActualizar = document.getElementById('actualizar');

async function consultarEstado() {
  try {
    const respuesta = await fetch('/status');
    const datos = await respuesta.json();

    mensaje.textContent = datos.message;
    tiempo.textContent = datos.data.uptimeSeconds;
    ultimaConsulta.textContent = new Date(datos.data.timestamp).toLocaleString();
  } catch (error) {
    mensaje.textContent = 'No se pudo consultar la conexión.';
    ultimaConsulta.textContent = error.message;
  }
}

botonActualizar.addEventListener('click', consultarEstado);
consultarEstado();