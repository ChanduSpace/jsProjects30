let urlData = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "2918d2bb3af32e91e128131a83c301e7";

async function updateWeather(here) {
  let url = await fetch(urlData + here + `&appid=${apiKey}`);
  let data = await url.json();

  if (data.cod === "404") {
    document.querySelector(".error-msg").classList.remove("tab");
  } else {
    document.querySelector(".error-msg").classList.add("tab");
    document.querySelector(".weather h1").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".weather h2").innerHTML = data.name;
    document.querySelector(".hum-val").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-val").innerHTML = data.wind.speed + "kmph";
    document.querySelector(".weather").classList.remove("tab");
  }
}

let inputBox = document.querySelector(".input-box");
let searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", () => {
  updateWeather(inputBox.value);
});
