// Arrays!

// Log out the answers to all of the following questions!

// Here is some data that you can work with.

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// Create an array of every five numbers between 30 and 101


// Turn bumpyArr into one flat array (no nested arrays)


// Remove all of the falsey elements in the uncompactedArr


// Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0


// Find the index of the first element in numbers that is over 7 and is even


// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }





































// var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
//
// var people = [
//   { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
//   { id: 2, username: "B", active: false, age: 35, uid: 1352 },
//   { id: 3, username: "C", active: false, age: 50, uid: 5418 },
//   { id: 4, username: "D", active: true,  age: 65, uid: 216  },
//   { id: 5, username: "E", active: true,  age: 80, uid: 18   },
//   { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
// ];

// var words = [
//   "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
// ]; // Random words from here... http://www.catb.org/jargon/html/go01.html

// Sort the people by 'uid'
// var people = [
//   { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
//   { id: 2, username: "B", active: false, age: 35, uid: 1352 },
//   { id: 3, username: "C", active: false, age: 50, uid: 5418 },
//   { id: 4, username: "D", active: true,  age: 65, uid: 216  },
//   { id: 5, username: "E", active: true,  age: 80, uid: 18   },
//   { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
// ];
//
// var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// // _.each( numbers, function ( numbers ) {
// //   var msg = "Number: " ;
// //   console.log( msg );
// // } );
//
//
//
// // var people = _.sortBy( uid, function ( uid ) {
// //        return uid;
// // });
// //
// // var list = _.sortBy( uid:, function( uid ) {
// //   return Math.sin(num);
// // });
// //
// // _.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
// // => [5, 4, 6, 3, 1, 2]
// //
// // var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// // _.sortBy(stooges, 'name');
// // => [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}];
// //
// //
//
//
//
// // Group the random words by the lower case version of their first letter
// // Check to see if all the words have more than 3 characters
//
// var overThree = _.every( words, function (word) {
//   return word.length> 3;
// });
//
// // Check if some words are over twenty characters long
// var overTwenty = _.every( words, function (word) {
//   return word.length> 20;
// });
// console.log( someOverTwenty);
//
// // Get an array of all of the uids in people
//
//
// // Find the person with the highest uid
//
//
// // Return an object that says how many even numbers and how many odd numbers there are in numbers
//
// if ( num % 2 === 0 ) {
//   return "even";
// } else {
//   return "odd";
// }
//
// // Get three random numbers out of numbers
// _.sample();
//
//
//

// _.findIndex( stooges, function ( person ) {
// return person.age === 50;
// });
//

















// _.compact
  // Removes anything that is falsey

// var falseyArray = [ 0, 1, 2, null, undefined, false, true, 3, 4 ];
//
// console.log(
//   _.compact( falseyArray )
// );
//
// // _.flatten
// // Remove nested arrays
// var nestedArray = [1, [2], [[3]], [[[[[[4]]]]]]];
//
// var completelyFlattened = _.flatten( nestedArray );
// var slightlyFlattened = _.flatten( nestedArray, true ); // You only flatten one level deep when you pass in true
//
// console.log(
//   completelyFlattened,
//   slightlyFlattened
// );
//
// // Removes anything that it finds after the collection
// _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
//  // => [2, 3, 4]
//
// // Find all of the unique items in every array
// _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
// // => [1, 2, 3, 101, 10]
//
// // Finds the things that are in every array
// _.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
// // => [1, 2]
//
// // Finds the things that are only in the first array
// _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
// // => [1, 3, 4]
//
//
//
//
// _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
// // => [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]
//
// _.unzip([['moe', 30, true], ["larry", 40, false], ["curly", 50, false]])
// // => [['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]]
//
// _.object(['moe', 'larry', 'curly'], [30, 40, 50]);
// // => {moe: 30, larry: 40, curly: 50}
//
// _.object([['moe', 30], ['larry', 40], ['curly', 50]]);
// // => {moe: 30, larry: 40, curly: 50}
//
// var stooges = [
//   {name: 'moe', age: 40},
//   {name: 'larry', age: 50},
//   {name: 'curly', age: 60}
// ];
// var alphabet = [ 'a', 'b', 'c', 'd', 'e', 'a' ];
//
// var aIndex = _.indexOf(alphabet, 'a');
// var lastAIndex = _.lastIndexOf(alphabet, 'a');
//   // Return -1 if it can't find 'a'
// console.log( aIndex, lastAIndex );
//
// // _.sortedIndex( ARRAY, DATA TO BE ADDED, ORDERED BY )
// var stooges = [
//   { name: "Larry",  age: 40 },
//   { name: "Moe",    age: 60 }
// ];
// var curly = {
//   name: "Curly",
//   age: 50
// };
// var whereToAddCurly = _.sortedIndex( stooges, curly, 'age' );
// console.log( whereToAddCurly );
//
// // _.range( UPPER_LIMIT ); -> exclusive
// // _.range( START, UPPER_LIMIT ); -> exclusive (includes the start)
// // _.range( START, UPPER_LIMIT, STEP ); -> exclusive
//
// console.log(
//   _.range( 10 )
// );
// console.log(
//   _.range( 1, 10 )
// );
// console.log(
//   _.range( -1, -10, -1 )
// );
