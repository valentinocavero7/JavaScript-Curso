let inicio = 0;
function actualizarCarta(cart) {
   if(inicio += cart > 12) {
    console.log('No hay más cartas por remover');
    return;
   } else if(inicio += cart < 0) {
    console.log('No se puede agregar más cartas');
    return;
   }

   inicio += cart;

   let valor = 'Cart quantity: ' + inicio;
   document.querySelector('.cart').innerHTML = valor;
}