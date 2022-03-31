window.onload = iniciar;

function iniciar() {
  document.querySelector(".input-fecha").valueAsDate = new Date();
  let btn = document.querySelector(".btn-cargar");
  btn.addEventListener("click", clickButton);
}

async function clickButton() {
  let country = document.querySelector(".select-pais").value;
  let date = document.querySelector(".input-fecha").value;
  let url = `https://api.covid19tracking.narrativa.com/api/${date}/country/${country}`;
  let json = await cargarURL(url);
  let stats = json.dates[date].countries[country];
  document.querySelector("#today_confirmed").innerHTML =
    new Intl.NumberFormat().format(stats.today_confirmed);
  document.querySelector("#today_deaths").innerHTML =
    new Intl.NumberFormat().format(stats.today_deaths);
  if (stats.today_intensive_care == undefined) {
    document.querySelector("#today_intensive_care").innerHTML = "0";
  } else {
    document.querySelector("#today_intensive_care").innerHTML =
      new Intl.NumberFormat().format(stats.today_intensive_care);
  }

  document.querySelector("#today_new_recovered").innerHTML =
    new Intl.NumberFormat().format(stats.today_new_recovered);
  document.querySelector("#today_new_confirmed").innerHTML =
    new Intl.NumberFormat().format(stats.today_new_confirmed);
  document.querySelector("#today_new_deaths").innerHTML =
    new Intl.NumberFormat().format(stats.today_new_deaths);
}

async function cargarURL(url) {
  let response = await fetch(url);
  return response.json();
}
