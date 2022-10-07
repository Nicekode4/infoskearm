let timeout = 200;
const Endpoint = "https://api.openweathermap.org/data/2.5/weather?q=Aalborg&lang=da&appid=4d58d6f0a435bf7c5a52e2030f17682d&units=metric";
fetch(Endpoint)

  .then(response => {
    return response.json();
  })
  .then(WeatherData => {
    WeatherRN = WeatherData.weather[0].description
    TempRN = WeatherData.main.temp
    id = WeatherData.weather[0].id
    //id = 800;
    console.log(id);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
  
    if(id >= 200 && id <= 232) { //Torden
      $().ready(function() {
        $('#container-main').tubular({videoId: '0gUdnXIvW30', ratio: 16/9, repeat: true, start: 0, wrapperZIndex: 99}); // where idOfYourVideo is the YouTube ID.
      });
      setTimeout(() => {
        if (document.querySelectorAll("iframe").length == 0) {
          location.reload();
        }
      }, timeout);
      document.getElementById("weatherImg").src = "../Ikoner/cloud-thunder.svg";
        console.log("Torden");

    }else if(id >= 300 && id <= 321) { //Støv regn
      document.getElementById("weatherImg").src = "../Ikoner/cloud-rain.svg";
      $().ready(function() {
        $('#container-main').tubular({videoId: 'C91ZhAzfW80', ratio: 16/9, repeat: true, start: 0, wrapperZIndex: 99}); // where idOfYourVideo is the YouTube ID.
      });
      setTimeout(() => {
        if (document.querySelectorAll("iframe").length == 0) {
          location.reload();
        }
      }, timeout);
      console.log("Støv regn");

    }else if(id >= 500 && id <= 531) { //Regn
      document.getElementById("weatherImg").src = "../Ikoner/cloud-rain.svg";
      $().ready(function() {
        $('#container-main').tubular({videoId: 'C91ZhAzfW80', ratio: 16/9, repeat: true, start: 0, wrapperZIndex: 99}); // where idOfYourVideo is the YouTube ID.
      });
      setTimeout(() => {
        if (document.querySelectorAll("iframe").length == 0) {
          location.reload();
        }
      }, timeout);
      console.log("Regn");

    }else if(id >= 600 && id <= 622) { //Sne
      document.getElementById("weatherImg").src = "../Ikoner/cloud-snow.svg";
      $().ready(function() {
        $('#container-main').tubular({videoId: 'uECDlpXNHaE', ratio: 16/9, repeat: true, start: 0, wrapperZIndex: 99}); // where idOfYourVideo is the YouTube ID.
      });
      setTimeout(() => {
        if (document.querySelectorAll("iframe").length == 0) {
          location.reload();
        }
      }, timeout);
      console.log("Sne");

    }else if(id >= 701 && id <= 781) { //Tåget
      document.getElementById("weatherImg").src = "../Ikoner/cloud.svg";
      $().ready(function() {
        $('#container-main').tubular({videoId: 'j5luIk4sJ9Q', ratio: 16/9, repeat: true, start: 0, wrapperZIndex: 99}); // where idOfYourVideo is the YouTube ID.
      });
      setTimeout(() => {
        if (document.querySelectorAll("iframe").length == 0) {
          location.reload();
        }
      }, timeout);
      console.log("Tåget");

    }else if(id == 800) { //Skyfrit
      document.getElementById("weatherImg").src = "../Ikoner/cloud-sun.svg";
      $().ready(function() {
        $('#container-main').tubular({videoId: 'kpG7NzIeOuI', ratio: 16/9, repeat: true, start: 0, wrapperZIndex: 99}); // where idOfYourVideo is the YouTube ID.
      });
      setTimeout(() => {
        if (document.querySelectorAll("iframe").length == 0) {
          location.reload();
        }
      }, timeout);
      console.log("Skyfrit");

    }else if(id >= 801 && id <= 804) { //Skyet
      document.getElementById("weatherImg").src = "../Ikoner/cloud.svg";
      $().ready(function() {
        $('#container-main').tubular({videoId: 'j5luIk4sJ9Q', ratio: 16/9, repeat: true, start: 0, wrapperZIndex: 99}); // where idOfYourVideo is the YouTube ID.
      });
      setTimeout(() => {
        if (document.querySelectorAll("iframe").length == 0) {
          location.reload();
        }
      }, timeout);
      
      console.log("Skyet");
    }else {
        console.log("Intet vejr idag");
    }
    document.getElementById("weatherSpan").innerHTML += `
   <p>${WeatherRN}</p>
   <p>${Math.round(TempRN)}°C</p>`  
    })




    