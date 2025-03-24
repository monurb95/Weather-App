// script.js
const API_KEY = "99f00fd1775874428c4457612abe5f9d";

document.getElementById("getWeather").addEventListener("click", async () => {
  const city = document.getElementById("city").value;
  const weatherResult = document.getElementById("weatherResult");

  if (!city) {
    weatherResult.innerText = "Please enter a city.";
    return;
  }

  weatherResult.innerText = `Fetching weather for ${city}...`;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    const temp = data.main.temp;
    const weather = data.weather[0].description;

    weatherResult.innerText = `Weather in ${city}: ${weather}, ${temp}°C.`;
  } catch (error) {
    weatherResult.innerText = "Error fetching weather. Please try again.";
  }
});
