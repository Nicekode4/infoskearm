    const url = 'https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?format=json'
    const STORAGE_KEY = "canteen"
    let apiData;
    const meal = document.querySelector('#meal')


    if (today.getDay() == localStorage.getItem('today')) {
    meal.innerText = localStorage.getItem(STORAGE_KEY).Days[0].Dish
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
        localStorage.setItem(STORAGE_KEY, data)   
        apiData =  localStorage.getItem(STORAGE_KEY)
        meal.innerText = apiData.Days[1].Dish
            
        })  
    } 
    

        setTimeout(() => {
           switch (today.getDay()) {
                case 1:
                    meal.innerText = apiData.
                    break;
                    case 2:
                        meal.innerText = apiData.Days[1].Dish
                        break;
                        case 3:
                    meal.innerText = apiData.Days[2].Dish
                    break;
                    case 4:
                    meal.innerText = apiData.Days[3].Dish
                    break;
                    case 5:
                    meal.innerText = apiData.Days[4].Dish
                    break;
            
                default:
                    break;
            }
        }, 500);
        