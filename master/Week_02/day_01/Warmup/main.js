// 99 bottles of beer

// "99 Bottles of Beer" is a traditional reverse counting song.
// It is popular to sing on long trips, as it is repetitive and easy to memorize but -- it can take a long time to sing.
// Lets try and make it run a little quicker using code:
// The song's lyrics are as follows:

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down, pass it around, 98 bottles of beer on the wall...
// The same verse is repeated, each time with one bottle fewer, until there are none left.

// Bear in mind, not all verses are the same:
// The verse for 1 bottle is as follows:
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take it down and pass it around, no more bottles of beer on the wall.

// The verse for 0 bottles is as follows:

// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.

// Bonus:
// Count through any number of bottles.
// Be able to count between a range of numbers (ie, 20 to 10).


  var bottles = 99; // set variable for array.length.

  var bottles = function( i ) // { set up function for variable argument.
    for (var i = 0; i <= array.length; i--) {
      array [i]
    }
    if ( i <= array.length ) { //
    // The verse for 99 bottles is as follows:
    // 99 bottles of beer on the wall, 99 bottle of beer.
    console.log( ' + i  + ' bottles of beer on the wall, ' + i <= + ' bottles of beer. Take it down and pass it around, ' + i + ' bottles of beer on the wall. );
    }
    else if ( i === 0 ) {
      // The verse for 1 bottle is as follows:
      // 1 bottle of beer on the wall, 1 bottle of beer.
      console.log( 1 bottle of beer on the wall, 1 bottle of beer. Take it down and pass it around, no bottles of beer on the wall. );
    }



// console.log(' + number + ' bottles of beer on the wall, ' + number + '' bottles of beer.
// // Take one down, pass it around, 98 bottles of beer on the wall...)
//
// // The same verse is repeated, each time with one bottle fewer, until there are none left.


// SOLUTION
// solve in 2 ways
// // 1 - object based function
//
// for ( var i = 99; i >=0; i--) {
//   if) i === 0 ) {
//     console.log( "No more bottles of beer"):
//     console.log( "Go to the store");
//   } else if ( i === 1 ) {
//     console.log( " 1 bottle of beer");
//     console.log( " Take it down");
//     else {
//       console.log( );
//     }
//   }
// }

// 2 -

var beer = {
  pluralise: function( num ) {
    if ( num === 1 ) {
      return "1 bottle of beer"
    } else if ( num === 0 ) }
      return "no bottles of beer";
      else {
      return num + " bottles of beer";
    }
  },
};
  action: function( num ) {
      if( num === 10 ) {
        return " take it down, pass it around, " ;
      } else if ( num === 0) {
        return "Go to the store, buy some more, ";
      } else {
        return "Take it down, pass around, ";
      }
    };











// ( i = 0, i <= 0 , i-- ;



// // var sergeSays = function ( input) {
// //   if (input [ input.length - 1 ] === '?') {
// //         console.log ( "Sure" );
// //   }   else if (input === input.toUpperCase() ) {
// //     console.log ( " Whoa, chill out. ");
// //   } else if (input [ input.length - 1 ] === '?' ) {
// //   }
// // };
// //
// // sergeSays('');
// // sergeSays ("Hey!")
// //
// // debugger
//
// // var alphabetAsString = "abcdeghijklmnopqrstuvwxz";
// // var alphabetArray = alphabetAsString.split('');
// //
// // var tenthLetter = [11];
// // var fifthLetter = [6];
// // var lastLetter = [25];
// //
// // console.log(tenthLetter, fifthLetter, lastLetter);
//
//
// // var blah = function(x, y)
// //   var x = 5;
// //   var y = 7;
//
// // console.log()
// //
// // var serge1 = [?];
// // var serge2 = [capitals];
// // var serge3 = [no response];
//
// // Serge Says
// // Serge answers 'Sure.' if you ask him a question.
// // He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
// // He says 'Fine. Be that way!' if you address him without actually saying anything.
// // He answers 'Whatever.' to anything else.
// // Create a function that takes an input and returns Serge's response.
//
// // var one = 'Woah, chill out!'
// // var two = 'Fine. Be that way!'
// // var three = 'Whatever'
// //
// // var question = function() { // Create a function that takes an input and returns Serge's response.
// //   var serge3 = function.toUpperCase();
// //
// //   if ( ){
// //      Statement(s) to be executed if expression 1 is true // He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
// //   }
// //
// //   else if (){
// //      Statement(s) to be executed if expression 2 is true // He says 'Fine. Be that way!' if you address him without actually saying anything.
// //   }
// //
// //   else{
// //      Statement(s) to be executed if no expression is true // He answers 'Whatever.' to anything else.
// //   }
// //
// // }
// //
// // console.log('Woah, chill out!');
// // console.log('Fine. Be that way!');
// // console.log('Whatever')
//
// //
// //
// //
// // //Serge says
// // function serge (response) { // Write a function named calculateAge that:
// //   var one = 'Woah, chill out!'
// //   var two = 'Fine. Be that way!'
// //   var three = 'Whatever'
// //
// //     if ( ){
// //        Statement(s) to be executed if expression 1 is true // He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
// //     }
// //
// //     else if (){
// //        Statement(s) to be executed if expression 2 is true // He says 'Fine. Be that way!' if you address him without actually saying anything.
// //     }
// //
// //     else{
// //        Statement(s) to be executed if no expression is true // He answers 'Whatever.' to anything else.
// //     }
// //
// //   }
// //     console.log('Woah, chill out!');
// //     console.log('Fine. Be that way!');
// //     console.log('Whatever')
// // };
//
//
//
//
//
//
//
//
//
//
// // var str1 = "This is a STRING.";
// // var str2 = str1.toUpperCase();
// // document.write(str2);
//
// // Output: THIS IS A STRING.
//
//
//
//
// // var nullItem = sillyArray[3];
// // var innerArray = sillyArray[4];
// //
// // var falseSearch = sillyArray.indexOf(false);
// // console.log(falseSearch);
// //
// // var innerArrayItem = sillyArray[4][0];
// // innerArrayItem = innerArray[0];
// //
// // var innerArray = sillyArray[4].indexOf("INNER ARRAY 1");
// //
// // var emptyArr = [];
// // // var alphabet = ["a", "b", "c", "d", "e",];
// // //
// // // var alphabetAsString = "abcdeghijklmnopqrstuvwxz";
// // // var alphabetArray = alphabetAsString.split('');
//
// //
// //
// // var caps = "maths";
// //          if(  === "history" ){
// //             document.write("ALLCAPS");
// //          }
// //
// //
// // var book = "maths";
// //          if( book == "history" ){
// //             document.write("<b>History Book</b>");
// //          }
// //
// //          else if( book == "maths" ){
// //             document.write("<b>Maths Book</b>");
// //          }
// //
// //          else if( book == "economics" ){
// //             document.write("<b>Economics Book</b>");
// //          }
// //
// //          else{
// //             document.write("<b>Unknown Book</b>");
// //          }
