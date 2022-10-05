    const url = 'https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?format=json'
    const STORAGE_KEY = "canteen"
    let apiData;
    const meal = document.querySelector('#meal')
    let menu = JSON.parse(localStorage.getItem('canteen'))
    console.log(menu);
    
    if (today.getDay() == localStorage.getItem('today')) {
        switch (today.getDay()) {
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
 fetch(url)
    .then(response => {
        return response.json();
        //parsing our data
    })
    .then(data => {
        apiData = data  
    })
    .catch(error => {
        console.log(error);
        //On error
    })
    .finally(() => {
    localStorage.setItem('today', today.getDay())
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(apiData))
    
    meal.innerText = apiData.Days[1].Dish
        
    }) 
    apiData = localStorage.getItem(STORAGE_KEY)
    } 
