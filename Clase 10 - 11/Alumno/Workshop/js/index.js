
// Botones
var addStudentButtonNode = document.getElementById('addStudentButton')
var deleteStudentButtonNode = document.getElementById('deleteStudentButton')
var mainListNode = document.getElementById('mainList')

// Texto
var campoNombre = document.getElementById('firstName')
var campoApellido = document.getElementById('lastName')
var campoEmail = document.getElementById('email')
var campoDni = document.getElementById('dni')
var campoDeleteDni = document.getElementById('deleteDni')

for (var dni in localStorage) {
  if (buscarEnLS(dni)) {
    var alumno = buscarEnLS(dni)

    console.log(alumno)

    crearNodoAlumno({
      firstName: alumno.nombre ? alumno.nombre : '',
      lastName: alumno.apellido ? alumno.apellido : '',
      email: alumno.email ? alumno.email : '',
      dni: dni,
    });
  }
}

addStudentButtonNode.onclick = clickAgregarAlumno

function clickAgregarAlumno(event) {
  if (!buscarAlumno(parseInt(campoDni.value))) {
    agregarAlumno(campoNombre.value, campoApellido.value, campoEmail.value, parseInt(campoDni.value))
    crearNodoAlumno({
      firstName: campoNombre.value,
      lastName: campoApellido.value,
      email: campoEmail.value,
      dni: campoDni.value
    });
  }
}

deleteStudentButtonNode.onclick = clickEliminarAlumno

function clickEliminarAlumno(event) {
  var dni = campoDeleteDni.value

  if (!buscarAlumno(parseInt())) {
    quitarAlumno(parseInt(campoDeleteDni.value))

    var node = document.getElementById(dni)
    mainListNode.removeChild(node)
  }

}
