
function agregarAlumno(nombre, apellido, email, dni) {
  guardarEnLS(dni,
    {
      nombre: nombre,
      apellido: apellido,
      email: email
    }
  );
}

function buscarAlumno(dni) {
  return (buscarEnLS(dni) !== null);
}

function quitarAlumno(dni) {
  eliminarDeLS(dni);
}

function crearNodoAlumno(alumno) {

  //crear li
  var liNuevo = document.createElement('li');
  //agregarlo al body
  var mainList = document.getElementById('mainList');
  mainList.appendChild(liNuevo);

  //agregarle la clase y el id
  liNuevo.className = 'list-group-item';
  liNuevo.id = alumno.dni;

  //crear h1 con nombre y apellido
  var h1 = document.createElement('h1');
  h1.innerHTML = alumno.firstName + " " + alumno.lastName;
  //agregarlo al li
  liNuevo.appendChild(h1);

  //crear h3 con dni
  var h3 = document.createElement('h3');
  h3.innerHTML = 'DNI: ' + alumno.dni;
  //agregarlo al l1
  liNuevo.appendChild(h3);

  //crear p con email
  var p = document.createElement('p');
  p.innerHTML = 'E-mail: ' + alumno.email;
  //agregarlo al li
  liNuevo.appendChild(p);

}