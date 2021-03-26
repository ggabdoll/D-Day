const toTodoForm = document.querySelector(".js-todayTodo"),
    toTodoInput = toTodoForm.querySelector("input"),
    todayTodoList = document.querySelector("js-todayTOdoList");

let toTodos = [];   

function deleteTotodo(event){
    const butt = event.target;
    const toli = butt.parentNode;
    todayTodoList.removeChild(toli);
    const cleantodo = toTodos.filter(function(toToDo){
        return toTodos.id !== parseInt(toli.id);
    });
    toTodos = cleantodo;
    

}

    function paintToTodo(text){
    const toli = document.createElement("toli");
}


function toDoSubmit(event){
    event.preventDefault();
    const curValu = toTodoInput.value;

}




function init(){

}

init();