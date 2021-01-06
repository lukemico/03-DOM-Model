// // var sayHello = function () {
// //   console.log( "Hello");
// // };
//
//
// // const sayHi = () => {
// //   console.log( "Hi" );
// // };
// //
// // sayHi();
// //
// // const addNums = ( x, y ) => {
// //   console.log( x + y );
// // };
// //
// // addNums( 4, 5);
// // addNums( 4, 12 );
// //
// // const square = ( num ) => {
// //   return num * num;
// // };
// //
// //
// // const result = square( 5 );
// // console.log( result );
// //
//
// //
// // const addImplicit = ( x, y ) => x + y;
// //
// //   console.log( addImplicit ( 20, 22);
// // );
//
// // [1, 2, 3, 4, 5 ].forEach( function ( num ) {
// //   console.log( "An iteration ran", num );
// // });
// //
// //
// // [1, 2, 3, 4, 5 ].forEach(( num ) => {
// //   console.log( "An iteration ran", num );
// // });
//
// // const nums = [ 3, 6, 9 ];
// //
// // const multipliedByFive = nums.map(function ( currentNum ) { // ES2015 version
// //   return currentNum * 5;
// // });
// //
// // const implicit = nums.map( (n) => n * 5); //ES6 version, 1 line compared to 3.
// // console.log( implicit );
// //
// // console.log( multipliedByFive );
//
// const myNums = [ 1, 2, 3, 4, 5, 6 ];
//
// // const evenNums = myNums.filter( function ( num ) {
// //   return num % 2 ===0;
// // });
// //
// // console.log( evenNums );
//
// const evenNums = myNums.filter( (n) => n % 2 === 0 );
// console.log( evenNums );
//
// var greet = function ( name ) {
//   if ( name === undefined ) {
//     name = "World";
//   }
//   console.log( "Hello " + name );
// };
//
// greet( "Jane" );
// greet();
//
//
// // const greeting = ( name ) => {
// //   if ( name === undefined) {
// //     name = 'World'
// //   }
// //   console.log( "Hello " + name);
// // };
// //
// // greeting( "Jane" );
// // greeting();
//
// var greet = function ( name = "Worldy World" ) {
//   console.log( "Hello " + name );
// };
//
// greet( "Jane" );
// greet();
//
// const greeting = ( name = "Worldy Worldy World" ) => {
//   if ( name === undefined) {
//     name = 'World'
//   }
//   console.log( "Hello " + name);
// };
//
// greeting( "Jane" );
// greeting();
//
// const addTwoNums = ( x = 0, y = 0 ) => {
//   console.log( x + y );
// };
//
// addTwoNums( 10, 2);
// addTwoNums( 10 );
// addTwoNums();
//
//
// const firstName = "Groucho";
// const lastName = "Marx";
//
// let fullName = firstName + " " + lastName;
// fullName = firstName + ' ' + lastName;
//
// fullName = `${firstName} ${lastName}`;
// console.log( fullName );
//
//
// const greetBest = (name = "World") => `Hello ${name}`;
//
//
// const janeGreeting = greetBest( "Jane" );
// const worldGreeting = greetBest();
//
// console.log( janeGreeting, worldGreeting );
//
//
//
//
// // JACK'S Code Below
//
//
// // Arrow Functions
//   // Shorthand
//     // const functionName = () => {};
//   // Implicit Return
//     // const implicitReturned = () => 42;
//     // This will always return 42
//
// // var sayHello = function () {
// //   console.log("Hello");
// // };
//
// // const sayHi = function () {
// const sayHi = () => {
//   console.log("Hi");
// };
//
// sayHi();
//
// const addNums = ( x, y ) => {
//   console.log( x + y );
// };
//
// // addNums( 4, 5 );
// // addNums( 4, 9 );
//
// // const square = ( num ) => {
// //   return num * num;
// // };
//
// const square = ( num ) => num * num;
//
// const result = square( 5 );
// console.log( result );
//
// const addImplicit = ( x, y ) => x + y;
//
// console.log(
//   addImplicit( 20, 22 )
// );
//
// // document.addEventListener("click", function () {
// //   console.log("The page was clicked");
// // });
// document.addEventListener("click", () => {
//   console.log("The page was clicked");
// });
//
// // [ 1, 2, 3, 4, 5 ].forEach(function ( num ) {
// //   console.log( "An iteration ran", num );
// // });
// [ 1, 2, 3, 4, 5 ].forEach(( num ) => {
//   console.log( "An iteration ran", num );
// });
//
// const nums = [ 3, 6, 9 ];
//
// const multipliedByFive = nums.map(function ( currentNum ) {
//   return currentNum * 5;
// });
//
// const implicit = nums.map( (n) => n * 5 );
// const implicitTwo = nums.map(n => n * 5);
//
// console.log( implicit );
// console.log( implicitTwo );
//
// console.log( multipliedByFive );
//
// const myNums = [ 1, 2, 3, 4, 5, 6 ];
//
// const evenNums = myNums.filter(function ( num ) {
//   return num % 2 === 0;
// });
// // const evenNumbers = myNums.filter( ( n ) => {
// //   return n % 2 === 0;
// // });
// // const evenNumbers = myNums.filter( ( n ) => n % 2 === 0 );
// const evenNumbers = myNums.filter(n => n % 2 === 0);
//
// console.log( evenNums );
// console.log(evenNumbers);
//
// console.clear();
//
// // var greet = function ( name ) {
// //   if ( name === undefined ) {
// //     name = "World";
// //   }
// //   console.log( "Hello " + name );
// // };
//
// var greet = function ( name = "World" ) {
//   console.log( "Hello " + name );
// };
//
// greet( "Jane" );
// greet();
//
// // const greeting = ( name ) => {
// //   if ( name === undefined ) {
// //     name = "World";
// //   }
// //   console.log( "Hello " + name );
// // };
// const greeting = ( name = "World" ) => {
//   console.log( "Hello " + name );
// };
//
// greeting( "Jane" );
// greeting();
//
// const addTwoNums = ( x = 0, y = 0 ) => {
//   console.log( x + y );
// };
//
// addTwoNums( 10, 2 );
// addTwoNums( 10 );
// addTwoNums();
//
// const firstName = "Groucho";
// const lastName = "Marx";
//
// let fullName = firstName + " " + lastName;
// fullName = firstName + ' ' + lastName;
//
// fullName = `${firstName} ${lastName}`;
// console.log( fullName );
//
// const brand = "Wurlitzer";
// const keys = 64;
//
// // My Wurlitzer keyboard has 64 keys, or 8 octaves
// const msg = `My ${brand} keyboard has ${keys} keys, or ${keys / 8} octaves.`;
// console.log( msg );
//
// const greetBest = (name = "World") => `Hello ${name}`;
//
// const janeGreeting = greetBest( "Jane" );
// const worldGreeting = greetBest();
//
// console.log( janeGreeting, worldGreeting );
//
// const title = "My blog post";
// const subheading = "All about something";
//
// const html = `<h1>Title: ${title}</h1><h2>Subheading: ${subheading}</h2>`;
// console.log( html );
//
//
//
// console.clear();

// let details = ["Groucho", "Marx", "Duck Soup" ];
//
// Array Destructuring
//
// let [ firstName, lastName, bestMovie ] = details;
//
//
// // let firstName = details[0];
// // let lastName = details[1];
// // let bestMovie = details [2];
//
// console.log( firstName, lastName, bestMovie );

// let userDetails = [ "Jane", "Serge", "jane@ga.co", "42" ];
// const [ firstName, partnerName, email, num ] = userDetails;
//
// console.log( first, email, num );

// const explorer = {
//   first: "jacques",
//   last: "Cousteau"
// };
//
// const { first: f, last } = explorer;
//
// // Or alternatively
//   // var f = explorer.first;
//   // var last = explorer.last;
//
// console.log( last );

// const weather = {
//   wind: "SSW",
//   currentTemp: 15,
//   units: "Celsious",
//   windStrength: "25 knots"
// };
//
// // Create variables for wind, currentTemp, units and windStrength
//   // Rename currentTemp to be temp
//   const { wind, currentTemp: temp, units, windStrength } = weather;
//
//
// // Create variables for post and user
// const blogPost = [ { postTitle: "Heading" }, { userName: "Ron" } ];
// const [ post, user ] = blogPost;
// console.log( post, user );
//
// const = letters = "abcde";
// const = alphabet = [...letter ];
//
// console.log( alphabet );

// let arrOne = [ "A", "B", "C" ];
// let arrTwo = arrOne;
//
// arrOne.push ( "D" );
// console.log( arrTwo );

// Rest Operators
//
// const receiveNumbers = ( x, y, z, numFour, numFive ) => {
//   console.log( x, y, z );
// };
//
// receiveNumbers( 1, 2,3 );

// const receiveNumbers = ( ...nums ) => {
//   console.log( nums );
// };
//
// receiveNumbers( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 );
//
// const addInfinitely = ( ...nums ) => {
//   const res = nums.reduce((sum, num) => {
//     return sum + num;
//   }, 0 );
//   console.log( res );
// };
//
// addInfinitely( 1, 2, 3, 4 );

// const [ "Groucho", "Marx", "Duck Soup", "Animal Crackers", "Horse Feathers", "A Night At The Opera"];
//
// const [ fname, lname, ...movies ] = groucho;
  // The first item will be stored in a const called fname
  // The second item will be stored in a const called lname
  // The rest of the items will be stored in array called movies

// const firstName = "Groucho";
// const lastName = "Marx";
// const job = "Actor || Comedian";
//
// const groucho = {
//   firstName,
//   lastName,
//   job,
//   somethingElse: true
// };
//
// console.log( groucho );

// const temp = 15;
// const windDirection = "SWW";
// const windSpeed = 25;
// const units = "Celsius";
//
// const weather = { temp, windDirection, windSpeed, units };
// console.log( weather );
//
// const title = "Modal Title";
// const modal = {
//   // open: function () {}
//   title,
//   backgroundColor: "rebeccapurple",
//   open() {
//     console.log( "Modal opened");
//   },
//   close() {
//     console.log( "Modal closed");
//   }
// }
//
//
// class Shape
//   constructor() {
//       console.log( "shape");
// }
// sayHi() {
//
// }

// Person
  // speak
  // greet

// Enemy
  // kill

  const person = "lady";
  const speak = "Hello";
  const greet = "Ciao";

  const action = { person, speak, greet };
  console.log( action );
