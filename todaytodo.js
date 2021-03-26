const toTodoForm = document.querySelector(".js-todayTodo"),
    toTodoInput = toTodoForm.querySelector("input"),
    todayTodoList = document.querySelector("js-todayTOdoList");

const TOTODOS_LS = 'toTodos';

let toTodos = [];   

function deleteTotodo(event){
    const butt = event.target;
    const toli = butt.parentNode;
    todayTodoList.removeChild(toli);
    const cleantodo = toTodos.filter(function(toToDo){
        return toTodos.id !== parseInt(toli.id);
    });
    toTodos = cleantodo;
    saveTotodos();



}

function saveTotodos(){
    localStorage.setItem(TOTODOS_LS, JSON.stringify(toTodos));
}

    function paintToTodo(text){
    const toli = document.createElement("toli");
    const delButt = document.createElement("button");
    const span = document.createElement("span");
    const newId = toTodos.length+1;
    delButt.innerHTML = "😀";
    delButt.className = "toTodo_butt";
    delButt.addEventListener("click", deleteTotodo);
    span.innerText = text;
    toli.appendChild(delButt);
    toli.appendChild(span);
    toli.id = newId;
    todayTodoList.appendChild(toli);
    const toDoObj = {
        text: text,
        id: newId
    };
    toTodos.push(toDoObj);
    saveTotodos();
}


function toDoSubmit(event){
    event.preventDefault();
    const curValu = toTodoInput.value;
    paintToTodo(curValu);
    toTodoInput.value = "";

}

function loadTotodos(){
    const loadedTotoDos = localStorage.getItem(TOTODOS_LS);
    if(loadTotodos !== null){
        const parsedTotodos = JSON.parse(loadedTotoDos);
        parsedTotodo.forEach(function(toTodos) {
            paintToTodo(toToDos.text);
        });
    }
}




function init(){
    loadTotodos();
    toTodoForm.addEventListener("submit", toDoSubmit)
}

init();