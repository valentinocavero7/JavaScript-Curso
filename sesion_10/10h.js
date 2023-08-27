function price() {
    const valor = document.querySelector('.js-input');
    if(valor.value < 0) {
        messageError = 'Error: cost cannot be less than $0';
        document.querySelector('.js-message').innerHTML = messageError;
    }
}