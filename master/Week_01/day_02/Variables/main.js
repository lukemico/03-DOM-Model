// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?

var numKids  = 5; // Store the following into variables: number of children, partner's name, geographic location, job title.
var partner  = 'Rhonda'; // Store the following into variables: number of children, partner's name, geographic location, job title.
var geolocation = 'Japan'; // Store the following into variables: number of children, partner's name, geographic location, job title.
var jobTitle = 'sumo instructor'; // Store the following into variables: number of children, partner's name, geographic location, job title.

var future = 'You will be a ' + jobTitle + ' in ' + geolocation + ', and married to ' + partner + ' with ' + numKids + ' kids.'; //Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
console.log(future);


// The Age Calculator
// Forgot how old someone is? Calculate it!

var birthYear = 1984; // Store the current year in a variable.
var currentYear  = 2016; // Store their birth year in a variable.

var age  = currentYear - birthYear; // Calculate their 2 possible ages based on the stored values.
console.log('They are either ' + age + ' or ' + (age - 1)); // Output them to the screen like so: "They are either NN or NN", substituting the values.



// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

var numKids  = 36; // Store your current age into a variable.
var maxAge = 99;// Store a maximum age into a variable.
var numPerDay = 14; // Store an estimated amount per day (as a number).
var totalNeeded = (numPerDay * 365) * (maxAge - age); // Calculate how many you would eat total for the rest of your life.
console.log("You will need " + totalNeeded + " to last you until the ripe old age of " + maxAge); // Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".



// The Geometrizer
// Calculate properties of a circle, using the definitions here.

var radius = 23; // Store a radius into a variable.
var circumference = (radius * 2); // Calculate the circumference based on the radius,
console.log("The circumference is " + circumference); // and output "The circumference is NN".

// var area = PI * radius ; // Calculate the area based on the circumference, I'm sure how to calculate Area??
// console.log("The area is " + area); // and output "The area is NN".


// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.

var celsius = 23; // Store a celsius temperature into a variable.
var tempCtoF = ( celsius * 9 ) / 5 + 32; // Convert it to fahrenheit and output "NN is NN°F". I had to Google the formula to convert celsus to fahrenheit - T(°F) = T(°C) × 9/5 + 32
console.log( celsius + '°C is ' + tempCtoF + '°F' );
var fahrenheit = 74.3;// Now store a fahrenheit temperature into a variable.
var tempFtoC = ( (fahrenheit - 32) * 5)/9; // Convert it to fahrenheit and output "NN is NN°F". I had to Google the formula to convert fahrenheit to celsius - T(°C) = (T(°F) - 32) × 5/9
console.log( fahrenheit + '°F is ' +  tempFtoC + '°C.' );// Convert it to celsius and output "NN°F is NN°C." My calculation is off by 0.5 I think. I need to work of formula's as I'm not 100% across the order of operations for the calculation. After much math formula searching, I tihkn I got closer but not 100% sure.
