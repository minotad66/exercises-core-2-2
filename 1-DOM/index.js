/*

Obtener e imprimir en consola del siguiente HTML los siguientes elementos

* todos los div's
* el elemento con Id 'header'
* el primer elemento con clase 'box'
* todos los elementos con la clase 'wrap'
* todos los elementos div con la clase 'wrap'
* solo el elemento con clase 'box' que se encuentra dentro del elemento 'wrap' que a su vez esta dentro del elemento 'container'

*/

var x = document.getElementsByTagName('div');
console.log(x)
console.log(document.getElementById('header'))
var Elem = document.getElementsByClassName('box');
console.log(Elem[0])
var wrap = document.getElementsByClassName('wrap');
console.log(wrap)
var divWrap = document.querySelectorAll('div.wrap');
console.log(divWrap)
console.log(document.querySelector('div.container > div.wrap > span.box'))