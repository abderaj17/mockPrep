//questions ---

// q-1 To revese a string

function reversedStr(str){
//     let reverse = "";

//     for(let i = str.length-1; i >= 0; i--){
//         reverse += str[i];
//     }
// return reverse;

return str.split("").reverse().join("");
    
}

reversedStr("abderaj");


// q-2 Even Odd check---

function evenOdd(num){
    if(num % 2 == 0){
        return "Even"
    }
    return "Odd";
}
console.log(evenOdd(8));


//q-3 Factorial

function factorialCal(num){
    let fact = num.reduce((acc, n)=> )
}