// console.log("hello world");

// The goal of this exercise is to manipulate arrays by creating a function that can reverse an array and by creating a function that can flatten an array.
// Do not use any libraries to complete this task - write this stuff from scratch using standard JS methods and objects.

// Make two functions
// reverse
// flatten
// reverse( [1, 2, 3, 4] );
// // => [ 4, 3, 2, 1 ]
// flatten( ["Hello", ["World", 42] ] );
// // => [ "Hello", "World", 42 ]
// You only need to make flatten work to one level deep! You should be able to flatten this - ["Hello", ["World"]] - but not this - ["Hello", [[["World"]]]]

// Hint: You're going to need to be looping through the arrays to get a solution.

// Make two functions
//
// var a = [1,2,3,4];
// var b = reverseArr(a);
//
// function reverseArr(input) {
//     var ret = new Array[];
//     for(var i = input.length-1; i >= 0; i--) {
//         ret.push(input[i]);
//     }
//     return ret;
// }
//
// // var object = [1,2,3,4];
//
// function(number) {
//     var object = [1,2,3,4];
//
//     object.reverse(function(number) {
//         console.log(number);
//     });
// }

// var reverseObject = function(ob) {
// // reverse
// 	var toReturn ();
//
// 	for (var reverseObject) {
// 		if (i = 0, i >= 0 , i++)
// 	}
// }
//
// var flattenObject = function(ob) {
// // flatten
// 	var
//
// }
//
//
//
//
// var flattenObject = function(ob) {
// 	var toReturn = {};
//
// 	for (var i in ob) {
// 		if (!ob.hasOwnProperty(i)) continue;
//
// 		if ((typeof ob[i]) == 'object') {
// 			var flatObject = flattenObject(ob[i]);
// 			for (var x in flatObject) {
// 				if (!flatObject.hasOwnProperty(x)) continue;
//
// 				toReturn[i + '.' + x] = flatObject[x];
// 			}
// 		} else {
// 			toReturn[i] = ob[i];
// 		}
// 	}
// 	return toReturn;
// };



var arrayToReverse = [1,2,3,4,5,6,7,8,9];

var rev1 = function( array )    {
    var output = [];

    for( var i = array.length - 1; i >= 0; i -- ){
        output.push( array[i] );
    }

    console.log( output );
    return output;
};

// rev1( arrayToReverse );

var rev2 = function( array ){
    var output = [];
    newArray = array.slice();

    for( var rev2 = 0; i < array.length; i++){
        var index = newArray.shift();
        output.unshift( index );
    }
    console.log( output );
    return output;
};

rev2( arrayToReverse );






var flatten2 = function( array ) {
    
}
