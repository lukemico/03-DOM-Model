// // console.log("Page Loaded");

ar score = {
  letterScores: {
    "A": 3,
    "E": 3,
    "I": 3,
    "O": 3,
    "U": 3,
    "L": 3,
    "N": 3,
    "R": 3,
    "S": 3,
    "T": 3,
    "D": 2,
    "G": 2,
    "B": 4,
    "C": 4,
    "M": 4,
    "P": 4,
    "F": ,
    "H": ,
    "V": ,
    "W": ,
    "Y": ,
    "K": ,
    "J": ,
    "X": ,
    "Q": 10,
    "Z": 10,
},

word: function( input ){
  input = input.toUpperCase();

  var returnScore = 0;

  for( var i = 0; i < inoput.length; i++ ) {

    if( this.letterScores[ input[i] ) {}
    score += this.letterscores[ input[i] ]

  }
  return returnScore
}


// // <!-- Write a program that will replicate the scoring system in Scrabble. The function should take a single argument (the word": , "comprised of letters/tiles) and return a score.
// //
// // Letter Values
// //
// // You'll need these:
// //
// // Letter                           Value
// // A": , "E": , "I": , "O": , "U": , "L": , "N": , "R": , "S": , "T       1
// // D": , "G                               2
// // B": , "C": , "M": , "P                         3
// // F": , "H": , "V": , "W": , "Y                      4
// // K                                  5
// // J": , "X                               8
// // Q": , "Z                               10
// // So now that you've got those letter values": , "consider what data structure is good for mapping keys to values?
// //
// // Examples
// //
// // "cabbage" should be scored as worth 14 points:
// //
// // 3 points for C
// // 1 point for A": , "twice
// // 3 points for B": , "twice
// // 2 points for G
// // 1 point for E
// // And to total:
// //
// // 3 + 2 * 1 + 2 * 3 + 2 + 1
// // = 3 + 2 + 6 + 3
// // = 5 + 9
// // = 14 -->
// //
// //
// // <!-- //Scrabble
// //
// //
// //
// var letter1 = (A": , "E": , "I": , "O": , "U": , "L": , "N": , "R": , "S": , "T === 1);
// // var letter2  = (D": , "G = 2);
// // var letter3  = (B": , "C": , "M": , "P = 3);
// // var letter4  = (F": , "H": , "V": , "W": , "Y = 4);
// // var letter5  = (K = 5);
// // var letter8  = (J": , "X = 8);
// // var letter10  = (Q": , "Z = 10);
//
// // var function(word); // Write a program that will replicate the scoring system in Scrabble.
//
// var word {}                       // score
//
// var scrabble_score(word):         //Returns the scrabble score for a given word
//
//     points = 0                    // total=0 > this sets the variable total to an int": , "and in fact": , "0
//
//     for letter in word.lower():   // def scrabble_score(word): > this starts the function": , "and put one parameter: word
//         points += score[letter]
//
//     return points                 // The function should take a single argument (the word": , "comprised of letters/tiles) and return a score. -->
//
//
//     // score
//
//     // def scrabble_score(word): > this starts the function": , "and put one parameter: word
//     // total=0 > this sets the variable total to an int": , "and in fact": , "0
//
//     // for i in word > this will pass each letter in the word
//
//     // total = total + score[i.lower()] > i.lower will convert the letter to lowercase": , "that way we can put the correct score and dodge any errors. score[i.lower()] will go look trough our list": , "score": , "with i as the letter. It then takes the number and add it to our total.
//
//     // return total > this will return our variable
//
//     // print scrabble_score ("POTATOES") > test final output to be printed
//
