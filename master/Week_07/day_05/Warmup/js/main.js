// Simple Sums

// Write a program that can calculate the sum of the first n elements of the following sequences:

// s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
// s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc
// For example:

// s1(4) = 0
// s2(4) = 10
// Use any language of your choice.

// Can you guess what the sum would be if n is infinity?


// var s1 = function( num ){
//   for( var i = 0; i < num; i++){
//     if ( i % 2 === 0 ){
//       output --;
//     } else {
//       output ++;
//     }
//   }
// };
//
// console.log( s1(4) );

// or

// var s1 = function( num ){
//   var output = 0;
//     if ( num % 2 === 0 ){
//       output = 0;
//     } else {
//       output = 1;
//     }
//     return output;
// };
//
// console.log( s1(4) );

// or

var s1 = function( num ){
  return num % 2 === 0 ? 0 : 1;
};

console.log( s1(4) );


// Question 2

var s2 = function( num ){
  return (num * ( num + 1 ) ) /2;
};

console.log( s2(4) );
