// {
//   nombre: 'Agus', 
//   edad: 24,
//   mail: 'm.agustina.nahas@gmail.com'
// }

// var persona = {
//   nombre: 'Juan',
//   edad: 29,
//   mail: 'asdad'
// }

// console.log(persona.nombre);




function Persona(nombre, edad, mail, apellido) {
  // var nombre = 'Agus';

  this.nombre = nombre;
  this.edad = edad;
  this.mail = mail;
  this.apellido = apellido;

  function darNombreCompleto() {
    return nombre + ' ' + apellido;
  }

  this.presentarse = function () {
    return 'Yo me llamo ' + darNombreCompleto()
  }

}

var juan = new Persona('Juan', 29, 'askjdhakjsdh')
console.log(juan.nombre);

var agus = new Persona('Agus', 24, 'amsadasd', 'Nahas');

agus.nombre = 'Agustina';

console.log(agus.presentarse());

