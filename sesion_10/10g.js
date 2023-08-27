function changeButton(name) {
    let button_1 = document.querySelector('.button-gaming');
    let button_2 = document.querySelector('.button-music')
    let button_3 = document.querySelector('.button-tech')
    if(name === 'gaming') {
        button_1.classList.add('button-change');
        button_2.classList.remove('button-change');
        button_3.classList.remove('button-change');
    } else if (name === 'music') {
        button_1.classList.remove('button-change');
        button_2.classList.add('button-change');
        button_3.classList.remove('button-change');
    } else {
        button_1.classList.remove('button-change');
        button_2.classList.remove('button-change');
        button_3.classList.add('button-change'); 
    }
}