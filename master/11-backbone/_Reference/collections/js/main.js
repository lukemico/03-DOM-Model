// _.each( COLLECTION, CALLBACK || ITERATE, [CONTEXT] );

// _.each( [ 'a', 'b', 'c', ], function ( letter, index ) {
//   console.log( "Current letter: " + letter );
//   console.log( "\tCurrent index " + index );
// });
//
// var numbers = [ 12, 242, 4121, 219, 0.18 ];
// var displayNumber = function ( number ) {
//   console.log( number );
// };
// _.each( numbers, displayNumber );
//
// var groucho = {
//   firstName: "Groucho",
//   lastName: "Marx",
//   bestAppearance: "Duck Soup"
// };
//
// _.each( groucho, function ( value, key ) {
//   var msg = "Key: " + key + ". Value: " + value;
//   console.log( msg );
//
// } );
//
// var numbers = [ 1, 2, 3 ];
//
// var multipliedNumbers = _.map( numbers, function ( num ){
//   return num * 3;
// });
//
//   console.log( multipliedNumbers );

// var bankAccountValues = [ 100, 50, 1000 ];
//
// var totalBalance = _.reduce( bankAccountValues, function ( sum, num ) {
//   console.log( "Sum: " + sum );
//   console.log( "Num: " + sum );
//   return sum + num;
// }, 0 );
//
// console.log( totalBalance );

//
// var testScores = [ 92, 84, 49, 100, 76 ];
//
// var totalScore = _.inject( testScores, function ( scoreTotal, currentScore ){
//   return scoreTotal + currentScore;
// }, 0 );
//
// var average = totalScore / testScores.length;
//
// console.log( average );



// var data = [
//        { id: 22, username: "Martin", active: true  },
//        { id: 23, username: "Max",    active: false },
//        { id: 24, username: "Linda",  active: false }
//      ];
//
// var inactiveUsers = _.where( data, { active: false } );
// console.log( inactiveUsers );
//
// var firstInactiveUser = _.findWhere( data, { active: false } );
// console.log( firstInactiveUser );


// var nums = [ 1, 2, 3, 4, 5, 6, ];
//
// var evenNumbers = _.filter( nums, function ( number ) {
//      return number % 2 === 0;
// } );
//
// console.log( evenNumbers );
//
// var allOdds = _.reject( nums, function ( number ) {
//      // Remove anything where the callback function returns true
//      return number % 2 === 0;
// } );
//
// console.log( allOdds );




// Collections!
//
// Log out the answers to all of the following questions!
//
// Here is some data that you can work with.

// var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// var people = [
//   { id: 1, username: "A", active: true,  age: 20 },
//   { id: 2, username: "B", active: false, age: 35 },
//   { id: 3, username: "C", active: false, age: 50 },
//   { id: 4, username: "D", active: true,  age: 65 },
//   { id: 5, username: "E", active: true,  age: 80 },
//   { id: 6, username: "E", active: true,  age: 95 },
// ];

// Exercises
// Iterate through numbers and log each number to the console (use _.each)
// var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// _.each( numbers, function ( numbers ) {
//   var msg = "Number: " ;
//   console.log( msg );
// } );
//
// (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Iterate through numbers and multiply each one of them by 5
// var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// var multipliedNumbers = _.map( numbers, function ( num ){
//   return num * 5;
// });
//
// console.log( multipliedNumbers );
// (10) [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]


// Iterate through numbers and reduce it by adding them together
// var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
//
// var total = _.reduce( numbers , function ( sum, num ) {
//   console.log( sum + num );
//   return sum + num;
// }, 0 );
//
// console.log( total );


// // Get an array of all of the people in people that have the username "E"
// var people = [
//   { id: 1, username: "A", active: true,  age: 20 },
//   { id: 2, username: "B", active: false, age: 35 },
//   { id: 3, username: "C", active: false, age: 50 },
//   { id: 4, username: "D", active: true,  age: 65 },
//   { id: 5, username: "E", active: true,  age: 80 },
//   { id: 6, username: "E", active: true,  age: 95 },
// ];
//
// var ePeople = _.where( people, { username: "E" } );
// console.log( ePeople );

// use _.where


// // Find the first object in people that has the id of 3
// var people = [
//   { id: 1, username: "A", active: true,  age: 20 },
//   { id: 2, username: "B", active: false, age: 35 },
//   { id: 3, username: "C", active: false, age: 50 },
//   { id: 4, username: "D", active: true,  age: 65 },
//   { id: 5, username: "E", active: true,  age: 80 },
//   { id: 6, username: "E", active: true,  age: 95 },
// ];

// use _.findwhere


// Find the first person who has an age of less than 50
// use _.filter;



// Get an array of all of the people with an age of over 60
// use _.filter


// Remove all of the people with an age less than 40
// use _.reject

// var listOfNumbers = [ 1.1, 1.4, 2.3, 2.7, 8.4 ] ;
//
// var groupedByNum = _.groupBy( listOfNumbers, function ( num ) {
//     return Math.floor( num );
// });
//
// var jsLibraries = [ "angular", "backbone", "react", "d3", "threejs", "jquery", "underscore", "ember", "vue", "fartscroll", "rekt.js", "lodash", "dead-hyphen" ];
//
// var searchLibraries = _.groupBy(jsLibraries, function (lib) {
//   return lib[0];
// });

// var emails = [ "groucho@ga.co", "harpo@ga.co", "zeppo@ga.co" ] ;
//
// var allValidEmails = _.every( emails, function ( email ) {
// return email.includes("@");
// });
// console.log( allValidEmails );
//
//
// var nums = [ 1, 2, 3, 4, 5, ];
// console.log( );
// console.log( );

// var stooges = [
//        {name: 'moe', age: 40},
//        {name: 'larry', age: 50},
//        {name: 'curly', age: 60}
//      ];
//
// console.log( stooges, 'name');
//
//
// var nums = [ 1, 2, 3, 4, 5, ];
//
// console.log(
//        _.shuffle( nums )
// );
//
// console.log(
//        _.sample( nums )
// );
//
//
// console.log(
//        _.sample( nums, 2 )
// );


// var jsLibraries = [ "angular", "backbone", "react", "d3", "threejs", "jquery", "underscore", "ember", "vue", "fartscroll", "rekt.js", "lodash", "dead-hyphen" ];

//
// var nums = [ 1, 2, 3, 4, 5, ];
// var evenAndOdds = _.countBy( nums, function ( number ) {
//        if ( number % 2 === 0 ) {
//               return "even";
//        } else {
//               return "odd";
//        }
// });
// console.log( evenAndOdds );
//
// var libraryCount = _.countBy( jslibraries, function (lib) {
//        return lib[0];
// });
// console.log( libraryCount );



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

// COLLECTIONS Arrays

// _.compact
  // Removes anything that is falsey

// var falseyArray = [ 0, 1, 2, null, undefined, false, true, 3, 4 ];
//
// console.log( falseyArray );

// var nestedArray = [1, [2], [[3]], [[[[[[4]]]]]]];
//
// var completelyFlattened = _.flatten( nestedArray );
// var slightlyFlattened = _.flatten( nestedArray );
//   // You only flatten one level deep when you pass in true
//
// console.log( completelyFlattened, slightlyFlattened );

// _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
// // => [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]
//
// _.unzip([['moe', 30, true], ["larry", 40, false], ["curly", 50, false]]);
// // => [['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]]
//
// _.object(['moe', 'larry', 'curly'], [30, 40, 50]);
// // => {moe: 30, larry: 40, curly: 50}
//
// _.object([['moe', 30], ['larry', 40], ['curly', 50]]);
// // => {moe: 30, larry: 40, curly: 50}

// var stooges = [
//       {name: 'moe', age: 40},
//       {name: 'larry', age: 50},
//       {name: 'curly', age: 60}
//     ];
//
// var aIndex = _.indexOf(alphabet, 'a');
// var lastindex = _.lastindexOf(alphabet, 'a');
//       // Return -1 if it can find 'a'
// console.log( aIndex, lastindex );
//
// // _.sortIndex( ARRAY, DATA TO BE ADDED, ORDERED BY );
// var stooges = [
//       { name: "Larry",  age: 40 },
//       { name: "Moe",    age: 60 }
// ];
//
// var curly = {
//       name: "Curly",
//       age: 50,
// };


// _.range
// plus range + step
// _.range[10];
// undefined
// _.range( 10 );
// (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// _.range( 2, 9 );
// (7) [2, 3, 4, 5, 6, 7, 8]
// _.range( 10, 21, 2 );
// (6) [10, 12, 14, 16, 18, 20]

// _.range ( UPPER_LIMIT ); exclusive

// _.range ( START, UPPER_LIMIT ); exclusive (includes the start )

// _.range ( START, UPPER_LIMIT, STEP ); exclusive (includes the start )

// console.log(
//       _.range( 10)
// );
//
// console.log(
//       _.range( 1, 10)
// );
//
// console.log(
//       _.range( 10)
// );

// Arrays!
// Log out the answers to all of the following questions!
// Here is some data that you can work with.

// var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
// var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

// var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// // Create an array of every five numbers between 30 and 101

// // Turn bumpyArr into one flat array (no nested arrays)
// var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
// var bumpyArr = _.flatten( bumpyArr );
//       console.log( bumpyArr );

// Remove all of the falsey elements in the uncompactedArr
// var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];
// var uncompactedArr = _.compact( uncompactedArr );
//       console.log( uncompactedArr );
//
// // Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0
//
// var
// [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0




// Find the index of the first element in numbers that is over 7 and is even

// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }



// ARRAYS Objects

// var data = {
//       age: NaN,
//       location: undefined
// };
//
// console.log( _.keys( data )
// );
//
// var distance = {
//       start: 100,
//       end: 300
// };
//
// var mappedObj = _.mapObject( distance, function (val, key) {
//       return val * 3;
// });
// console.log( mappedObj );
//
// // _.pairs
// // Turn an obect into an array of arrays
//
// console.log( distance );
//
// // _.invert
// // Swaps the keys and values around
//
// console.log(
//       _.invert(distance)
// );
// var data = {
//       name: "N/A",
//       location: "N/A",
//       description: "N/A",
// };
//
// // Whitelisting
// var whitelisted = _.pick( data, 'name', 'location' );
// // The only things allowed are name and location
// console.log(whitelisted);
//
// // Blacklisting
// var blacklisted = _.omit( data, 'description' );
// // The only things allowed are name and location
// console.log(blacklisted);
//
// // _.defaults( OBJ, DEFAULT KEY VALUE PAIRS );
// var mergedObj = _.defaults(
//       { name: "Bill" },
//       { drinksWater: true }
// );
// console.log( mergedObj );
//
// var merged = _.defaults(
//       { x: 192, y: 42 },
//       { x: 0, y: 0 }
// );
// console.log( merged );
//
//
// _.times( )
//
//
// console.log(
//       _.random( 1, 100 )
// );

var someHTML = "<p>Hello <% name %>! </p>";
var templateFunction = _.template( someHTML );

var janeGreeting = templateFunction({ name: "Jane" });
var sergeGreeting = templateFunction({ name: "Serge" });

console.log( janeGreeting, sergeGreeting );

var initilizeGame = function () {
  console.log('The game was Initialized');
};

var startGame = _.once( initilizeGame );

startGame();
startGame();
startGame();
startGame();
startGame();

var createApplication = _.once(function () {
  console.log("Application Created");
});

createApplication();
createApplication();
createApplication();
createApplication();
createApplication();
createApplication();

// [ "one", "two", "three" ]
// [ "one mapped", "two mapped", "three mapped" ]
// [ "ONE MAPPED", "ONE MAPPED", "ONE MAPPED" ]

_.chain( ["one", "two", "three"] )
  .map(function (word) {
    return word + " mapped";
  })
  .map(function (word) {
    return word.toUpperCase();
  })
  .each(function (word) {
    console.log("Current Word:", word);
  });


  // Starting Data:         [ 1, 2, 3, 4, 5 ]
    // .map
  // After first function:  [ 5, 10, 15, 20, 25 ]
    // .reduce || .inject
  // What is returned:      75

  var chainedTransformations =
    _.chain( [1, 2, 3, 4, 5] )
      .map(function (num) {
        return num * 5;
      })
      .reduce(function ( runningTotal, currentNumber ) {
        return runningTotal + currentNumber;
      }, 0)
      .value();

  console.log( chainedTransformations );
