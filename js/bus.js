const url = "https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&rttime&format=json&useBus=1"
let apiData;
const via = undefined;

for (let index = 0; index < 6; index++) {
    fetch(url)
        .then((response) => {
            //parsing data
            return response.json()
        })
        .then((data) => {
            //The data you wanna use
            apiData = data.MultiDepartureBoard.Departure[index]
            console.log(apiData.rtTime);

        })
        .catch((error) => {
            //If theres an error
            console.error(error)
        })
        .finally(() => {
            //When all is set and done


if (apiData.rtTime == undefined) {
    document.querySelector('#busSpan').innerHTML += `<p>${apiData.line}</p>
<p>${apiData.direction}</p>
<p style="padding: 0; margin: 0;">${apiData.time}</p>
`

    }
    else
    {
        let a = `${apiData.rtTime}`.replace(':', '')
        let b = `${apiData.time}`.replace(':', '')
        console.log(a-b);
        let delay = " + "  + parseInt(a-b)
        document.querySelector('#busSpan').innerHTML += `<p>${apiData.line}</p>
<p>${apiData.direction}</p>
<p style="padding: 0; margin: 0;">${apiData.time}</p><span style="color: red;" >${delay}</span>`
    }
    
console.log(typeof apiData.rtTime);
        })


}
