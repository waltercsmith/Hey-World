'use strict'
//converting miles to KM
// created a kilometers variable & gave it the value of miles
var miles = 500;
var kilometers = miles * 1.60934;
//using console.log() to display the value of kilometers
console.log(kilometers);
//the user can change the value of miles to see the value of kilometers
// also in order to see a different value, the coder must rewrite the
// kilometers = miles * 1.60934
miles = 1230;
kilometers = miles * 1.60934;
console.log(kilometers);

//created a variable with a string value
var song = "Don't stop me now";
//created a variable called included to keep track whether a song is already included or not but the song is already included so will use the value of true for the variable included
var included = true;
//writing a print statment to show the playlist new entry
console.log();
//displayed the string new entry and the variable song in the console to let the user know that their song is added
console.log("New Entry: " + song);

