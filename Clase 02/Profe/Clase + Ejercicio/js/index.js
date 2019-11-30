// console.log(persona.edad);
// console.log(persona);

// var edad;
// edad = prompt('Ingrese edad');
// edadParseada = parseInt(edad);
// var esMayorDeEdad = (edad >= 18); //booleano
// if (esMayorDeEdad){
//   console.log("Es mayor de edad");
// } else {
//   console.log("Es menor de edad");
// }

// var loQueVaASerFalso = ('Juan' === 'juan');

// if (loQueVaASerFalso){
//   console.log(loQueVaASerFalso, "Es verdadero!")
// } else {
//   console.log(loQueVaASerFalso, "Es falso!")
// }

var resultOfGame = 'Ganó';

if (resultOfGame === 'Ganó') {
  console.log('Se le suman 3 puntos')
} else {
  if (resultOfGame === 'Perdió') {
    console.log('Se le suma 1 punto')
  } else if (resultOfGame === 'Empató') {
    console.log('No se le suma ningún punto')
  } else {
    console.log('El resultado no es correcto')

  }
}

switch (resultOfGame) {
  case 'Ganó':
    console.log('Se le suman 3 puntos')
    break
  case 'Perdió':
    console.log('Se le suma 1 punto')
    break
  case 'Empató':
    console.log('No se le suma ningún punto')
    break
  default:
    console.log('El resultado no es correcto')
    break
}
