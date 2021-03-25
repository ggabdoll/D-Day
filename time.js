const toClock = document.querySelector(".js-time",".time__text");

function getClock(){
    const tod = new Date();
    const hours = tod.getHours();
    const minutes = tod.getMinutes();
    const clock =`${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes}`;
    toClock.innerHTML = clock;
    return;
}



function init(){
    getClock();
    setInterval(getDate,1000);
    return;
}

init();