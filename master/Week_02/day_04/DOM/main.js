   node.addEventListener( 'eventtype', callback')
  var button =
    document.querySelector("#myButton");

  var annoyUser = function() {
    console.log("I am annoying");
  };

button.addEventListener( 'click', annoyUser);


    // I want to create a function
      // it will only run when a user cicks a button
      // All it does is console logs something

// Find the DOM node
  var appearanceButton = document.querySelector("#appearance");
    console.log(appearanceButton);
  // Figure out the callback
    // I want to change the background of the body tag
    // I want to change the colour of all of the text
    var changePageAppearance = function() {
      document.body.style.background = "hotpink";

      if (currentBackground === "hotpink" ) {
        document.body.style.background = "gainsboro";
      }
};
  // Figure out the event type
    // Click

  // Bind the event type, the DOM noe and the callback function with addEventListener

appearanceButton.addEventListener( 'click' , changePageAppearance );

// I'm listening for a click event on the button with id lorem
  // When that takes place...
    // Create a new paragraph text
    // Set the text of the to be lots of lorem ipsum
  // Place the paragraph at the end of the body tag

var loremButton = document.querySelector("#loremButton");
  loremButton.addEventListener("click", function () {
    console.log("the buton was clicked");

var newParagraph = document.createElement ("p");
    newParagraph.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    document.body.appendChild(newParagraph);
  });

var myCallback = function() {
  console.log("This should run");
};

var temp = document.querySelector( ".temporary" );
temp.addEventListener( "click" , myCallback );
temp.removeEventListener( "click" , myCallback );

// Events require: a DOM node, a callback, an event type and something that binds them all together (event listener)
//
// var eventButton = document.querySelector("#event");
// var anotherCallback = function (event) {
//     console.log(event);
// };
// eventButton.addEventListener("click", anotherCallback );
//
// var myHeading = document.querySelector("h1");
// var salmoizeText = function () {
//   console.log("Salmoize this up");
// };
// myHeading.addEventListener("click", salmonizeText);
//
// var scrolled = function ()  {
//   console.log("Scrolled");
// };
// window.addEventListener("scroll", onBrowserScroll );
//
// var onMouseMove = function ( e ) {
//   var xPos = e.clientX;
//   var yPos = e.clientY;
//   console.log("X Position", xpos, "Y Position:", yPos);
// };
// document.body.addEventListener( "mousemove", onMouseMove);
//
// window.addEventListener("resize", function () {
//   var currentWidth = window.innerWidth;
//   console.log("Curent Width:", currentWidth);
// });
//
// var bill = document.querySelector("#bill");
// var makeBillBigger = function () {
//   console.log("Enlarge the photo of Bill");
// };
//
// bill.addEventListener("click", makeBillBigger);
//
// var nick = document.querySelector("#nick");
// var makeNickBigger = function () {
//   console.log("Enlarge the photo of Nick");
// };
//
// nick.addEventListener("click", makeNickBigger);
//
// var steve = document.querySelector("#steve");
// var makeSteveBigger = function () {
//   console.log("Enlarge the photo of Steve");
// };
//
// steve.addEventListener("click", makeSteveBigger);
//
// var allImages = document.querySelectorAll("img");
//   console.log(allImages);
//
// var makeImageBigger = function () {
//   this.style.width = "350px";
//   // this refers to the DOM node that was being interacted with
// };
//
// if (currentWidth === "300px") {
//   this.style.width = "200px";
// } else {
//   this.style.width = "300px";
// }

  for ( var i = 0; i < allImages.length; i += 1 ) {
    var currentImage = allImages[i];
    currentImage.addEventListener ("click", makeImageBigger
    );
}

// What element do you care about? DOM node of window
// What do ou want t do? Your callback function
// What is your event type? 'click', 'scroll' ...
// Create an event listener that joins all of those thinfs together
// 'this' is also a factor


// window.setTimeout( callback, delayinMilliseconds) );

var logUserOut = function ()  {
  console.log("You have been inactive for awhile, you have been logged out");
};

// Delay the execution of logUserOut by 1 second
window.setTimeout( logUserOut, 5000 );

var saveAtRegularintervals = function () {
  console.log("We have just auto-saved your work, you can thank us later");
};
// // I want to save the user's work every1 second
// window.setInterval( saveAtRegularintervals );


// I want to spawn an enemy every three seconds
  var spawnEnemy = function () {
    console.log("A new enemy is born");
  };

var enemyTimerID = window.setInterval( spawnEnemy, 500 );
  console.log(enemyTimerID);

var stopSpawningEnemies = function () {
  window.clearInterval(enemyTimerID );
};

  // But I also want to be able to stop this
