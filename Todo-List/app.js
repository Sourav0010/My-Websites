let inputText = document.querySelector('input');
let submitButton = document.querySelector('button');
let todosList = document.querySelector('.todos-list');

document.addEventListener('DOMContentLoaded', a=>{
    loadDatas();
})

submitButton.addEventListener('click', event => {
    event.preventDefault();

    // Varriables To select The Elements
    let data = inputText.value;
    let todo = document.createElement('ul');
    let todoname = document.createElement('li');
    let todoTitle = document.createElement('p');
    let doneButton = document.createElement('i');
    let trashButton = document.createElement('i');

 
    todoTitle.innerText = data;


    todoname.classList.add('todos');
    doneButton.classList.add('fa-solid');
    doneButton.classList.add('fa-check');
    trashButton.classList.add('fa-solid');
    trashButton.classList.add('fa-trash');
    todosList.appendChild(todo);
    todo.appendChild(todoname);
    todoname.appendChild(todoTitle);
    todoname.appendChild(doneButton);
    todoname.appendChild(trashButton);
    savingData(data);

    doneButton.addEventListener('click',completed);
    trashButton.addEventListener('click',deleteItem);
    inputText.value = '';
});

// Functions that will Function EveryThing

function completed(event){
   let parent =  event.target.parentElement;
   let child = parent.firstChild;
   child.classList.toggle('completed');
}

function deleteItem(event){
    let parent = event.target.parentElement;
    removeFromLocal(parent);

    parent.remove();
}

function savingData(value){
   let todos ;
   if(localStorage.getItem('todos') === null){
    todos = [];
   }else{
    todos = JSON.parse(localStorage.getItem('todos'));
   }
   todos.push(value);
   localStorage.setItem('todos',JSON.stringify(todos));
}

function loadDatas(){
    let todos ;
   if(localStorage.getItem('todos') === null){
    todos = [];
   }else{
    todos = JSON.parse(localStorage.getItem('todos'));
   }
   todos.forEach(element => {
    let data = element;
let todo = document.createElement('ul');
let todoname = document.createElement('li');
let todoTitle = document.createElement('p');
let doneButton = document.createElement('i');
let trashButton = document.createElement('i');


todoTitle.innerText = data;


todoname.classList.add('todos');
doneButton.classList.add('fa-solid');
doneButton.classList.add('fa-check');
trashButton.classList.add('fa-solid');
trashButton.classList.add('fa-trash');
todosList.appendChild(todo);
todo.appendChild(todoname);
todoname.appendChild(todoTitle);
todoname.appendChild(doneButton);
todoname.appendChild(trashButton);
doneButton.addEventListener('click',completed);
    trashButton.addEventListener('click',deleteItem);
    inputText.value = '';
});
}

function removeFromLocal(element){
    let todos ;
    if(localStorage.getItem('todos') === null){
     todos = [];
    }else{
     todos = JSON.parse(localStorage.getItem('todos'));
    }
    let index = todos.indexOf(element.firstChild.innerText);
    todos.splice(index,1);
    localStorage.setItem('todos',JSON.stringify(todos));
}

