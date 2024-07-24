const times = "19:05:45PM";

timeConversion(times);

// converter a hora de (AM -> PM) e (PM -> AM) 07:05:45PM  / 19:05:45
function timeConversion(s) {
   
    let lastTwo = s.substring(10);

    let fullTimes = s.substring(0, 8);
    let times = fullTimes.split(":");

    if(lastTwo === "PM"){
        // formatar a hora para pm
        if(times[0] !== 12){
            times[0] = parseInt(times[0] + 12)
        }
    }else{
        if(times[0] === "12"){
            times[0] = "00"
        }
    }

    return times.join(":");
 }

