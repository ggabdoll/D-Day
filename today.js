const today = document.querySelector(".js-today",".today__text");

function getDate(){
    const tod = new Date();
    const month = tod.getMonth();
    const day = tod.getDate();
    const todtext =`${month}  ${day < 10 ? `0${day}` : day}`;
    today.innerHTML = todtext;
    return;
}



function init(){
    getDate();
    setInterval(getDate,100000);
    return;
}

init();