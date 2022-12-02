    const url2 = 'https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?format=json'
    const STORAGE_KEY = "canteen"
    let apiData2;
    let idag = new Date().getDay()
    const meal = document.querySelector('#meal')
    let menu = JSON.parse(localStorage.getItem('canteen'))
    if (idag == localStorage.getItem('today')) {
        switch (idag) {
            case 1:
                meal.innerText = menu.Days[0].Dish
                break;
                case 2:
                    meal.innerText = menu.Days[1].Dish
                    break;
                    case 3:
                meal.innerText = menu.Days[2].Dish
                break;
                case 4:
                meal.innerText = menu.Days[3].Dish
                break;
                case 5:
                meal.innerText = menu.Days[4].Dish
                break;
        
            default:
                
                break;
        }
    } 
    else
    {
 fetch(url2)
    .then(response => {
        return response.json();
        //parsing our data
    })
    .then(data => {
        apiData2 = data  
    })
    .catch(error => {
        console.log(error);
        //On error
    })
    .finally(() => {
    localStorage.setItem('today', idag)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(apiData2))
    
    meal.innerText = apiData2.Days[idag - 1].Dish
        
    }) 
    apiData2 = localStorage.getItem(STORAGE_KEY)
    } 