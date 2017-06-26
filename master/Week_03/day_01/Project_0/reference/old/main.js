$(document).ready( function(){
  });

  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $('.square').on("click", function(){
    $(this).addClass("animated bounce");
    .one( animationEnd, function(){
                  $(this).removeClass( "animated bounce" );
      });
  }); // end docready

// var squares = ['square 1', "square 2", "square 3", "square 4", "square 5","square 6","square 7", "square 8", "square 9"];
//
// var clicks = 0;
//     function onClick() {
//         clicks += 1;
//         document.getElementById("clicks").innerHTML = clicks;
//     };
//
// <div id="square 1">
// </div>
// <img id="donut" src="donut.png">
//     // With the element initially hidden, we can show it slowly:
//     $( "#clickme" ).click(function() {
//     $( "#book" ).fadeIn( "slow", function() {
//     // Animation complete
//       });
//     });




// $(document).ready( function(){
//
// // Store this horrible string in a variable so we never need to look at it again
//
//   var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
//
//   $('.square').on("click", function(){
//
//     $(this).addClass("animated bounce")
//
//             .one( animationEnd, function(){
//
//               $(this).removeClass( "animated bounce" );
//   });
// }); // end docready






// // TIC TAC TOE
// // LOGIC

// START GAME


// // SQUARE
//
//
// // LINE
//
//
// // WIN
// // player1 = 'x',
// // player2 = 'o',
// // context, totalSquares = 9,
// // firstTurn = true,
// // twoPlayer = false,
// // board, win = [
// //     [0, 1, 2],
// //     [3, 4, 5],
// //     [6, 7, 8],
// //     [0, 3, 6],
// //     [1, 4, 7],
// //     [2, 5, 8],
// //     [0, 4, 8],
// //     [2, 4, 6]
// // ];
//
// // LOSE

// for (var square = 0; i <= 8; i++) {
//     if (i % 2 === 0) {
//         console.log(i + ' is a donut');
//     } else {
//         console.log(i + ' is an eclair');

// for (var square = 0; i <= 8; i++) {
//     if (i % 2 === 0) {
//         console.log(i + ' is even');
//     } else {
//         console.log(i + ' is odd');
//     }
// }
//
// (function() {
//     var ui = {
//             board: document.querySelector('.board'),
//             squares: document.querySelectorAll('.square'),
//             restart: document.querySelector('.restart'),
//             scores: {
//                 scores: document.querySelector('.scores'),
//                 swap: document.querySelector('.swap'),
//                 player1: document.querySelector('.player1 .score'),
//                 player2: document.querySelector('.player2 .score'),
//                 ties: document.querySelector('.ties .score'),
//                 turn1: document.querySelector('.player1'),
//                 turn2: document.querySelector('.player2'),
//                 turnTies: document.querySelector('.ties')
//             }
//         },
//         computerScores = {
//             player1: 0,
//             player2: 0,
//             ties: 0
//         },
//         twoPlayerScores = {
//             player1: 0,
//             player2: 0,
//             ties: 0
//         },
//         player1 = 'x',
//         player2 = 'o',
//         audio = {},
//         context, totalSquares = 9,
//         hasLocalStorage, muted, playing, turn = true,
//         firstTurn = true,
//         twoPlayer = false,
//         delay = 300,
//         playerChance = 0.75,
//         board, win = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [0, 4, 8],
//             [2, 4, 6]
//         ];

// var square ="",

// var square 1 = 0,
// var square 2 = 1,
// var square 3 = 2,
// var square 4 = 3 ,
// var square 5 = 4,
// var square 6 = 5,
// var square 7 = 6,
// var square 8 = 7,
// var square 9 = 8,

// function selectSquare(index) {
//
// function initSquare(index) {
//
// function start() {
//
// function init() {
//
// function toggleTwoPlayer() {
//
// function updateBoard(player, index) {
//
// function updateTurn() {
//
// function endGame(winner, sq) {
//         switch (winner) {
//             case player1:
//
// function isGameOver() { //
//
