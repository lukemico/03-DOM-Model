// Homework - Array and Functions

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
//
//
// var maxOfTwoNumbers = function( x, y ) // Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
//   var x = 5;
//   var y = 7;
// if()// Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
//
// // Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
//
// // Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.



// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
//










// console.log("Page Loaded");
//
// var emptyArr = [];
// var alphabet = ["a", "b", "c", "d", "e",];
//
// var alphabetAsString = "abcdeghijklmnopqrstuvwxz";
// var alphabetArray = alphabetAsString.split('');
//
// var tenthLetter = [11];
// var fifthLetter = [6];
// var lastLetter = [25];
//
// console.log(tenthLetter, fifthLetter, lastLetter);


// Find the index of the boolean false
//
// Find the index of INNER ARRAY 1 in the inner array
//

// Find the index of the boolean false

// Find the index of INNER ARRAY 1 in the inner array
//
// var sillyArray = [
//   false,
//   '',
//   undefined,
//   null,
//   [ 'INNER ARRAY 0', 'INNER ARRAY 1' ],
//   {},
//   1
// ];
//
// var nullItem = sillyArray[3];
// var innerArray = sillyArray[4];
//
// var falseSearch = sillyArray.indexOf(false);
// console.log(falseSearch);
//
// var innerArrayItem = sillyArray[4][0];
// innerArrayItem = innerArray[0];
//
// var innerArray = sillyArray[4].indexOf("INNER ARRAY 1");

// This is not working. Need to check error/s.


// Reassigning Values

// var rainbowColors = [
//   "red",
//   "orange",
//   "yellow",
//   "blue",
//   "black",
//
//
// rainbowColors[0] = "Indigo";
// debugger
// rainbowColors[3] = "Purple";
// rainbowColors[rainbowColors.length - 1] = "Gainsboro"
// rainbowColors[90] = 'This is a bad idea];'
//
// console.log(rainbowColors);
// ];


// Change the first color to Indigo

// Change the index 3 element to Purple

// Change the last item to Gainsboro using the length property

// Put something in the index 90
//

//
// var weirdInstruments = [
//     "Badgermin",
//     "The Great Stalacpipe Organ",
//     "Stylophone",
//     "Ondes Martenot",
//     "Sharpischord",
//     "Hydraulophone",
//     "Pyrophone"
// ];
//
//
// // Find where the Stylophone is in the Array
// var styloIndex = weirdInstruments.indexOf("Stylophone");
//   console.log(styloIndex);
//
// // Find where the Pyrophone is
// var pyroIndex = weirdInstruments.indexOf("Pyrophone");
//   console.log(pyroIndex);
//
// // Check to see if the Seabord is in there
// var seaboardIndex = weirdInstruments.indexOf("Roli Seaboard");
//
//   if (seaboardIndex < 0 ) {
//     console.log("The Seaboard is not in that array");
//   }



// Adding Elements
//
// var fruits = [ "Orange", "Banana", "Kiwi Fruit"];
//
// // Add to the end - push()
// fruits.push("Grapes");
// fruits.push("Apple");
// console.log(fruits);
//
// // Add to the start - unshift()
// fruits.unshift("Mango");
// console.log(fruits);
//
// // Removing the last elements
// fruits.pop()
// fruits.pop()
//
// // Removing the first element
// fruits.shift()
//
// var weirdInstruments = [
//     "Badgermin",
//     "The Great Stalacpipe Organ",
//     "Stylophone",
//     "Ondes Martenot",
//     "Sharpischord",
//     "Hydraulophone",
//     "Pyrophone"
// ];
//
//
// // Remove just the Stylophone
// weirdInstruments.splice( 2, 1 );
// console.log(weirdInstruments);
//
// // Remove from the Ondex Martenot to the Pyrophone (bonus points if you use the .length property)
// weirdInstruments.splice( 4, 1 );
// console.log(weirdInstruments);
//
// var ondeIndex = weirdInstruments.indexOf("Ondes Martenot");
// var lastIndex = weirdInstruments.length - 1;
// weirdInstruments.splice(ondesIndex, lastIndex);
// console.log(weirdInstruments);

//
// var myArrayOfThings = [ true, true, true, ];
// var mySecondArray = mySecondArray = myArrayOfThings;
//
// mySecondArray.push(false);
// console.log(myArrayOfThings);
// console.log(mySecondArray);
// // Don't do this  method
//
// var weirdInstruments = [
//   "Badgermin",
//   "The Great Stalacpipe Organ",
//   "Stylophone",
//   "Ondes Martenot",
//   "Sharpischord",
//   "Hydraulophone",
//   "Pyrophone";
// ]
//
// var otherWeirdInstruments = weirdInstruments.slice();
// // make a complete copy
// debugger
//
// console.log("Weird Instruments", weirdInstruments);
// console.log("otherWeirdInstruments", otherWeirdInstruments);
//
//
// // To make partial copies of an array
//
// var theRest = weirdInstruments.slice(2);
//   // takes all of the items from the index of 2
//
// var betweenArray = weirdInstruments.slice(1, 3);
// console.log(betweenArray);
//   // takes  all items from to 3 (not inclusive - doesn't include )
//
//
//   var weirdInstruments = (
//     "Badgermin",                  // 0
//     "The Great Stalacpipe Organ", // 0
//     "Stylophone",                 // 2
//     "Ondes Martenot",             // 3
//     "Sharpischord",               // 4
//     "Hydraulophone",              // 5
//     "Pyrophone"                   // 6
//   )
// debugger
// // Loop requirements
// // Starting point, Ending condition, Increment
//
// //Hard coded loop
// for ( var i = 0; i < 7; i += 1) {
//   var instrument = weirdInstruments[ i ]
//   console.log("The index is", i);
// }
//
// for ( var i = 0; i < weirdInstruments.length; i += 1 ) {
//     var instrument = weirdInstruments [i];
//     // console.log("The index is" , i);
//     //console.log(instrument);
// }
//
//
// for (var i = 1; i < 4; i += 1 ) {
//     var instrument = weirdInstruments [ i];
// //     console.log()
// }

// Print out every second ite in weirdInstruments

// Print out every item between 1 and 4



// Create an array to hold your top five choices of something (colors, presidents, whatever). If you choose movies, the right top choice is "Satantango".

var chocolate = [
  "Cadbury",
  "Lindt",
  "Caramello",
  "Bubble",
  "Dark"
];

for( I = 0; I < chocolate.length; i++ ){
    varStr = '';
    if( i === 0 ){
      returnStr = "My " + i + 1 + "st choice will be " + chocolate [i] + "."
    } else if ( i === 1) {
      returnStr = "My " + (i + 1) + "rd choice will be " + chocolate [i] + "."
    } else if ( i === 2) {
      returnStr = "My " + (i + 1) + "rd choice will be " + chocolate [i] + "."
}   else {

    console.log("My #" i " choice is " + chocolate);
// For each choice, log to the screen a string like: "My #1 choice is blue."

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.












// var alphabetAsString = "abcdeghijklmnopqrstuvwxz";
// var alphabetArray = alphabetAsString.split('');
//
// var tenthLetter = [11];
// var fifthLetter = [6];
// var lastLetter = [25];
//
// console.log(tenthLetter, fifthLetter, lastLetter);
