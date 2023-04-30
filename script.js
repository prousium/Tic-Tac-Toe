function searchWeather() {
  const apiKey = 'YOUR_API_KEY';
  const searchInput = document.getElementById('search');
  const location = document.querySelector('.location');
  const temperature = document.querySelector('.temperature');
  const weather = document.querySelector('.weather');

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=${c0ef56da102aa15c8cc4fca6f3874ebc}`)
    .then(response => response.json())
    .then(data => {
      location.textContent = data.name + ', ' + data.sys.country;
      temperature.textContent = data.main.temp + ' °C';
      weather.textContent = data.weather[0].description;
    })
    .catch(error => console.log(error));
}

