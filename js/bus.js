const url = "https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&rttime&format=json&useBus=1"
let apiData;

for (let index = 0; index < 6; index++) {
    fetch(url)
        .then((response) => {
            //parsing data
            return response.json()
        })
        .then((data) => {
            //The data you wanna use
            console.log(data);
            apiData = data.MultiDepartureBoard.Departure[index]

        })
        .catch((error) => {
            //If theres an error
            console.error(error)
        })
        .finally(() => {
            //When all is set and done
            document.querySelector('#bus').innerHTML += `<p>${apiData.line}</p>
<p>${apiData.direction}</p>
<p>${apiData.time}</p>
`
        })


}
