const clock =document.querySelector(".js-clock .clock__text");

function getTime(){
    const now = new Date();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const time = `${hours < 10 ? `0${hours}` : hours }:${
        minutes < 10 ? `0${minutes}` : minutes }`;
    clock.innerHTML = time;
    return;
    
}

function init(){
    getTime();
    setInterval(getTime,1000);
    return;
}

init();