window.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  
  const apiKey = 'YOUR_API_KEY';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=São Paulo&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherContainer = document.getElementById('weather-container');
      weatherContainer.innerHTML = '';

      const city = data.name;
      const temperature = data.main.temp;
      const description = data.weather[0].description;

      const cityElement = document.createElement('h3');
      cityElement.textContent = `Cidade: ${city}`;

      const temperatureElement = document.createElement('p');
      temperatureElement.textContent = `Temperatura: ${temperature} °C`;

      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = `Descrição: ${description}`;

      weatherContainer.appendChild(cityElement);
      weatherContainer.appendChild(temperatureElement);
      weatherContainer.appendChild(descriptionElement);
    })
    .catch(error => {
      console.log('Ocorreu um erro:', error);
      const weatherContainer = document.getElementById('weather-container');
      weatherContainer.innerHTML = '<h3>Erro ao obter a previsão do tempo.</h3>';
    });
}
