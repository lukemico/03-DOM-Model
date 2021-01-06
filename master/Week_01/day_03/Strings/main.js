// DrEvil

// Create a function called DrEvil.
// It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example: DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

function DrEvil ( amount ) {// Create a function called DrEvil.
// It should take a single argument, an amount, and return ' dollars',
if ( amount === 1000000 ) // It should take a single argument, an amount, and return ' dollars',
// I need to return either 1 of 2 results: amount = 1000000 dollars (pinky) or any amount less than $1,000,000 with no pinky.
  return amount + "dollars (pinky)"; // this result should display for 1000000 only.
}
  else if { //
    debugger
    return amount + " dollars "; // this result should display for anything other than 1000000
  }

// I'm getting a error for Line 13. I haven't been able to solve the Syntax error here.




// MixUp

// Create a function called mixUp.
function mixUp (1, 2 ) {

}

// It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out
// and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.
// For example:
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!





// FixStart

// Create a function called fixStart.
// It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

// Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'




// Not Bad

// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
