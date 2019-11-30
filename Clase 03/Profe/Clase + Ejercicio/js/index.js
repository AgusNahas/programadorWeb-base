// Crea un ciclo entre 0 y 10, e imprime el 'numero de vuelta' 
// 
// for(var i = 0 ; i <= 10 ; i++){
//     console.log(i);
// }

// Crea un ciclo entre 0 y 10 pero yendo de 2 en 2, 
// e imprime el 'numero de vuelta' 
// 
// for(var i = 0 ; i <= 10 ; i+=2){
//     console.log(i);
// }

// Tenemos un array de dias de la semana
//
// var daysOfTheWeek = ['Lunes', 'Martes', 'Miércoles',
//     'Jueves', 'Viernes', 
// 'Sábado', 'Domingo']

// Para mostrarlo, no es tedioso asi??
// 
// console.log(daysOfTheWeek[0]);
// console.log(daysOfTheWeek[1]);
// console.log(daysOfTheWeek[2]);
// console.log(daysOfTheWeek[3]);
// console.log(daysOfTheWeek[4]);

// Mejor lo recorremos con un ciclo, desde 0
// (porque el primer elemento tiene indice 0)
// hasta el largo del array - 1
// En este caso, tenemos 7 elementos, entonces vamos desde el 0 hasta el 6
// 
// for (var i = 0; i < daysOfTheWeek.length; i++) {
//     var day = daysOfTheWeek[i]
//     console.log(day)
// }

// Pero que pasa cuando no sabemos la cantidad exacta de veces 
// que queremos repetir el ciclo?
// 
// var numero = Math.random()*10;
//
// while(numero <= 5){
//     console.log(numero);
//     numero = Math.random()*10;
// }
//
// console.log(numero);
//
// En este caso de arriba, hasta que el nro no sea mayor que 5, 
// se va a repetir el ciclo


// Y si queremos que ejecute una vez, y recien ahi evalue repetir?
// 
// var i = 1
//
// do{
//     console.log(i)
//
//     i++
// } while(i < 10)

// Lo hace una vez, y evalua si repite o no!
//
// var value
//
// do{
//     value = prompt('Ingrese un valor mayor a 5')
//
// }while(value <= 5)
//
// console.log(value)


// Break es para cuando NO queremos que haga ningun ciclo/repeticion mas
// 
// for(var i = 1 ; i < 10 ; i++){
//     console.log(i)
//
//     if(i === 5){
//         break
//     }
// }


// Continue es para cuando queremos saltear el resto de ESTE ciclo,
// pero seguir ejecutando los ciclos siguientes
//
// for(var i = 1 ; i < 8 ; i++){
//     if(i === 3 || i === 6){
//         continue
//     }
//     console.log(i)
// }

// Ejercicio, opcion 1

var dayOfTheWeek = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Sabado',
    'Domingo',
    'Pato'
  ]

for (var i = 0; i <dayOfTheWeek.length; i++){
    switch (dayOfTheWeek[i]) {
        case 'Lunes':
        case 'Martes':
        case 'Miércoles':
        case 'Miercoles':
        case 'Jueves':
        case 'Viernes':
          console.log(dayOfTheWeek[i] + ' es un día hábil')
          break
        case 'Sábado':
        case 'Sabado':
        case 'Domingo':
          console.log(dayOfTheWeek[i] + ' es un día de fin de semana')
          break
        default:
          console.log('El día ingresado no es valido')
          break
      }
}


// Ejercicio, opcion 2

var dias = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Sabado',
    'Domingo',
    'Pato'
  ]

var semana = ['Lunes', 'Martes', 'Miercoles', 'Miércoles', 'Jueves', 'Viernes']
var find = ['Sabado', 'Sábado','Domingo']
for (var i = 0; i <dias.length; i++){
    if(semana.includes(dias[i])){
        console.log('es dia de semana')} 
    else if(find.includes(dias[i])){
        console.log('no es dia de semana')
    } else {
        console.log('no es dia')
    }
}
