// var numero = 9;
// Que pasa con este numero 9 cuando cerramos el navegador o lo comentamos? 
// Si hago console.log(numero) y comente la primera linea, no voy a poder acceder a esa info
// porque ya no existe

// Si queremos guardar datos y que se
// persistan, tenemos el localStorage y el
// sessionStorage

var objeto = {
  id: 8,
  nombre: 'Agus',
  email: 'm.agustina.nahas@gmail.com',
  apellido: 'Nahas'
};

// Acá convertimos objetos o arrays a JSON
// JSON es un tipo de dato que es un string
// pero se puede convertir en un objeto o un array

var json = JSON.stringify(objeto);
// con la funcion stringify voy de objeto -> string json

console.log(objeto);
console.log(json);

// Asi como podemos convertir objetos o arrays
// en strings, tambien podemos convertir
// strings (que tengan el formato adecuado)
// en objetos de nuevo!

var json2 = '{"id":10,"nombre":"Galileo","email":"galileo@gmail.com","apellido":"Galilei"}';

var objeto2 = JSON.parse(json2);

// con la funcion parse voy de string json -> obj

console.log(json2);
console.log(objeto2);

// Cada vez que uso el storage, tengo que explicitar
// la 'clave' o el identificador con el que voy a 
// guardar mi informacion


// Aca estoy diciendo 'guarda en GALILEO, el json2'
sessionStorage.setItem('galileo', json2)
localStorage.setItem('galileo', json2)

// Para ir a buscar la informacion, nada mas tengo que 
// explicitar que clave tiene la info que busco
// Esta info se va a quedar aca y la puedo
// leer CUANDO YO QUIERA, aunque pasen años y siglos (?)
localStorage.getItem('galileo')

