// Leap Year

var isLeapYear = function(year); { // Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
// Every year that is evenly divisible by 4,
  if (year % 4 === 0 && ( year % 400 === 0 || year % 100 !== 0 ) ) }
    console.log( "True" )};
  } else {  // Except if it is evenly divisible by 100...
    console.log( " False ")};
}

isLeapYear(1997);
isLeapYear(1996);
isLeapYear(1900);
isLeapYear(2000);

// Remember that a leap year is:
// Every year that is evenly divisible by 4,
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400

// Test Data... Make sure it is working!

// 1997 is not a leap year, it should return false
// 1996 is a leap year, it should return true
// 1900 is not a leap year, it should return false
// 2000 is a leap year, it should return true
// How to structure it...

// We want a custom function called isLeapYear
// Bonus!

// Ask the user what number they want to test
