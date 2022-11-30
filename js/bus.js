const url = "https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&rttime&format=json&useBus=1"
let apiData;
let DaDate = "11:00"

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
<p style="padding: 0; margin: 0;">${apiData.time}
`

    }
    else
    {

        let a = unixConvert(apiData.rtTime)
    
        let b = unixConvert(apiData.time)
        console.log(b);

        let delay = " + "  + new Date(parseInt(a * 1000-b * 1000)).getMinutes()
        document.querySelector('#busSpan').innerHTML += `<p>${apiData.line}</p>
        
<p>${apiData.direction}</p>
<p style="padding: 0; margin: 0;">${apiData.time}<span>${delay}</span></p>`
            }

        })

        function unixConvert(time) {
            const dateStr = `1970-01-01 ${time}`;

            const date = new Date(dateStr);
            console.log(date); // 👉️ Wed Jun 22 2022
            
            const timestampInMs = date.getTime();
            
            const unixTimestamp = Math.floor(date.getTime() / 1000);
            console.log(unixTimestamp);
            return unixTimestamp
        }

}
