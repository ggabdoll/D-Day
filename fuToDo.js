const forms = document.querySelector(".js-futureTodo"),
  inputs = document.querySelector(".js-addFToDo"),
  lists = document.querySelector(".js-futureTodoList");

let toDoss = [];

function persistToDoss() {
  const stringToDos = JSON.stringify(toDoss);
  localStorage.setItem("toDoss", stringToDos);
}

function saveToDos(text) {
  const toDoObjects = {
    id: toDoss.length + 1,
    value: text
  };
  toDoss.push(toDoObjects);
  persistToDoss();
}

function handleDeletes(event) {
  const targets = event.target;
  const lis = targets.parentElement;
  const uls = lis.parentElement;
  const toDoIds = lis.id;
  uls.removeChild(lis);
  toDoss = toDoss.filter(function(toDos) {
    return toDos.id !== parseInt(toDoIds);
  });
  persistToDoss();
}

function addToDos(text) {
  const toDos = document.createElement("li");
  toDos.className = "toDo";
  toDos.id = toDoss.length + 1;
  const deleteBtns = document.createElement("span");
  deleteBtns.innerHTML = "😀";
  deleteBtns.className = "toDo__button";
  deleteBtns.addEventListener("click", handleDeletes);
  const labels = document.createElement("label");
  labels.innerHTML = text;
  toDos.appendChild(deleteBtns);
  toDos.appendChild(labels);
  lists.appendChild(toDos);
  saveToDos(text);
}

function onSubmits(event) {
  event.preventDefault();
  const values = inputs.value;
  inputs.value = "";
  addToDos(values);
}

function loadToDoss() {
  const loadedToDoss = localStorage.getItem("toDoss");
  if (loadedToDoss !== null) {
    const parsedToDoss = JSON.parse(loadedToDoss);
    parsedToDoss.forEach(function(toDos) {
      addToDos(toDos.value);
    });
  }
  return;
}

function init() {
  loadToDoss();
}

forms.addEventListener("submit", onSubmits);

init();