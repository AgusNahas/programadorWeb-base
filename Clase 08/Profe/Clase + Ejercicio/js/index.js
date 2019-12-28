// var elemento = document.getElementsByClassName('paragraph');

// console.log(elemento);

// var elemento = document.createElement('strong');
// elemento.innerHTML = "Un elemento increible";
// document.getElementsByTagName('body')[0].appendChild(elemento);

var elemento = document.createElement('h1');

var i = 0;
for (i = 0; i < 5; i++) {
  do {
    var variable = prompt("Ingrese un valor");
  } while (!variable)

  elemento.className = "titulo";
  elemento.innerHTML = variable;

  document.getElementsByTagName('body')[0].appendChild(elemento);

  console.log(variable);

}

