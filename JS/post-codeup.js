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

var firstLastName = "Walter Smith";

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

// This function when called should console log a string
function sayHello(){
    console.log("Hey, Y'all!");
}

sayHello();

// So variables can be passed in an alert as well as a string
alert("The person who created this alert is " + firstLastName);

// Prompt for the user to type their name and the console log their name with a welcome

var userInput = prompt("Type your name here");

console.log("Hello " + userInput);

// When the user inputs text, an alert will display Welcome plus the user input
alert("Welcome " + userInput);

// Goal is to take an array of letters and sort the letters alphabetically
var lettersArray = ['b','z','a','h'];

// Now I will convert the array to a string
var lettersString = lettersArray.join(',');

// Created a variable that holds the rearranged letters that uses the replace method
var alphabetString = lettersString.replace("b,z,a,h","a,b,h,z");

// Converts the string into an array

var alphabetArray = alphabetString.split(',');



console.log()

// GOAL COMPLETED! REARRANGED AN ARRAY OF LETTERS IN ALPHABETICAL ORDER

function alphabetOrder(arr){
    return arr.sort();
}

console.log(alphabetOrder(['b', 'c', 'd', 'a']));

