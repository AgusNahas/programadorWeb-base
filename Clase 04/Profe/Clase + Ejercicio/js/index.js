// function sayMyName(nombre, apellido, edad) {
//   console.log('Tu nombre es ' + nombre + ' ' + apellido + ' y tu edad es ' + edad);
// }

// sayMyName('Agus', 'Nahas', 24);

// var total1 = suma(1, 2);
// var total2 = suma(3, 4);
// var total = suma(total1, total2);

// console.log(total);

// var total3 = suma(total, 'cualquier cosa');

// console.log(total3);

// var global = 10;
// console.log(global);

// function suma(a, b) {
//   var c = a + b;
//   return c;
// }

// suma();

// console.log(global)


// var anioActual = 2019;

// function edad(anioNacimiento) {
//   var edad = anioActual - anioNacimiento;
//   return edad;
// }

// // var numero = Math.random()

// var nacimiento = 1995;

// console.log('Si naciste en el anio ' +
//   nacimiento + ' entonces tu edad es ' + edad(nacimiento));


// Ejercicio: Opcion 1

// do {
//   var primerParametro = prompt('Ingrese el primer parametro');
//   var segundoParametro = prompt('Ingrese el segundo parametro');
//   var operacion = prompt('Ingrese la operacion (suma, resta, division, multiplicacion)');

//   var resultado = realizarOperacion(operacion, primerParametro, segundoParametro);
// } while (resultado === undefined)

// function realizarOperacion(operacionFuncion, primerParametroFuncion, segundoParametroFuncion) {
//   var primerParametroFuncion = parseInt(primerParametroFuncion);
//   var segundoParametroFuncion = parseInt(segundoParametroFuncion);

//   switch (operacionFuncion) {
//     case 'suma':
//       return primerParametroFuncion + segundoParametroFuncion;
//       break;
//     case 'resta':
//       return primerParametroFuncion - segundoParametroFuncion;
//       break;
//     case 'division':
//       if (segundoParametroFuncion === 0) {
//         console.log('No se puede dividir por 0!');
//         return undefined;
//       }
//       return primerParametroFuncion / segundoParametroFuncion;
//       break;
//     case 'multiplicacion':
//       return primerParametroFuncion * segundoParametroFuncion;
//       break;
//     default:
//       console.log('No es una operación valida!');
//       return undefined;
//       break;
//   }

// }


// Ejercicio: Opcion 2

// do {
//   var primerParametro = prompt('Ingrese el primer parametro');
//   var segundoParametro = prompt('Ingrese el segundo parametro');
//   var operacion = prompt('Ingrese la operacion (suma, resta, division, multiplicacion)');

//   var resultado = realizarOperacion(operacion, primerParametro, segundoParametro);
// } while (resultado === undefined)

// var operaciones = {
//   suma: function (a, b) {
//     return a + b;
//   },
//   resta: function (a, b) {
//     return a - b;
//   }
// }

// function realizarOperacion(op, numero1, numero2) {
//   return operaciones[op](numero1, numero2);
// }


// Ejercicio: Opcion 3


// function realizarOperacion(operacionFuncion, primerParametroFuncion, segundoParametroFuncion) {
//   var primerParametroFuncion = parseInt(primerParametroFuncion);
//   var segundoParametroFuncion = parseInt(segundoParametroFuncion);

//   switch (operacionFuncion) {
//     case 'suma':
//       return primerParametroFuncion + segundoParametroFuncion;
//       break;
//     case 'resta':
//       return primerParametroFuncion - segundoParametroFuncion;
//       break;
//     case 'division':
//       if (segundoParametroFuncion === 0) {
//         console.log('No se puede dividir por 0!');
//         return undefined;
//       }
//       return primerParametroFuncion / segundoParametroFuncion;
//       break;
//     case 'multiplicacion':
//       return primerParametroFuncion * segundoParametroFuncion;
//       break;
//     default:
//       console.log('No es una operación valida!');
//       return undefined;
//       break;
//   }

// var primerParametro = prompt('Ingrese el primer parametro');

// do {
//   var operacion = prompt('Ingrese la operacion (suma, resta, division, multiplicacion)');
// } while (operacion !== 'suma' && operacion !== 'resta' && operacion !== 'division' && operacion !== 'multiplicacion')

// do {
//   var segundoParametro = prompt('Ingrese el segundo parametro');
// } while (segundoParametro == 0 && operacion === "division")

// var resultado = realizarOperacion(operacion, primerParametro, segundoParametro);

// console.log(resultado);


