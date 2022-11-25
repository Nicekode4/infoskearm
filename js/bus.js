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
            apiData = data.MultiDepartureBoard.Departure[index]

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
        
        let delay = " + "  + new Date(parseInt(a * 1000-b * 1000)).getSeconds()
        console.log(parseInt(b-a ));
        document.querySelector('#busSpan').innerHTML += `<p>${apiData.line}</p>
<p>${apiData.direction}</p>
<p style="padding: 0; margin: 0;">${apiData.time}<span>${delay}</span></p>`
            }

        })


}

console.log(new Date(3));