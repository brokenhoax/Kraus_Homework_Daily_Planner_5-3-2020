//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const dateTime = document.getElementById('date-time');
// const saveButton = document.querySelector('.save-button');
const timeNine = document.getElementById('hourOne');
const timeTen = document.getElementById('hourTwo');
const timeEleven = document.getElementById('hourThree');
const timeTwelve = document.getElementById('hourFour');
const timeOne = document.getElementById('hourFive');
const timeTwo = document.getElementById('hourSix');
const timeThree = document.getElementById('hourSeven');
const timeFour = document.getElementById('hourEight');
const timeFive = document.getElementById('hourNine');
const inputValue9 = document.getElementById('row-9-todo');
const inputValue10 = document.getElementById('row-10-todo');
const inputValue11 = document.getElementById('row-11-todo');
const inputValue12 = document.getElementById('row-12-todo');
const inputValue1 = document.getElementById('row-1-todo');
const inputValue2 = document.getElementById('row-2-todo');
const inputValue3 = document.getElementById('row-3-todo');
const inputValue4 = document.getElementById('row-4-todo');
const inputValue5 = document.getElementById('row-5-todo');
// const btnSave9 = document.getElementById('save-9-btn')
// const btnSave10 = document.getElementById('save-10-btn')
// const btnSave11 = document.getElementById('save-11-btn')
// const btnSave12 = document.getElementById('save-12-btn')
// const btnSave1 = document.getElementById('save-1-btn')
// const btnSave2 = document.getElementById('save-2-btn')
// const btnSave3 = document.getElementById('save-3-btn')
// const btnSave4 = document.getElementById('save-4-btn')
// const btnSave5 = document.getElementById('save-5-btn')


// const deleteButton = document.querySelector('.todo-trash')

//Event Listeners
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
// saveButton.addEventListener('click', scheduleToDo);

//Current Date & Time
console.log(moment());

onload=function getDateAndTime() {
    var NowMoment = moment().format('dddd MMMM Do YYYY');
    var eDisplayMoment = document.getElementById('displayMoment');
    eDisplayMoment.innerHTML = NowMoment;
}

// Change Task Row Color - Past or Future

// $("#row-9").removeClass("present").addClass("future");


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


// Delete ToDo from Quick Task List
function deleteCheck(e){
    const item = e.target;
    console.log(e.target)
    //Delete Todo
    if(item.classList[0] === 'trash-btn'){
        const todoToRemove = item.parentElement;
        todoToRemove.remove();
    }
    //Check Mark Complete
    if(item.classList [0] === 'complete-btn') {
        const completedTodo = item.parentElement;
        completedTodo.classList.toggle('completed');
    }
}

// SetItem to Local Storage 

// 9AM
$("#save-9-btn").click(function() {
    const key = timeNine.innerText;
    const value = inputValue9.value;
    console.log(key);
    console.log(value);

// Checks to see that user has entered input for both key and value
    if (key && value) {
        localStorage.setItem(key, value);
        location.reload;
    }  
});

// 10AM
$("#save-10-btn").click(function() {
    const key = timeTen.innerText;
    const value = inputValue10.value;
    console.log(key);
    console.log(value);


    if (key && value) {
        localStorage.setItem(key, value);
        location.reload;
    }  
});

// 11M
$("#save-11-btn").click(function() {
    const key = timeEleven.innerText;
    const value = inputValue11.value;
    console.log(key);
    console.log(value);

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload;
    }  
});


// 12PM
$("#save-12-btn").click(function() {
    const key = timeTwelve.innerText;
    const value = inputValue12.value;
    console.log(key);
    console.log(value);

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload;
    }  
});

// 1PM
$("#save-1-btn").click(function() {
    const key = timeOne.innerText;
    const value = inputValue1.value;
    console.log(key);
    console.log(value);

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload;
    }  
});

// 2PM
$("#save-2-btn").click(function() {
    const key = timeTwo.innerText;
    const value = inputValue2.value;
    console.log(key);
    console.log(value);

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload;
    }  
});

// 3PM
$("#save-3-btn").click(function() {
    const key = timeThree.innerText;
    const value = inputValue3.value;
    console.log(key);
    console.log(value);

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload;
    }  
});

// 4PM
$("#save-4-btn").click(function() {
    const key = timeFour.innerText;
    const value = inputValue4.value;
    console.log(key);
    console.log(value);

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload;
    }  
});

// 5PM
$("#save-5-btn").click(function() {
    const key = timeFive.innerText;
    const value = inputValue5.value;
    console.log(key);
    console.log(value);

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload;
    }  
});



// GetItem from localStorage and post to User "To-Do" Input field 

// 9AM
var toDo9 = localStorage.getItem(hourOne.innerText)
console.log(toDo9);

document.getElementById("row-9-todo").value = toDo9;

// 10AM
var toDo10 = localStorage.getItem(hourTwo.innerText)
console.log(toDo10);

document.getElementById("row-10-todo").value = toDo10;

// 11AM
var toDo11 = localStorage.getItem(hourThree.innerText)
console.log(toDo11);

document.getElementById("row-11-todo").value = toDo11;

// 12PM
var toDo12 = localStorage.getItem(hourFour.innerText)
console.log(toDo12);

document.getElementById("row-12-todo").value = toDo12;

// 1PM
var toDo1 = localStorage.getItem(hourFive.innerText)
console.log(toDo1);

document.getElementById("row-1-todo").value = toDo1;

// 2PM
var toDo2 = localStorage.getItem(hourSix.innerText)
console.log(toDo2);

document.getElementById("row-2-todo").value = toDo2;

// 3PM
var toDo3= localStorage.getItem(hourSeven.innerText)
console.log(toDo3);

document.getElementById("row-3-todo").value = toDo3;

// 4PM
var toDo4 = localStorage.getItem(hourEight.innerText)
console.log(toDo4);

document.getElementById("row-4-todo").value = toDo4;

// 5PM
var toDo5 = localStorage.getItem(hourNine.innerText)
console.log(toDo5);

document.getElementById("hourNine").value = toDo5;









