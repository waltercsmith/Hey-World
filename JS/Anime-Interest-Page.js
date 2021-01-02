'use strict'
aGreeting(name);
function aGreeting(name) {
    return "What's up " + name;

}
console.log(aGreeting("Mom"));

//Defining a function that takes two numbers as arguments with conditionals and return the sum of them even if they are numeric strings

function sumOf(num1,num2) {
    if(isNaN(parseFloat(num1)) || isNaN(parseInt(num2))){
        return false;
    }else {
        return (parseFloat(num1)) + parseFloat(num2);
    }
}

console.log(sumOf("4","5"));

//Defining a function that takes two numbers as arguments  with conditionals and return the product of them even if they're numeric strings

function multipleNumbers(num1,num2) {
    if(isNaN(parseFloat(num1)) || isNaN(parseInt(num2))){
        return false;
    }else {
        return (parseFloat(num1)) * parseFloat(num2);
    }
}

console.log(multipleNumbers("4","5"));



//Practicing while loops

var i = 0;
while(i < 29){
    console.log('Year ' + i);
    i += 5;
}

// Practicing a for loop

for(var i = 1; i < 13; i++){
    console.log();
}
console.log("I must wait " + i + " days before my birthdate in December!");


//Using a break to stop a loop

var stoppingPoint = 7;
for(var i = 1; i < 13; i++){
    console.log("Day number " + i + " of my training to become the ultimate warrior");
    if(i === stoppingPoint){
        console.log('We have reached a full seven days, so now we must rest!');
        break;
    }
}


//Using a continue on a loop

var stoppingPoint = 7;
for(var i = 1; i < 13; i++){
    console.log("Day number " + i + " of my training to become the ultimate warrior");
    if(i === stoppingPoint){
        console.log('I have reached a full seven days, so now we must rest!');
        continue;
    }
    console.log('But I must continue forward even if it has been ' + i + ' days');
}


//Messing with an array

var namesArray = ['Goku','Naruto','Baki','Luffy'];
console.log(namesArray);
console.log("");

namesArray.unshift('Vegeta');
console.log(namesArray);
console.log("");

console.log(namesArray.slice(2));
console.log("");

console.log(namesArray.reverse());
console.log("");



var delay = 15000;

var timeoutId = setTimeout(function () {
    alert("Here is a delayed hello!");
}, delay);



