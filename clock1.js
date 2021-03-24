const clocks =document.querySelector(".js-clock1 .clock_text");

function getTimes(){
    const nows = new Date();
    const minutess = nows.getMinutes();
    const hourss = nows.getHours();
    const times = `${hourss < 10 ? `0${hourss}` : hourss }:${
        minutess < 10 ? `0${minutess}` : minutess }`;
    clocks.innerHTML = times;
    return;
    
}

function init(){
    getTimes();
    setInterval(getTimes,1000);
    return;
}

init();