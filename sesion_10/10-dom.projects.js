function Subscribe() {
    const buttonElement = document.querySelector('.jb-subscribe-button')
    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
        //agregamos una clases a nuetro 'buttonElement'
        //esta clase se añade al momento de darle click a nuestro button
        buttonElement.classList.add('is-subscribed');
    } else {
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-subscribed')
    }
}

function price() {
    let valor = document.querySelector('.input-price');
    console.log(parseInt(valor.value));
    let valorFinal = Number(valor.value);
    if(valorFinal < 40) {
       valorFinal += 10;
    }
    document.querySelector('.js-result').innerHTML = '$ ' + valorFinal
}

function enter(key) {
    if(key === 'Enter') {
        price();
    }
}