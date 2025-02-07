
const bookInput = document.querySelector(".book");
const ratingField = document.querySelector(".rating");
const btn = document.querySelector(".add");
const output = document.querySelector(".output");

const rowBookList = document.createElement('ol');
output.append(rowBookList);


btn.addEventListener('click', ()=>{

    let book = bookInput.value.trim();
    let rating =ratingField.value;

    if(book == "" || rating == ""){
        alert("Enter a valid Book Name and Rating");
        return;
    }

const listItem = document.createElement('li');
listItem.innerText=`Book: ${book}, Rating: ${rating} out of 5`;


const deleteButton = document.createElement('button');
deleteButton.innerText= "Delete"
deleteButton.addEventListener('click', ()=>{
    listItem.remove();
});

const editBtn = document.createElement('button');
editBtn.innerText = "Edit";

editBtn.addEventListener('click', ()=>{
    listItem.innerHTML = `<input type="text" placeholder="Edit"/>`;
})

listItem.appendChild(editBtn);
listItem.appendChild(deleteButton);
rowBookList.appendChild(listItem);

ratingField.value= "";
bookInput.value = "";
})