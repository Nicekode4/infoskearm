const root = document.getElementById("schedule");
const max_activities = 8;
let count = 0
let timeStr;
const upDatePage = 1000;
let currentTimey = new Date()
let apidata = []
const Teams = [
  "h0mg100122",
  "gwe080122",
  "biw100522",
  "Grafisk Tekniker",
  "Grafisk teknik.",
  "Mediegrafiker",
  "Webudvikler"
];
const apiEndPoint =
  "https://iws.itcn.dk/techcollege/Schedules?departmentCode=smed";

  fetch(apiEndPoint)
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    apidata = data.value
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  setTimeout(() => {
    console.log(apidata);
    apidata.forEach(element => {
      
      let DaDate = new Date(element.StartDate)
      let hourOfClass = unixConvert(DaDate) * 1000
      let currentTimes = new Date()
      if (DaDate.getHours() >= currentTimes.getHours() && DaDate.getHours() + 1 >= currentTimes.getHours() && DaDate.getDay() === currentTimes.getDay()) {
        if (count <= max_activities) {
          console.log(TheTime(element.StartDate));
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
        
    });
  }, 1000);

  function unixConvert(time) {
    const dateStr = `${time}`;

    const date = new Date(dateStr);
    
    const timestampInMs = date.getTime();
    
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    return unixTimestamp
}

function TheTime(currentTime) {
  currentTime = new Date(currentTime)
  console.log(currentTime);
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

