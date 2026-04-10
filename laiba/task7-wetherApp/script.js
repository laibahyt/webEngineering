async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("result");
  const loadingText = document.getElementById("loading");

  const apiKey = "7c088ef4c282679b0fcd83881466fe9c";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},PK&appid=${apiKey}&units=metric`;

  try {
    if (city === "") {
      resultDiv.innerHTML = `<p style="color:red;">Please enter a city name</p>`;
      return;
    }

    loadingText.innerText = "⏳ Loading...";
    resultDiv.innerHTML = "";

    const response = await fetch(url);
    const data = await response.json();

    console.log(data); // 👈 for debugging

    if (data.cod != 200) {
      throw new Error(data.message);
    }

    loadingText.innerText = "";

    resultDiv.innerHTML = `
      <h3> ${data.name}</h3>
      <p> Temperature: ${data.main.temp} °C</p>
      <p> Condition: ${data.weather[0].description}</p>
      <p> Humidity: ${data.main.humidity}%</p>
      <p> Wind: ${data.wind.speed} m/s</p>
    `;
    
  } catch (error) {
    loadingText.innerText = "";
    resultDiv.innerHTML = `<p style="color:red;">❌ ${error.message}</p>`;
  }
}