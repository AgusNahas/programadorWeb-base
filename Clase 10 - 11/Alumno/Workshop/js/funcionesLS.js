function guardarEnLS(key, datos) {
  var datosEnJSON = JSON.stringify(datos);
  localStorage.setItem(key, datosEnJSON);
}

function buscarEnLS(key) {
  var dato = localStorage.getItem(key);
  if (dato != undefined) {
    var datos = JSON.parse(dato)
    if (datos.nombre) return datos;
    else return null;
  } else return null
}

function eliminarDeLS(key) {
  localStorage.removeItem(key);
}