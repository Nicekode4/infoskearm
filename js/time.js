let today = new Date();
const date = document.querySelector('#date')
const time = document.querySelector('#clock')
let year = today.getYear() + 2000 - 100
let todayDate = today.getDate()

function getDate() {
    switch (today.getMonth() + 1) {
        case 1:
            date.innertext = todayDate + ". Januar " + year
            break;
            case 2:
                date.innertext = todayDate + ". Febuar " + year
                break;
                case 3:
                    date.innertext = todayDate + ". Marts " + year
                    break;
                    case 4:
                        date.innertext = todayDate + ". April " + year
                        break;
                        case 5:
                            date.innertext = todayDate + ". Maj " + year
                            break;
                            case 6:
                                date.innertext = todayDate + ". Juni " + year
                                break;
                                case 7:
                                    date.innertext = todayDate + ". Juli " + year
                                    break;
                                    case 8:
                                        date.innertext = todayDate + ". August " + year
                                        break;
                                        case 9:
                                            date.innertext = todayDate + ". September " + year
                                            break;
                                            case 10:
                                                date.innertext = todayDate + ". Oktober " + year
                                                break;
                                                case 11:
                                                    date.innertext = todayDate + ". November " + year
                                                    break;
                                                    case 12:
                                                        date.innertext = todayDate + ". December " + year
                                                        break;
    
        default:
            date.innertext = "Kan ikke hente dato..."
            break;
    }
}

setInterval(() => {
    today = new Date();
    time.innertext = today.getHours() + "." + today.getMinutes() + "." + today.getSeconds()
}, 1000);