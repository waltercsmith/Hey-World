"use strict"

// Practice/review of conditionals, data types, variables, functions

var lightOn = true;

var waltersName = "Walter";

var luckyNumber = 308;



waltersName.toUpperCase();

var allCapsWaltersName = waltersName.toUpperCase();

var gradYear = 2021;

var graduationYear = gradYear.toString();

console.log(graduationYear);

var firstLastName = "WalterSmith";

console.log(firstLastName.substring(2,8));

console.log(firstLastName.length);

//Goal to uppercase the 'c' and the 'u' in codeup

var codeup = "codeup";

//First I will get the length of the string

console.log(codeup.length);

//Then I will get the index of the 'c' and the 'u' in codeup

console.log("The index of the letter c is: " + codeup.indexOf("c") + " and " + "The index of the letter c is: " + codeup.indexOf("u"));

//Going to try to use the replace function to change the world codeup to CodeUp

console.log(codeup.replace("codeup","CodeUp"));

// Using the replace function was a success for changing the word codeup to CodeUp

function sayHello(){
    console.log("Hey, Y'all!");

}

