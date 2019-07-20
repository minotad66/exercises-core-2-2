/**
***************************
**************************

Agregar la logica necesaria a la funcion 'onClick' que permita cambiar el contenido del div con clase box

**************************
**************************
 */

function changeTextOnclick(e) {
  // logica aqui.
  box.innerHTML = "HOLA MUNDO!";
  box.style.color = 'orange'
}
const button1 = document.getElementById('btn-1')
button1.addEventListener('click', changeTextOnclick) 

/*
**************************
**************************

Agregar un evento click al boton del HTML que cambie el color del div con clase box

**************************
**************************
*/

const box = document.querySelector('.box')
const button2 = document.querySelector('.btn-2')

button2.addEventListener('click', changeBackgroundColorOnClick) 

function changeBackgroundColorOnClick() {
  box.style.backgroundColor = 'teal'
}
