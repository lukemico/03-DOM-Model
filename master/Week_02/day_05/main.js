// console.log(" The file was loaded");
//
//
// document.getElementById( "id);
//
//   It will either return
//     the DOM node that it finds
//     or null
//     Uses the DOM traversal behind the scenes
//
// var mainHeading =
//   document.getElementById( 'mainHeading' );
//
// var bill = document.getElementById( 'bill' );
//
// var importantparagraph =
//     document.getElementById( 'important' );
//
// console.log( mainHeading, bill, importantParagraph );
//
// documents.getElementsByTagName( "tag" )
//   it will return a DOM collection (very similar to an array)
//       It could be empty
//       It could contain a list of individual DOM nodes
//
// Create allParagraphs by selecting every p tag
// Create var allImages by selecting all img tags
//
// // var allParagraphs =
// //   document.getElementsByTagName( "p" );
// //
// //   var allImages =
// //     document.getElementsByTagName( "p" );
// //
// // console.log( allParagraphs, allImages );
// //
// // var allListItems =
// //   document.getElementsByTagName( "li" );
// // //
// // // console.log( li );
// //
// // for (var index = 0; index < allListItems.length; index += 1) {
// //   var currentItem = allListItems;{index};
// //   var currentText = currentItem.innerText;
// //
// //   console.log(currentItem);
// // }
// //
// //
//
//
// // Traverse the DOM and create a variable of all images
// // Loop through all of the images
//   // For each iteration, create a variable called currentImage, and log it out
//
// // var allImages  =
// //   document.getElementsByTagName( 'images' );
// //
// // for (var i = 0; i < allImages.length; i++) {
// //   array[i]
// //   var currentImage =
// // }
// // console.log(currentImage);
//
// // console.clear();
// //
// // var allTodos = documents.getElementsByClassName( "todo" );
// // console.log(allTodos);
// //
// // for (var j = 0; i < )
//
//
// // document.querySelector( "any valid CSS" );
//   // it wil return the first thing it finds or null
// //
// //   var firstImage = document.querySelector("img");
// //   var bill = document.querySelector("#bill");
// //   var firstCage = document.querySelector(" .cage");
// //
// //   console.log(firstImage, bill, firstCage);
// //
// // // document.querySelectorAll(" any valid CSS");
// //   // It will reu=turn a DOM Collection (similar to an array. It will either hav a DOM nodes in it or it will be empty)
// //
// // var allLorem = document.querySelectorAll(".lorem");
// // console.log("alllorem");
// //
// // // I want to select all the li thay are withina ul
// //
// // var unorderedListItems = document.querySelectorAll("ul li");
// // console.log("unorderListItems");
// //
// //
// //
// // // 1 document.querySelectorAll("image");
//
// // try again!
//
// // 2 document.querySelectorAll("nav");
// // o: nav
//
// console.clear();
//
// // DOM node.getAttribute("getAttribute");
//   var firstImage = document.querySelector("img");
//   var imageSource = firstImage.getAttribute("src");
//   console.log(imageSource);
//
// // I want to change the image of bill to actually be an image of StevenSeagal
//
// var desiredSource = "https://stevensegallery.com/200/200";
// firstImage.setAttribute("src", desiredSource);
//
//
// // Find the element that I care aout - .ga
//   // what attribute do you care about? - href
//     // Log this out
//
// var gaLink = document.querySelector(".ga");
// var currentHref = gaLink.getAttribute("href");
// console.log(currentHref);
//
// var desiredHref = "https://generalassemb.ly";
// gaLink.setAttribute("href", desiredHref);
//
// // I want to change the text from a link - Ga to a link to General Assembly
// var currentText = gaLink.innerText;
// console.log(currentText);
//
// gaLink.innerText = "A Link to General Assembly (UPDATED)";
// gaLink.innerText += "!!!";
//
// Select all list items in an ordered list.
// Loop hrough each of them
// Create a variable to do with the current item
// Print out the current text
// Update the text to do somehthing like TOTO#1
// Print out the next text
//
// console.clear();
//
// var listItems = document.querySelectorAll("ol li");
//
//
//
// for (var i = 0; i < listItems.length; i += 1) {
//   var currentTodo = listItems[i];
//   var currentText = currentTodo.innerText;
//   currentTodo.innerText = "TODO #SOMETHING" + (i + 1);
//
//   console.log(currentTodo);
// }
//
// Create a variable called body
//   Change the background color to be__
//   Change the font size to be 50px
//   Change the default font color to be salmon
//
//
//   var body = document.body;
//
// //   body.style.backgroundColor = "lightslategray";
// //
// //   body.style.fontsize = "50px";
// //
//   body.style.color = "salmon";
//
//   body.style.textAlign = "center";
//
// // Select the link
//   var ga = document.querySelector(".ga");
// // Remove the underline
//   ga.style.textDecoration = "none";
// // Change the color to Hot Pink
//   ga.style.color = "hotpink";
// // Change the display to block
//   ga.style.display = "block";
//
//
//
// // The Logo Hijack
// var logo = document.querySelector("#hplogo");
// var desiredBackground = "url(http://www.underconsideration.com/brandnew/archives/yahoo_logo_detail.png)";
// logo.style.backgroundImage = desiredBackground;
//
// var input = document.querySelector(".jsb input");
// input.getAttribute("value");
// input.setAttribute("value", "Yahoooo!");
//
// console.clear();
//
// var body = document.body;
// body.innerHTML = "";
//
// var newParagraph = document.createElement ("p");
// // This creates a DOM noe but it is not on the page
//
// newParagraph.innerText.HTML = "Generated by JS";
// newParagraph.style.textTransform = "uppercase";
//
// body.appendChild( newParagraph );
//
// // Create, Manipulate and Inject
//
// // Create a new H2
// var h2 = document.createElement("h2");
// // Set the inner HTML to be "Dynamic"
// h2.innerHTML = "DYNAMIC";
// // Change the style of it - text align right
// h2.style.textAlign = "right";
// // Find the element with the class of Dynamic
// var div = document.querySelector(".dynamic");
// // Append the new h2 to it
// div.appendChild( "h2" );
//
//
//
// Create an image
// Set the source to be http://fillmurray.com/205/205
// Set the display block
// Append the image to .dynamic
//
// for (var i = 1; i <= 100; i++) {
//
// var newImage = document.createElement("img");
//
// newImage.setAttribute("src", "http://fillmurray.com/205/205");
//
// newImage.style.display = "block";
//
// var dynamicDiv = document.querySelector(".dynamic");
//   dynamicDiv.appendChild( newImage );
// }
//
//
//
// // DOM NODE.classlist
// // DOM NODE.classlist.add("someclass");
// // DOM NODE.classlist.remove("someclass");
//
// var dynamicDiv = document.querySelector(".dynamic");
// var currentClasses = dynamicDiv.classList;
// console.log(currentClasses);


// var $gaLink = $(".ga");
// $gaLink.html("A Link to General Assembly");
// $gaLink.css("display", "block");
// $gaLink.css({
//   color: "hotpink",
//   textDecoration: "none",
//   fontSize: "30px"
// });
//
//
// $mainHeading.hasClass("none");
// $mainHeading.addClass("none");
// $mainHeading.removeClass("none");
//
// // Create
//   var $newPara = $("<p></p>");
// // Manipulate
//   $newParagraph.html("Created with JS");
//   $newParagrpah.css({
//     color: "gainsboro"
//   });
// // Inject
// $(".dynamic").append( $newPara );
//
// //Create a new image
//   // Set the source to be
//   // src = "http://placekitten.com/200/300"
// //   // Add a border of 3px solid Black-hole
// //   // PLace it at the start of .dynamic
//
// var $img = $("<img>");
// img.attr("src", "https://placekitten.com/200/300");
// img.css({
//   border: "3px solid black"
// });
// img.prependTo(".dynamic");
//
//
//
// var $allImages = $("img");
//   // Returns a jQuery collection
// console.log( $allIMages, $allIMages.length );
//
// $allIMages.css("border", "10px solid red");
//
// var firstIMage = $allimages[0];
// console.log( firstImage );
//
// var $firstImage = $allimages.eq(0);
//   // Returns a jQuery collection of a single DOM node
// console.log( $firstImage );

//
// var $allTodos = $("ol li");
// for ( var i = 0; i < $allTodos.length; i++ ) {
//   var currentTodo = $allTodos.eq[ i ];
//   var desiredText = todoText + " - " + Math.random();
//   currentTdo.html( desiredText );
// }



var $allLorems = $(".lorem");

  $allLorems.each( function ( index, domNode ) {
    // console.log( this === domNode );
    $(this).css("opacity", Math.random() );
    $(this).html("Paragraph: " + index);

    // The keyword this refers to the document DOM node. We need to select it with jQuery.

  //   var $lorem = $( domNode );
  //   var currentText = $( domNode ).html();
  //   $lorem.html( "Paragraph: " + index );
  //   $lorem.css( "opacity", Math.random() );
  //   console.log( currentText );
  });
