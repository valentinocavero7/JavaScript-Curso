function typing (text) {
    if(text === 'Backspace') {
        let hola = document.querySelector('.js-text').innerHTML;
        let adios = hola.substring(0, hola.length - 1);
        document.querySelector('.js-text').innerHTML = adios;
    } else {
      document.querySelector('.js-text').innerHTML += text;
    }
}