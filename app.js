//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
// const deleteButton = document.querySelector('.todo-trash')

//Event Listeners
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);

//Functions

function addToDo (event) {
    // Prevent form from submitting
    event.preventDefault();
    console.log('hello')
    //ToDo DIV
    const todoDiv = document.createElement('div');
    //Add Class to todoDiv
    todoDiv.classList.add('todo')
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Add Completed Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check" </i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Add Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash" </i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append To List
    todoList.appendChild(todoDiv);
    //Clear ToDo Input Value
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    console.log(e.target)
    //Delete Todo
    if(item.classList[0] === 'trash-btn'){
        const todoToRemove = item.parentElement;
        todoToRemove.remove();
    }
    //Check Mark
    if(item.classList [0] === 'complete-btn') {
        const completedTodo = item.parentElement;
        completedTodo.classList.toggle('completed');
    }
}

