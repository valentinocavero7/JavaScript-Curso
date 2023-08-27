function actualizar(valor) {
    document.querySelector('.js-valor').innerHTML += valor;
}

function limpiar() {
    let nada = '';
    document.querySelector('.js.valor').innerHTML = nada;
}

function calcular() {
    total = eval(document.querySelector('.js-valor').innerHTML);
    document.querySelector('.js-valor').innerHTML = total;
}