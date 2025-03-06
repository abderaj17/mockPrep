var temp = 'hello';
function display(){
    console.log(temp);
   var temp = 'bye';
};
display();


function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Data Fetched");
        }, 2000);
    });
}


//using .then --->>

fetchData()
.then(response =>{
    console.log(response);
    return "Next Step";
})
.then(next =>{
    console.log(next);
})
.catch(error => console.log("Error:", error));


// using async await -->>

async function fetchData2() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Data Fetched")
        }, 2000);
    });
}

async function getData() {
    try{
        const response = await fetchData();
        console.log(response);
        console.log("Next Step");
    }catch(error){
        console.error("Error:", error)
    }
}
getData();




// converting .then() to async/await

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.error("Error:", err));


// to ----- async/await

// async function fetchTodo() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const data = response.json();
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }

// fetchTodo();

