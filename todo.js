const todo = document.querySelector("#todo");
const btn = document.querySelector("#addTodo");
const todos = document.querySelector(".todos");
const items = document.querySelector(".list");

btn.addEventListener('click',()=>{
    let val = todo.value.trim();


    let list = document.createElement('li');
    list.innerText = `${val}`;

    let deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";

    deleteButton.addEventListener('click', ()=>{
        list.remove();
    })

items.appendChild(list);
list.appendChild(deleteButton);

todo.value = "";
})