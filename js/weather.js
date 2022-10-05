const ApiWeather = [];

const Endpoint = "https://api.openweathermap.org/data/2.5/weather?q=Aalborg&appid=4d58d6f0a435bf7c5a52e2030f17682d&units=metric";

fetch(Endpoint)

  .then(response => {
    return response.json();
  })
  .then(WeatherData => {
    // console.log(WeatherData);
    ApiWeather.push(WeatherData);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    ApiWeather.map((obj) => {
        // console.log(obj)
        const {weather, main} = obj
        renderBusCard(weather[0], main)
    })
  });

const renderBusCard = (w, m) => {
   const {main, icon, id} = w
   const {temp} = m

    console.log(w, m)
    document.getElementById("weather").innerHTML += `
   <p>${main}</p>
   <p>${temp}</p>
   `
    
}


