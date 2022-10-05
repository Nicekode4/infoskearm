const ApiWeather = [];
const containerMain = document.querySelector('#container-main')
const Endpoint = "https://api.openweathermap.org/data/2.5/weather?q=Aalborg&lang=da&appid=4d58d6f0a435bf7c5a52e2030f17682d&units=metric";
console.log(document.getElementById("weather"));
fetch(Endpoint)

  .then(response => {
    return response.json();
  })
  .then(WeatherData => {
    WeatherRN = WeatherData.weather[0].description
    TempRN = WeatherData.main.temp
    id = WeatherData.weather[0].id
    console.log(id);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
   
    if(id >= 200 && id <= 232) {
      document.getElementById("weatherImg").src = "../Ikoner/cloud-thunder.svg";
        console.log("Torden");
    }else if(id >= 300 && id <= 321) {
      console.log("Støv regn");
    }else if(id >= 500 && id <= 531) {
      console.log("Regn");
    }else if(id >= 600 && id <= 622) {
      console.log("Sne");
    }else if(id >= 701 && id <= 781) {
      console.log("Tåget");
    }else if(id == 800) {
      console.log("Skyfrit");
    }else if(id >= 801 && id <= 804) {
      console.log("Skyet");
    }else {
        console.log("Intet vejr idag");
    }
    document.getElementById("weatherSpan").innerHTML += `
   <p>${WeatherRN}</p>
   <p>${Math.round(TempRN)}°</p>`  
    })




    