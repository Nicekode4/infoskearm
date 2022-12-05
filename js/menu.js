    const url2 = 'https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?format=json'
    const STORAGE_KEY = "canteen"
    let apiData2;
    let MyArray;
    let retten;
    let idag = new Date().getDay()
    const meal = document.querySelector('#meal')
    const meal2 = document.querySelector('#meal2')
    let menu = JSON.parse(localStorage.getItem('canteen'))
    if (idag == localStorage.getItem('today')) {
        switch (idag) {
            case 1:
                retten = menu.Days[0].Dish
                MyArray = retten.split('-')
                meal.innerText = MyArray[0]
                meal2.innerText = MyArray[1]
                break;
                case 2:
                    retten = menu.Days[1].Dish
                     MyArray = retten.split('-')
                    meal.innerText = MyArray[0]
                    meal2.innerText = MyArray[1]
                    break;
                    case 3:
                        retten = menu.Days[2].Dish
                        MyArray = retten.split('-')
                       meal.innerText = MyArray[0]
                       meal2.innerText = MyArray[1]
                break;
                case 4:
                    retten = menu.Days[3].Dish
                    MyArray = retten.split('-')
                   meal.innerText = MyArray[0]
                   meal2.innerText = MyArray[1]
                break;
                case 5:
                    retten = menu.Days[4].Dish
                    MyArray = retten.split('-')
                   meal.innerText = MyArray[0]
                   meal2.innerText = MyArray[1]
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
    
    retten = apiData2.Days[idag - 1].Dish
    MyArray = retten.split('-')
   meal.innerText = MyArray[0]
   meal2.innerText = MyArray[1]
        
    }) 
    apiData2 = localStorage.getItem(STORAGE_KEY)
    } 