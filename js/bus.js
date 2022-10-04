const url = "https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&rttime&format=json&useBus=1"
let apiData;

fetch(url)
.then((response) => {
    //parsing data
    return response.json()
})
.then((data) => {
    //The data you wanna use
    console.log(data);
    apiData = data
})
.catch((error) => {
    //If theres an error
    console.error(error)
})
.finally(() => {
//When all is set and done
//document.querySelector('#text').innerHTML = `<p>${apiData.MultiDepartureBoard.Departure[0].name}</p>`
})
