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