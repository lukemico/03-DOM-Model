console.log("test");

// Prime Factors
// A prime number is any number greater than one that is only divisible by itself.

// 1 is not a prime number (it is not greater than 1).
// 2 is a prime number (it is greater than one and is only evenly divisible by itself and 1).
// 3 is a prime number (as above).
// 4 is not a prime number (it is evenly divisible by 2).
// The prime factors of an integer are the set of prime numbers will divide the integer exactly.

// Example
// What are the prime factors of 60?

// 1 is not a prime number.
// 2 is a prime number. 60 is evenly divisible by 2 (therefore 2 is a prime factor of 60), and leaves 30.
// 30 is evenly divisible by 2 (therefore 2 is a prime factor of 60), and leaves 15.
// 15 is not evenly divisible by 2.
// 3 is the next prime number. 15 is evenly divisible by 3 (therefore 3 is a prime factor of 60), and leaves 5.
// 4 is not a prime number.
// 5 is a prime number. 5 is evenly divisible by 5 (therefore 5 is a prime factor of 50), and leaves 1.
// When we get to 1, we're done.
// The prime factors of 60 are 2, 2, 3, 5
// You can check this yourself:

// 2 * 2 * 3 * 5
// = 4 * 15
// = 60
// Success!

// YOUR TASK
// Write a function in Javascript which takes a number as its argument and returns an array containing the prime factors of that number.





// KANE'SOLUTION
// Generate a range of numbers from 2 => n

// Make a function that iterates that range and pulls out all primes

// Make a function that iterates all the primes, for each prime that's divisible, store it and the number by whatever that prime is.

var primes = {

  getPrimeRange: function( num ){
    for( var i = 2; i <= num; i++ ){
      this.range.push( i );
    }
    return this.range
  },
}

getPrimeRange: function( arr ){

  // iterate our range
  // from our range, take a number
  // count up to that number and determine whether it is prime
  //   anytning that is prime is not divisible between the start of that count and itself.

for( var i = 0; i < arr.length; i++ ){
  var potentialPrime = arr[i];
  var isPrime = true;

  for( var j = 2; j < potentialPrime; j++ ){
    if( potentialPrime % j === 0 ){
      isPrime = false
    }
  }

  if( isPrime ){
    this.primeRange.push( potentialPrime )
  }
}

return this.primeRange;
},

getPrimeFactors;


var range = primes.getPrimeRange( 10 );
primes.getPrimeRange( range );














}
