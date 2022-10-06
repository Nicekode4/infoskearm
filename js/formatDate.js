export const formatDate = (d, val) => {

    // property val holds the string used to find what way
    // to show our date in the switch below*/
    // ternary choose new Date(d) if the property d is not undefined */
    
    let date = d ? new Date(d) : new Date();
    
    //two ways of formatinng dates
    //formating what you weant to use as options
    //const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    //the pass those options to toLocaeDateString with a country code
    //console.log(date.toLocaleDateString('da-DK', options));
    
    const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    };
    
    const toLocale = date.toLocaleDateString("da-DK", options);
    
    // It is also possible to design your own way to show dates
    // getFullYear(), getDay(), getMonth() and so on are build in functions.
    // they let you create your own way of showing dates.
    
    let Year = date.getFullYear();
    // gives the number of the month */
    let monthNum = date.getMonth();
    // gives the number of the day, sunday is day 0, monday day 1, and so on*/
    let dayNum = date.getDay();
    // Gives the day in the month getDate() */
    let DateOfMonth = date.getDate();
    // Gives the hour according to the timestamp _/
    let Hours = createPrefix(date.getHours());
    
    // Gives the minute according to the timestamp _/
    let minute = createPrefix(date.getMinutes());
    
    // Gives the seconds according to the timestamp _/
    let seconds = createPrefix(date.getSeconds());
    
    // create an array of day names */
    let days = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
    // create an array of month names */
    let months = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
    
    switch (val) {
    default:
    break;
    case "year":
    return Year;
    
        case "time":
          return Hours + ":" + minute;
        case "hour":
            return Hours;
        case "day":
          return days[dayNum];
        case "month":
          return months[monthNum];
    
        case "Date":
          return DateOfMonth;
    
        case "tolocale":
          return toLocale;
    
    }};
    
    const createPrefix = (x) => {
    // the prefix is used in case you want to give a clean visible look on
    // your time there is hours minutes and second that start by single digits. 1 to 9.
    // so without any prefix a typical time would look like this
    // seven minutes and 3 seconds past midnight
    // 0:7:3
    
    return x <= 9 ? "0" + x : x;
    };