// var doSomething = function () {
//   console.log("I did something");
// };
//
// doSomething(); // Call site
// doSomething(); // Call site
// doSomething(); // Call site

// var multiplyFiveByFive = function () {
//   console.log(5 * 5);
// };
// //
// var sayHi = function () {
//   var message = "Hello";
//   console.log( message );
// };
//
// sayHi();
// sayHi();
//
// var functionExpression = function () {
//   console.log("I am a function expression");
// };
//
// function funcDeclaration () {
//   console.log("I am a function declaration");
// };
//
// var sayHello = function ( name ) {
//     var msg = "Hello " + name;
//     console.log(msg);
// };
//
// sayHello();
// sayHello("Groucho");
// sayHello("Harppo");
// sayHello("Zeppo");
//
// var add = function () {
//   console.log( 5 + 5 );
// }
//
// add();
//
//
// var add = function (firstNum, secondNum ) {
//   var result = firstNum + secondNum;
//   console.log( result );
//   // console.log( 5 + 5);
//
// };
//
// add( 10, 42 );
// add( 2, 9 );
// add( 2, 2982 );
//
//
//
//
// var createFullName = function ( first, last) {
//   var  fullName = first + " " + last;
//   console.log(fullName);
// };
//
// createFullName( "Groucho", "Marx" );
// createFullName( "Chris", "Barnaby" );
// createFullName( "Hayley", "Petrov" );
// //
// //
// var createFullName = function (firstName, lastName) {
//   var Olivia = createFullName(firstName + lastName);
//   console.log(Olivia); // => "Olivia Basheer"
// };
//
// createFullName( "Groucho", "Marx" );
// createFullName( "Chris", "Barnaby" );
// createFullName( "Hayley", "Petrov" );
// createFullName( "Olivia", "Basheer" );

//
//
// var add = function (firstNum, secondNum ) {
//   var result = firstNum + secondNum;
//   return result;
//   // console.log( 5 + 5);
//
// };
//
//
//
// // var multiply = function (x, y) {
// //   return x * y; // Return statement needs to be last line. Everything after is irrelevant.
// // };
//
// var res =  multiply(1, 4);
// console.log( res);
//
//
// var res = multiply( multiply(1, 4), 5);
//   console.log( res );
//
//
// var sayHello = function( name ) { name = "Groucho" }
//   debugger;
//   var msg = "Hello";
//   console.log(msg);
// };
//
// sayHello( "Groucho" );
//
// var globalVar = "GLOBAL VAR";
//
// var aNewFunctionScope = function () {
//     var localScoped = "LOCAL SCOPED VAR";
//
//     console.log(globalVar, localScoped);
// };
//
// aNewFunctionScope();
//
// // we have got our global scope
// var myGlobalVariable = "A GLOBAL BAR " ;
//
// var myFirstScope = function () {
//     var myLocalVariable = " A LOCAL VAR " ;
//
//     var mySecondScope = function () {
//       var myVeryLocalVar = " A VERY LOCAL VAR " ;
//     };
//
// // from here you can see global variables and variables created in this function
//   console.log(myGlobalVariable, myLocalVariable);
// };
//
// myFirstScope();
// console.log(MyLocalVar, MyLocalVariable, MyGlobalVariable);
//
//
//
//
//
//
// # Exercises: Functions
//
// ## The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Write a function named tellFortune that:
// - takes 4 arguments: number of children, partner's name, geographic location, job title.
// - outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// - Call that function 3 times with 3 different values for the arguments.
//
var kids = 3;
var partner = Sandy;
var country = Japan;
var job =


console.log("You will be a X in Y, and married to Z with N kids.")

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
// ## The Age Calculator
//
// Forgot how old you are? Calculate it!
//
// Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// - outputs the result to the screen like so: "You are either NN or NN"
// - Call the function three times with different sets of values.
// - Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
//
// ## The Lifetime Supply Calculator
//
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Write a function named calculateSupply that:
// - takes 2 arguments: age, amount per day.
// - calculates the amount consumed for rest of the life (based on a constant max age).
// - outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// - Call that function three times, passing in different values each time.
// - Bonus: Accept floating point values for amount per day, and round the result to a round number.
//
//
//
//
//
//
//
// ## The Geometrizer
//
// Create 2 functions that calculate properties of a circle.
//
// Create a function called calcCircumfrence:
//
// - Pass the radius to the function.
// - Calculate the circumference based on the radius, and output "The circumference is NN".
//
// Create a function called calcArea:
//
// - Pass the radius to the function.
// - Calculate the area based on the radius, and output "The area is NN".
//
// ## The Temperature Converter
//
// It's hot out! Let's make a converter.
//
// Create a function called celsiusToFahrenheit:
// - Store a celsius temperature into a variable.
// - Convert it to fahrenheit and output "NN°C is NN°F".
// - Create a function called fahrenheitToCelsius:
//
// Now store a fahrenheit temperature into a variable.
// - Convert it to celsius and output "NN°F is NN°C."
