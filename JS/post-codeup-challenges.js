"use strict";

//  Created a for loop that will print into the console 1 to 100
// for(var num = 1; i < 101; num++){
//     console.log(num)
// }


//  Created a loop with if/else condition: FizzBuzz Challenge
for(var i = 1; i < 101; i++){
    if (i % 3 !== 0 && i % 5 !== 0){
        console.log(i);
    }   else if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
        else if( i % 3 === 0){
        console.log("Fizz");
    }   else if(i % 5 === 0){
        console.log("Buzz");
    }

}

// Goal is to take an array of letters and sort the letters alphabetically
var lettersArray = ['b','z','a','h'];

function alphabetOrder(arr) {
    return arr.sort();
}
// GOAL COMPLETED! REARRANGED AN ARRAY OF LETTERS IN ALPHABETICAL ORDER

console.log(alphabetOrder(lettersArray));


// Sort an array of numbers in descending order
var arrOfNums = [3,4,8,2,4,786,302,9000,1,4,6,7];

function descendingOrder(arr){
    return arr.sort(function(a,b){return b-a});
}

console.log(descendingOrder(arrOfNums));