// var temp = 'hello';
// function display(){
//     console.log(temp);
//    var temp = 'bye';
// };
// display();


// function fetchData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("Data Fetched");
//         }, 2000);
//     });
// }


//using .then --->>

// fetchData()
// .then(response =>{
//     console.log(response);
//     return "Next Step";
// })
// .then(next =>{
//     console.log(next);
// })
// .catch(error => console.log("Error:", error));


// using async await -->>

// async function fetchData2() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("Data Fetched")
//         }, 2000);
//     });
// }

// async function getData() {
//     try{
//         const response = await fetchData();
//         console.log(response);
//         console.log("Next Step");
//     }catch(error){
//         console.error("Error:", error)
//     }
// }
// getData();




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


//shallow copy
// let obj1 = {
//     name: "Alice",
//     details: {age: 25, city: "New York"},
// };

// let obj2 = {...obj1};

// obj2.details.age = 30;

// console.log(obj1.details.age);
// console.log(obj2.details.age);


// //deep Copy
// let obj3 = {
//     name: "Alice",
//     details: {age: 25, city: "New York"},
// };

// let obj4 = JSON.parse(JSON.stringify(obj1));
// obj4.details.age = 30;

// console.log(obj3.details.age)
// console.log(obj4.details.age)



//destructuring

// const numbers = [ 10, 20, 40];

// const first  = numbers[0]; //without destructuring
// const second = numbers[1];

//with destructuring
// const [ , thirdNum] = numbers;

// console.log(thirdNum); //skipping values

//without distructuring

// const person = {
//     name: 'John',
//     age: 25,
// };

// const name = person.name;
// const age =  person.age;

// const {name: personName, age: personAge} = person;


//destructuring object

// const person = {
//     name: "Ab",
//     age: 42,
// }

// const {name: personName, age: personAge} = person;

// console.log(personName)

// const colors = [['red', 'green'],['blue', 'yellow']];

// const [[firstColor], [,secondColor]] = colors;

// console.log(secondColor);


// function greet ({name, age}){
//     console.log(`Hello, ${name}. You are ${age} years old`);
// }
// const person = {name: "Emma", age: 22};

// greet(person);

// function getFirstTwo([first,second]){
//     return `First: ${first}, Second: ${second}`;
// }
// console.log(getFirstTwo([10, 20]));


// const [first, ...rest] = [1,2,3,4,5,6];

// console.log(first)
// console.log(rest)



// function greet(name){
//     console.log(`Hello , ${name}`);
// }

// const greet = function(name){
//     console.log(`Hello, ${name}`);
// }

// const greet = (name) =>{
//     console.log(`Hello, ${name}`);
// }

// (function(name){
//     console.log(`Hello, ${name}`);
// })("John");


// const greet = new Function('name', 'console.log(`Hello, ${name}`);');


// const obj = {
//     greet: function(name){
//         console.log(`Hello, ${name}`);
//     }
// };

// class Person {
//     greet(name) {
//         console.log(`Hello, ${name}`);
//     }
// }



// //functions declaration
// function sum(a, b){
//     return a+b;
// }

// //function expression
// const add = function(a, b){
//     return
//      a + b;
// }


//default parameter in function
function adarsh(nickname = "Raj"){
    console.log(`Hello, ${nickname}`);
}
adarsh();