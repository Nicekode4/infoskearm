const root = document.getElementById("schedule");
const max_activities = 20;
let count = 0
const refreshInterval = 3600000 //1 Hour
let timeStr;
let currentTimes = new Date()
let apidata = []
let tableData = []

//The teams that should not be shown on infoboard
const Teams = [
  "gel080322", //Elektriker
  "htxb21", //HTX
  "gsm010123", //Smed 
  "ltm010123e" // Brobyg Teknisk
];
const apiEndPoint =
  "https://iws.itcn.dk/techcollege/Schedules?departmentCode=smed";

  fetch(apiEndPoint)
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    apidata = data.value
    apidata.sort((a, b) => {
      let aDate = new Date(a.StartDate).getHours()
      let bDate = new Date(b.StartDate).getHours()
return  aDate - bDate
    })
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  setTimeout(() => {
    getSchedule()  
  }, 1000);

  interval = setInterval(() => {
    getSchedule()
  }, refreshInterval);
function getSchedule() {
  apidata.forEach(element => {
      
    let DaDate = new Date(element.StartDate)
    let hourOfClass = unixConvert(DaDate) * 1000
    if (DaDate.getHours() > currentTimes.getHours() - 1 && DaDate.getHours() < currentTimes.getHours() + 3 && DaDate.getDate() === currentTimes.getDate()) {
      if (!Teams.includes(element.Team)) {
        if (count <= max_activities) {
          TheTime(element.StartDate)
          root.innerHTML += `
        <p>${timeStr}</p>
        <p>${element.Education}</p>
        <p>${element.Subject}</p>
        <p>${element.Room}</p>
        <p>${element.Team}</p>
        `
        count++
      } else {
        
      }
      }
      }

      })
}

  function unixConvert(time) {
    const dateStr = `${time}`;

    const date = new Date(dateStr);
    
    const timestampInMs = date.getTime();
    
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    return unixTimestamp
}

function TheTime(currentTime) {
  currentTime = new Date(currentTime)
  if (currentTime.getHours() < 10) {
  timeStr = "0" + currentTime.getHours() + "." + currentTime.getMinutes()
}
else
{
  timeStr = currentTime.getHours() + "." + currentTime.getMinutes() 
}
if (currentTime.getMinutes() < 10) {
  timeStr = currentTime.getHours() + "." + "0" + currentTime.getMinutes()
}
else
{
  timeStr = currentTime.getHours() + "." + currentTime.getMinutes() 
}

return timeStr
}