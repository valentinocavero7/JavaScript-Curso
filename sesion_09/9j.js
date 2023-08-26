let operacion = localStorage.getItem('operacion') || '';

function actualizarOperacion(aux) {
    operacion += aux;
    document.querySelector('.js-operacion').innerHTML = operacion;
    localStorage.setItem('operacion', operacion);
}