const toDoForms = document.querySelector(".js-todayTodo"),
    toDoInputs = toDoForms.querySelector("input");
    toDoLists = document.querySelector(".js-todayTOdoList");

const TODOS_LSS = 'toDoss';

let toDoss = [];   

function deleteToDos(event){
    const btns = event.target;
    const lis = btns.parentNode;
    toDoLists.removeChild(lis);
    const cleanToDoss = toDoss.filter(function(toDos){
        return toDos.id !== parseInt(lis.id);
    });
    toDoss = cleanToDoss;
    saveTodoss();



}

function saveToDoss(){
    localStorage.setItem(TODOS_LSS, JSON.stringify(toDoss));
}

    function paintToDos(text){
    const lis = document.createElement("li");
    const delBtns = document.createElement("button");
    const spans = document.createElement("span");
    const newIds = toDoss.length+1;
    delBtns.innerHTML = "😀";
    delBtns.className = "toDo_btns";
    delBtns.addEventListener("click", deleteToDos);
    spans.innerText = text;
    lis.appendChild(delBtns);
    lis.appendChild(spans);
    lis.id = newIds;
    toDoLists.appendChild(lis);
    const toDoObj = {
        text: text,
        id: newIds
    };
    toDoss.push(toDoObj);
    saveToDoss();
}


function handleSubmits(event){
    event.preventDefaudolt();
    const currentValues = toDoInputs.value;
    paintToDos(currentValues);
    toDoInputs.value = "";

}

function loadToDoss(){
    const loadedToDoss = localStorage.getItem(TODOS_LSS);
    if(loadToDoss !== null){
        const parsedToDoss = JSON.parse(loadedToDoss);
        parsedToDoss.forEach(function(toDos) {
            paintToDos(toDos.text);
        });
    }
}




function init(){
    loadToDoss();
    toDoForms.addEventListener("submit", handleSubmits)
}

init();