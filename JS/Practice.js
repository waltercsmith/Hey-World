'use strict'


// var askHowAreYou = prompt("How are you doing?");
// alert("I'm glad you're doing " + askHowAreYou);
// var pickAColor = prompt("Choose between the color red or blue: ");
// alert("You chose the color: " + pickAColor + " which is a great choice.");
// console.log("You chose the color: " + pickAColor + " which is a great choice.");


// function that take array of numbers and returns the array but remove 6

function allButSix(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== 6) {
            return array;
        } else {
            return array.splice(6)
        }

    }
}

console.log(allButSix(1,2,3,4,5,6))