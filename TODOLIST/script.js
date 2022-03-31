window.onload = iniciar;

var tareas = [];

function iniciar() {
  var btn = document.getElementById("btnAdd");

  btn.addEventListener("click", addList);
}

function addList() {
  var textTarea = document.getElementById("inputTarea");

  var tarea = textTarea.value;

  tareas.push(tarea);

  showTastks();
}

function showTastks() {
  var text = document.querySelector(".listTitle");

  text.style.cssText = "display: block";

  var lista = document.getElementById("lista");
  var item = document.createElement("li");

  debugger; //UTIL
  tareas.forEach((tarea) => {
    item.textContent = tarea;
    lista.appendChild(item);
  });
}
