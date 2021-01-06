// Anagram Detector
//
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.
//
// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".
//
// Suggestions
//
// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.


var anagrams = ["enlists", "google", "inlets", "banana"];

var findAnagram = function( word ) {
    for (var i = 0; i < anagrams.length; i++) {
      if( sorted( word ) === sorted( anagrams[i] ) ) {
        console.log( anagram [ i ] );
      }
    }
};

// to add final notes from Kane - see folder. Above is  not final version.
