const today = document.querySelector(".js-today",".today__text");

function getDate(){
    const totime = new Date();
    
    var monthName = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug",
                              "Sep","Oct","Nov","Dec");
    const month = monthName[totime.getMonth()];

    

    
    var wekenName = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const wekends = wekenName[totime.getDay()];
     

    
    const day = totime.getDate();
    
     const todtext =`${month}  ${day < 10 ? `0${day}` : day} [${wekends}]`;
        today.innerHTML = todtext;
        
        return;
    }

    function init(){
    getDate();
    setInterval(getDate,360000000000);
    return;
}

init();
