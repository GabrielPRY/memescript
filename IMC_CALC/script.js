//ejecuta la función cuando se cargue toda la página web
window.onload = iniciar;

function iniciar() {
  var btn = document.getElementById("btn_calcular");
  btn.addEventListener("click", clickButton);
}

function clickButton() {
  var peso = document.getElementById("txt_Peso");
  var peso_value = peso.value;
  var altura = document.getElementById("txt_Altura");
  var altura_value = altura.value;
  var result = document.getElementById("txt_IMC");

  var IMC = peso_value / (altura_value * altura_value);

  //   alert("SU IMC es: " + Math.round(IMC));

  result.innerHTML = "Su IMC es: " + Math.round(IMC);
}
