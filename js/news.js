const newsAPI = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.dr.dk%2Fnyheder%2Fservice%2Ffeeds%2Fallenyheder%23";
let newsData;

// getNews()
// setInterval(() => { getNews() }, 1000 * 60);
setTimeout(() => {
	document.location.reload();
}, 1000 * 60 * 10);

for (let index = 0; index < 7; index++) {
	fetch(newsAPI)
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			console.log(data);
			newsData = data.items[index]
		})
		.catch((error) => {
			console.error(error)
		})
		.finally(() => {

			document.querySelector('#newsM').innerHTML += `<h4>${newsData.title}</h4>
	`
		})
}


