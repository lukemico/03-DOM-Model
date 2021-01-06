The even/odd reporter
//

if (i % 2 === 0) {
    console.log(i + ' is even');
} else {
    console.log(i + ' is odd');
}
}

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").


// Multiplication tables
var multiplier = 9;
for (var i = 0; i <= 10; i++) {
    var result = multiplier * i;
    console.log(multiplier + ' * ' + i + ' = ' + result);
}


for (var multiplier = 0; multiplier <= 10; multiplier++) {
 for (var i = 0; i <= 10; i++) {
   var result = multiplier * i;
   console.log(multiplier + ' * ' + i + ' = ' + result);
 }
}// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").



// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).


// The Grade Assigner
//
function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

for (var i = 80; i <= 100; i++) {
  console.log('For ' + i + ', you got a ' + assignGrade(i));
}
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

















//
// while ( condition ) {
//   // statements to repeat
// }
//
// var num = 0;
// while (num <5 ) {
//   console.log( num );
//       num = num + 1;
// }
// //
// while ( condition ) {
//   // statements to repeat
// }
//
// var num = 0;
// while (num <5 ) {
//   console.log( num );
//       num = num + 1;
// }
//
//
//
// // 5 down to 0
// var count = 5;
// while ( count >= 0 ) {
// 	console.log("Count: " + count);
// 	count = count - 1;
// }

// Loops - must have 3 action points
// 1 - Starting Point
// 2 - Increment or Step
// 3 - Ending Condition  || FInish line

//while (condition) {
//
//}

// // I want the computer to count from 1 to 10
// var count = 1;
//
// while ( count <= 10 ) {
//   console.log("Count:", count);
//   count = count + 1
//   debugger;
// }
// //
//
// for ( var count = 1; count <= 10; count += 1) {
//   console.log("Count: " + count );
// }
//

//
// for (var countdown = 5; countdown >= 1; countdown -= 1) {
//   console.log(countdown);
// }
//
// console.log("Blast Off!");
//
// // I want something that count every 5 numbers up to a given number (limit)
//
// for ( var count = 5; count += 5; count <= 25) {
//   console.log(count);
// }
//
// console.log(count);

// print everyFiveNumbers = function ( 25 ) {
//   for ( var count = 5; count += 5; count <= 25) {
//   console.log(limit);
// };
//
// everyFiveNumbers(25);
//
//
// var loop = function ( start, end, step ); {
//   for ( var count =  start, count <= end; += step) {
//      console.log(start, end, step);
// }
//
// // loop(startingPoint, EndingPoint, increment ) {
// loop( 5, 15, 3 );
// // loop( 1, 100, 1 );
// //loop( 200, 250, 5 );
//

for (var i = 1; i <= 100; i += 1 ) {
  console.log( i );
}
// If i is evenly divisble by 42
  // stop the loop
    if ( i % 42 === 0 ) {
      console.log("No longer necessary to loop!");
      break;
    }



// var countdown = 5;
// // Go from 5 to 1 (by blocks of 1)
//
// while ( countdown >= 1 ) {
//     console.log(countdown);
//     countdown -= 1; // Syntactiv Sugar
// }
//
// // Print out lift off
// console.log("Lift Off!");
//
//
//
//
// //for ( var count = 0; count <= 10; count += 1 ) {
//	console.log( count );
// //}
// VM553:2 0
// VM553:2 1
// VM553:2 2
// VM553:2 3
// VM553:2 4
// VM553:2 5
// VM553:2 6
// VM553:2 7
// VM553:2 8
// VM553:2 9
// VM553:2 10
// undefined
//


var raindrops = function( targetNumber ) {

  for( var i = 0, i <= targetNumber; i++ ) {
    var returnString = "";

  if ( targetNumber % 3 === 0 ) {
      returnString += "Pling"
    };

  if (i % 5 === 0 ) {
    returnString += "Plang"
  }:

  if (i % 7 === 0 ) {
    returnString += "Plong"
  };
