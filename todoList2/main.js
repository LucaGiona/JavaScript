const form = document.querySelector("#new-todo-form")
const toDoInput = document.querySelector("#todo-input")
const list = document.querySelector("#list")
const template = document.querySelector("#list-item-template");

const LOCAL_STORAGE_PREFIX = "ADVANCED-TODO-LIST"
const TODOS_STORAGE_KEY= `${LOCAL_STORAGE_PREFIX}-todos`
let  todos = loadTodos();
todos.forEach(renderTodo)

list.addEventListener("change", e=> {
  if (!e.target.matches("[data-list-item-checkbox]")) return;

  //get todo that is clicked on
  const parent = e.target.closest(".list-item");
  const todoId = parent.dataset.todoId;
  const todo = todos.find(t => t.id === todoId);
  todo.complete = e.target.checked
  saveTodos()
})

list.addEventListener("click", e =>{
 if (!e.target.matches("[data-button-delete]")) return

 const parent = e.target.closest(".list-item")
 const todoId = parent.dataset.todoId

 parent.remove()
 todos.filter(todo => todo.id !== todoId)
 saveTodos()
})

//Add todos
//user will type in todo and click add todo - this should then add the todo to the list
form.addEventListener("submit", e => {
 e.preventDefault()

 const todoName = toDoInput.value
 if( todoName === "") return
 const newTodo = {
  name: todoName,
  complete: false,
  id: new Date().valueOf().toString()
 }
 todos.push(newTodo)
 //render todo (kann in einer funktion aufgehoben werden oder eben als Kommentar)
renderTodo(newTodo)
saveTodos()
 toDoInput.value = ""; //löscht dann wieder das Inpitfeld
})

function renderTodo(todo){
const templateClone = template.content.cloneNode(true)
const listItem = templateClone.querySelector(".list-item")
listItem.dataset.todoId = todo.id
const textElement = templateClone.querySelector("[data-list-item-text]");
textElement.innerText = todo.name
const checkbox = templateClone.querySelector("[data-list-item-checkbox]");
checkbox.checked = todo.complete
list.appendChild(templateClone)

}

//delete todos
//complete todos

//Load todos
function loadTodos(){
 const todoString = localStorage.getItem(TODOS_STORAGE_KEY)
 return JSON.parse(todoString) || []
}
//Save todoos

function saveTodos(){
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
}


