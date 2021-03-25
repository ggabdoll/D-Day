const today = document.querySelector(".js-time",".time__text");

function getClock(){
    const tod = new Date();
    const hours = tod.getHours();
    const minutes = tod.getMinutes();
    const clock =`${hours}.${minutes < 10 ? `0${minutes}` : minutes}`;
    today.innerHTML = clock;
    return;
}



function init(){
    getClock();
    setInterval(getDate,100000);
    return;
}

init();