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
 if(num == 0 || num == 1){
    return 1;
 }else{
    return num * factorialCal(num - 1);
 }
}
console.log(factorialCal(4));

function sum(arr){
    let allSum = arr.reduce((acc, n)=> acc + n, 0);
    return allSum;
}
console.log(sum([5,5, 3,5,3,2,2]));


// q-4 Palindrome

function palindromeCheck(str){
    let reverse = str.split("").reverse().join("");
      return str === reverse ? "Palindrome" : "Not Palindrome";
}

console.log(palindromeCheck("madam"));


// q-5 Prime number

function primeCheck(num){
    if(num == 1){
        return "Not Prime";
    }
    for(let i = 2; i < num; i++){
        return num % i == 0 ? "Not Prime" : "Prime";
    }
}
console.log(primeCheck(56));