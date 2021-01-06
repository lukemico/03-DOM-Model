// Objects!

// Log out the answers to all of the following questions!
// Here is some data that you can work with.

var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
};

// Multiply each value in objectToMap by a random number and return an object with the changed values

var randomNUm = _.random( objectToMap, function ( element, index, entire_array ) {
  return range * randomNum;
} );

// I wasn't able to get this to work...
// I'm getting stuck on element, index, entire_array and what values to put here.
// Or should this process be done in 2 steps with different functions?



// Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]

var arrayObject = _.pairs(objectToMap);
console.log( arrayObject );


// Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }

var flipObject = _.invert(objectToMap);
console.log( flipObject );


// Remove the "start" key from objectToMap in two different ways
var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
};


// Option 1
var omitKey = _.omit(objectToMap, "start");
console.log( omitKey );

// Option 2
var pickKey = _.pick(objectToMap, "middle", "end");
console.log( pickKey );
