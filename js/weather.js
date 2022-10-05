const ApiWeather = [];
const containerMain = document.querySelector('#container-main')
const Endpoint = "https://api.openweathermap.org/data/2.5/weather?q=Aalborg&lang=da&appid=4d58d6f0a435bf7c5a52e2030f17682d&units=metric";

fetch(Endpoint)

  .then(response => {
    return response.json();
  })
  .then(WeatherData => {
    WeatherRN = WeatherData.weather[0].description
    TempRN = WeatherData.main.temp
    id = WeatherData.weather[0].id
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    switch (id) {
      case "clouds":
        containerMain.style.backgroundImage="url()";
      break;
    
      case id > 200:
    "thunder"
      break;
    
      case id > 300:
        "drizzle"
      break;
    
      case id > 500:
        "rain"
      break;

      case id > 600:
        "snow"
        break;
        case id > 700:
          "tåget"
          break;
          case 800:
            "skyfrit"
            break;
            case id > 801:
              "Clouds"
              break;
    }
    document.getElementById("weather").innerHTML += `
   <p>${WeatherRN}</p>
   <p>${Math.round(TempRN)}</p>`  
    })




