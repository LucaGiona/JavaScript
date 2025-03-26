const listContainer = document.querySelector("[data-lists]");  
// data Atrribut wird im Html angehängt
const newListForm = document.querySelector("[data-new-list-form]");
const newListInput = document.querySelector("[data-new-list-input]");
const deleteListButton = document.querySelector("[data-delete-list-button]");

const listDisplayContainer = document.querySelector("[data-list-display-container]");
const listTitleElement = document.querySelector("[data-list-title]");
const listCountElement = document.querySelector("[data-list-count]");
const tasksContainer = document.querySelector("[data-tasks]");

const LOCAL_STROAGE_LIST_KEY = "task.list"
const LOCAL_STROAGE_SELECTED_LIST_ID_KEY = "task.selectedListId";
const taskTemplate = document.getElementById("task-template");
const newTaskInput = document.querySelector("data-new-task-input");



let lists = JSON.parse(localStorage.getItem(LOCAL_STROAGE_LIST_KEY) || "[]");
let selectedListId = localStorage.getItem(LOCAL_STROAGE_SELECTED_LIST_ID_KEY)


listContainer.addEventListener("click", e =>{
 if(e.target.tagName.toLowerCase() === "li"){
  selectedListId = e.target.dataset.listId;
  saveAndRender()
 }
} )

deleteListButton.addEventListener("click", e =>{
 lists = lists.filter(list => list.id !== selectedListId)
 selectedListId = null;
 saveAndRender()
})


newListForm.addEventListener("submit", e =>{
 e.preventDefault();
 const listName = newListInput.value
 if (listName == null || listName === "") return;
 const list = createList(listName);
 newListInput.value = null
 lists.push(list);
 saveAndRender()
})

newTaskForm.addEventListener("submit", e =>{
 e.preventDefault();
 const taskName = newTaskInput.value;
 if (taskName == null || taskName === "") return;
 const task = createTask(taskName);
 newTaskInput.value = null
 const selectedList = lists.find(list => list.id === selectedListId)
 selectedList.tasks.push(task);
 saveAndRender()
})

function createList(name){
 return{
  // geschweifte Klammer direkt nach dem retrun
  id: Date.now().toString(), 
  name: name,
  tasks: []
 };
}
function createTask(name){
 return{
  // geschweifte Klammer direkt nach dem retrun
  id: Date.now().toString(), 
  name: name,
  complete: false
 };
}

function saveAndRender(){
 save();
 render()
}

function save(){
 localStorage.setItem(LOCAL_STROAGE_LIST_KEY,  JSON.stringify(lists));
 localStorage.setItem(LOCAL_STROAGE_SELECTED_LIST_ID_KEY, selectedListId)
}

function render(){
 clearElement(listContainer);
 renderLists();
 const selectedList = lists.find(list => list.id === selectedListId)
 if(selectedListId == null){
   listDisplayContainer.style.display = "none";
 }else{
  listDisplayContainer.style.display = "";
  listTitleElement.innerText = selectedList.name;
  renderTaskcount(selectedList);
  clearElement(tasksContainer);
  renderTasks(selectedList)
  }
}

function renderTasks(selectedList){
 selectedList.tasks.forEach(task => {
  const taskElement = document.importNode(taskTemplate.content, true);
  const checkbox = taskElement.querySelector("input");
  checkbox.id = task.id;
  checkbox.checked = task.complete;
  const label = taskElement.querySelector("label");
  label.htmlFor = task.id;
  label.append(task.name);
  tasksContainer.appendChild(taskElement);
  // testing in function createList

 })
}

function renderTaskcount(selectedList){
   const incompleteTasksCount = selectedList.tasks.filter(task => 
    !task.complete).length;
   const taskString = incompleteTasksCount === 1 ? "task": "tasks";
   listCountElement.innerText = `${incompleteTasksCount} ${taskString} remaining`
}

function renderLists(){
lists.forEach(list =>{
  const listElement = document.createElement("li");
  listElement.dataset.listId = list.id
  listElement.classList.add("list-name");
  listElement.innerText = list.name;
  if(list.id === selectedListId){
    listElement.classList.add("active-list")
  }
  listContainer.appendChild(listElement)
 })
}
// unten: nimmt die Liste aus demh html weg
function clearElement(element){
  while(element.firstChild){
   element.removeChild(element.firstChild)
  }
}

render()