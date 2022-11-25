let today = new Date();
const date = document.querySelector('#date')
const time = document.querySelector('#clock')
let year = today.getYear() + 2000 - 100
let todayDate = today.getDate()
const getTime = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(today);



function getDate() {
    switch (today.getMonth() + 1) {
        case 1:
            date.innerText = todayDate + ". Januar " + year
            break;
            case 2:
                date.innerText = todayDate + ". Febuar " + year
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
    setInterval(() => {
        today = new Date();
        console.log(today.getHours());
        if (today.getHours() < 10) {
            time.innerText = "0" + today.getHours() + "." + today.getMinutes() + "." + today.getSeconds()
        }
        if (today.getMinutes() < 10) {
            time.innerText = today.getHours() + "." + "0" + today.getMinutes() + "." + today.getSeconds()
        }
        if (today.getSeconds() < 10) {
            time.innerText =  today.getHours() + "." + today.getMinutes() + "." + "0" + today.getSeconds()
        }
    }, 1000);
}, 1000);