/* 
**************************
**************************

Agregar la dentro del metodo .then() la logica necesaria para imprimir el valor 'value'

**************************
**************************
*/

const myPromise = Promise.resolve(50)

myPromise.then(function(value) {
  // logica aqui
  console.log(value)
})

/*
**************************
**************************

Agregar dentro del Callback 'funcion1' la logica necesaria sumarle al valor 'value' la cantidad 10 y luego imprimirlo

**************************
**************************
*/

const addValue = function(value) {
  // logica aqui.
  value += 10;
  console.log(value)
}

const anotherPromise = Promise.resolve()

anotherPromise.then(addValue)

/* 
**************************
**************************

Crear una promesa que resuelva con el string 'foo'

**************************
**************************
*/

// logica aqui
const myPromise2 = Promise.resolve('foo')

/* 
**************************
**************************

A la promesa anterior agregar un metodo .then() para concatenar al string su propio nombre. 

**************************
**************************
*/

// logica a aqui
myPromise2.then(function(value) {
  value = value + "Promise2"
  console.log(value)
})