let today = new Date();
const date = document.querySelector('#date')
const time = document.querySelector('#clock')
let year = today.getYear() + 2000 - 100
let todayDate = today.getDate()

function getDate() {
    switch (today.getMonth() + 1) {
        case 1:
            date.innerText = todayDate + ". Januar " + year
            break;
            case 2:
                date.innerText = todayDate + ". Februar " + year
                break;
                case 3:
                    date.innerText = todayDate + ". Marts " + year
                    break;
                    case 4:
                        date.innerText = todayDate + ". April " + year
                        break;
                        case 5:
                            date.innerText = todayDate + ". Maj " + year
                            break;
                            case 6:
                                date.innerText = todayDate + ". Juni " + year
                                break;
                                case 7:
                                    date.innerText = todayDate + ". Juli " + year
                                    break;
                                    case 8:
                                        date.innerText = todayDate + ". August " + year
                                        break;
                                        case 9:
                                            date.innerText = todayDate + ". September " + year
                                            break;
                                            case 10:
                                                date.innerText = todayDate + ". Oktober " + year
                                                break;
                                                case 11:
                                                    date.innerText = todayDate + ". November " + year
                                                    break;
                                                    case 12:
                                                        date.innerText = todayDate + ". December " + year
                                                        break;
    
        default:
            date.innerText = "Kan ikke hente dato..."
            break;
    }
}
getDate()

setInterval(() => {
    today = new Date();
    if (today.getHours() < 10) {
        time.innerText = "0" + today.getHours() + "." + today.getMinutes()
    }
    else
    {
        time.innerText = today.getHours() + "." + today.getMinutes() 
    }
    if (today.getMinutes() < 10) {
        time.innerText = today.getHours() + "." + "0" + today.getMinutes()
    }
    else
    {
        time.innerText = today.getHours() + "." + today.getMinutes() 
    }
}, 1000);