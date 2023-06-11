setInterval(() => {
    let dateTime = new Date();
    let day = ''
    let hour = dateTime.getHours();
    let minute = dateTime.getMinutes();
    let second = dateTime.getSeconds();
    let dayOfWeek = ()=>{ 
        switch (dateTime.getDay()) {
            case 0:
                day = "Sunday"
                break;
            case 1:
                day = "Monday"
                break;
            case 2:
                day = "Tuesday"
                break;
            case 3:
                day = "Wednesday"
                break;
            case 4:
                day = "Thursday"
                break;
            case 5:
                day = "Friday"
                break;
            case 6:
                day = "Saturday"
                break;
            default:
            break;
        }
    }
    dayOfWeek();

    monthName = ()=>{
        switch (1+dateTime.getMonth()) {
            case 01:
                month = "Janurary";
                break;
            case 02:
                month = "February";
                break;
            case 03:
                month = "March";
                break;
            case 04:
                month = "April";
                break;
            case 05:
                month = "May";
                break;
            case 06:
                month = "June";
                break;
            case 07:
                month = "July";
                break;
            case 08:
                month = "August";
                break;
            case 09:
                month = "September";
                break;
            case 10:
                month = "October";
                break;
            case 11:
                month = "November";
                break;
            case 12:
                month = "December";
                break;
        
            default:
                break;
        }
    }
    monthName();

    date = dateTime.getDate();
    year = dateTime.getFullYear();
    am_pm = "";
    
    
    if (hour > 11) {
      hour -= 12;
      am_pm = "P.M";
    }
    if (hour == 0) {
      hour = 12;
      am_pm = "A.M";
    }


    date = date < 10 ? "0" + date : date;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    document.querySelector(".currentDate").innerHTML=`${date} ${month},${year}`
    document.querySelector(".dayOnDate").innerHTML=day
    document.querySelector(".Cur_time").innerHTML=`${hour}:${minute}:${second} ${am_pm}`

}, 1000);
