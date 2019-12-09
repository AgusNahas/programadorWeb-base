// Objeto.funcion()
// funcion(variable)

// console.log(typeof agus);

var string = 'Lunes';

var algoQueAgregoElUsuario = 'LUNES';


// if (string.toLowerCase === algoQueAgregoElUsuario.toLowerCase)
// console.log('ES IGUAL')


// ES IGUAL
// typeof [1,2,3,4]
// "object"
// Array.isArray([1,2,3,4])
// true
// typeof {}
// "object"
// Array.isArray({})
// false
// [1,2,3,4].length
// 4
// [1,2,3,4].push(5)
// 5
// var arrayMistico = [1,2,3,4]
// undefined
// arrayMistico.push(5)
// 5
// arrayMistico
// (5) [1, 2, 3, 4, 5]
// arrayMistico.toString()
// "1,2,3,4,5"
// arrayMistico.toString(' ')
// "1,2,3,4,5"
// arrayMistico.join(' ')
// "1 2 3 4 5"
// arrayMistico.join(' y ')
// "1 y 2 y 3 y 4 y 5"
// arrayMistico
// (5) [1, 2, 3, 4, 5]
// arrayMistico.splice(2, 2)
// (2) [3, 4]
// arrayMistico
// (3) [1, 2, 5]
// var arrayOtro = arrayMistico.splice(0, 3)
// undefined
// var arrayMistico = [1,2,3,4]
// undefined
// var arrayOtro = arrayMistico.slice(1, 2)
// undefined
// arrayOtro
// [2]
// var arrayOtro = arrayMistico.slice(1, 3)
// undefined
// arrayOtro
// (2) [2, 3]
// arrayOtro.push(9)
// 3
// arrayOtro.push(5)
// 4
// arrayOtro.push(100)
// 5
// arrayOtro.push(6)
// 6
// arrayOtro
// (6) [2, 3, 9, 5, 100, 6]
// arrayOtro.sort()
// (6) [100, 2, 3, 5, 6, 9]0: 1001: 22: 33: 54: 65: 9length: 6__proto__: Array(0)
// function ordenNumerico(a, b){ return b - a }
// undefined
// arrayOtro.sort(ordenNumerico)
// (6) [100, 9, 6, 5, 3, 2]
// function ordenNumerico(a, b){ return a-b }
// undefined
// arrayOtro.sort(ordenNumerico)
// (6) [2, 3, 5, 6, 9, 100]


var numbers = [1, 2, 3, 4, 5]

console.log(deleteElement(2, numbers)); // Devuelve un nuevo Array [1,2,4,5]

function deleteElement(indice, array) {
  array.splice(indice, 1);
  return array;
}

