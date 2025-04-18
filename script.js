
// const bookInput = document.querySelector(".book");
// const ratingField = document.querySelector(".rating");
// const btn = document.querySelector(".add");
// const output = document.querySelector(".output");

// const rowBookList = document.createElement('ol');
// output.append(rowBookList);


// btn.addEventListener('click', ()=>{

//     let book = bookInput.value.trim();
//     let rating =ratingField.value;

//     if(book == "" || rating == ""){
//         alert("Enter a valid Book Name and Rating");
//         return;
//     }

// const listItem = document.createElement('li');
// listItem.innerText=`Book: ${book}, Rating: ${rating} out of 5`;


// const deleteButton = document.createElement('button');
// deleteButton.innerText= "Delete"
// deleteButton.addEventListener('click', ()=>{
//     listItem.remove();
// });

// const editBtn = document.createElement('button');
// editBtn.innerText = "Edit";

// editBtn.addEventListener('click', ()=>{
//     listItem.innerHTML = `<input type="text" placeholder="Edit"/>`;
// })

// listItem.appendChild(editBtn);
// listItem.appendChild(deleteButton);
// rowBookList.appendChild(listItem);

// ratingField.value= "";
// bookInput.value = "";
// })




//closure

function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log(`Outer:${outerVariable}, Inner: ${innerVariable}`);
    }
}

const closureFunc = outerFunction("Hello");
closureFunc("World");


function counter(){
let count = 0;

return {
    increment: function(){
        count++;
        console.log(count);
    },
    decrement: function(){
        count--;
        console.log(count);
    }
};
}

const myCounter = counter();
myCounter.increment();
myCounter.decrement();


const myPromise = new Promise((resolve, reject)=>{
    let success = true;

    setTimeout(() => {
        if(success){
            resolve("Operation Successful!");
        }else{
            reject("Operation Failed!");
        }
    }, 2000);
});
console.log("Promise created...");




async function example() {
    try{
        const data = await fetchData();
        console.log(data);
    }catch(err){
        console.log(err);
    }
}


function removeDuplicate(){
    let arr = [2,3,3,44,44, 55, 34,4];

    let newSet = new Set(arr);

    console.log( newSet);
}
removeDuplicate();