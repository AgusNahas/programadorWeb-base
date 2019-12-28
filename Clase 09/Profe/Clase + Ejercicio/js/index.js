function showMessage(event) {
  // console.log(event)
  console.log("Hola, paragraph " + event.target.id)
}

function mouseOver() {
  console.log('El usuario está aquí!')
}

function showDifferentMessage() {
  console.log('El usuario hizo blur')
}


var elementos = document.getElementsByClassName('paragraph');

for (i = 0; i < elementos.length; i++) {
  elementos[i].onclick = showMessage;
  // elementos[i].onmouseover = mouseOver;
}


var inputText = document.getElementById('input-text')

inputText.onblur = showFeedback

function showFeedback(event) {
  var inputNode = event.target

  console.log(inputNode)

  if (inputNode.value != '') {
    inputNode.style.borderColor = "green"
    // inputNode.parentElement.classList.add("has-success");
    // inputNode.parentElement.classList.remove("has-error");
  } else {
    inputNode.style.borderColor = "red"
    // inputNode.parentElement.classList.add("has-error");
    // inputNode.parentElement.classList.remove("has-success");
  }

  console.log('El usuario perdió foco y el input tiene el valor ' + inputNode.value)
}
