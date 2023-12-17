let urlData = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=";
const apiKey = "2918d2bb3af32e91e128131a83c301e7";

async function updateWeather(here) {
  let url = await fetch(urlData + here + `&appid=${apiKey}`);
  let data = await url.json();
  console.log(data);
}

let inputBox = document.querySelector(".input-box");
let searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", () => {
  updateWeather(inputBox.value);
});
