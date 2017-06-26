// $(document).ready( function(){
//
//   $('.square').on("click", function(){
//     $(this).addClass("animated bounce");
//     console.log(this);
//
//   });
// }); // end docready

$(document).ready( function(){
 });

var currentPlayer = 0, player1, player2;

function Cell(){
 tCell = new Sprite(game, "blank.png", 100, 100);
 tCell.setSpeed(0);
 tCell.state = BLANK;
 tCell.images = new Array("blank.png", "donut.png", "eclair.png");
 tCell.checkClick = function(){
  if (this.isClicked()){
   if (this.state === BLANK){
    this.state = currentPlayer;
    this.setImage(this.images[currentPlayer]);
    //change the player
    if (currentPlayer === X){
     currentPlayer = O;
    } else {
     currentPlayer = X;
    } // end if
   } // end if
  } // end if
}; // end checkClick
 return tCell;
} // end cell






//
//   $('.square').on("click", function(){
//     $(this).fadeIn("slow");
//   });
// }); // end docready









// var player_one = 1;
// function display_input(square){
//     if ( player_one == 1 ){
//         document.getElementById(square).innerHTML = "X";
//         player_one = 0;
//     } else {
//         document.getElementById(square).innerHTML = "O";
//         player_one = 1;
//     }
// }



//
// <div id="clickme">
//   Click here
// </div>
// <img id="book" src="book.png" alt="" width="100" height="123">
//
// // With the element initially hidden, we can show it slowly:
// $( "#clickme" ).click(function() {
//   $( "#book" ).fadeIn( "slow", function() {
//     // Animation complete
//   });
// });





//
// $('.second').on("click", function(){
//    $(this).addClass("animated bounce")
//            .one( animationEnd, function(){
//              $(this).removeClass( "animated bounce" );
//              $(this).addClass("animated pulse").one( animationEnd, function(){
//                // Remove all residual classes
//                $(this).removeClass( "animated pulse bounce" );
//              });
//            });
//  });

// $(document).ready( function(){
//
// // Store this horrible string in a variable so we never need to look at it again
//
//   var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
// });
//   $(".square").on("click", function(){
//
//     $(this).addClass("animated bounce")
//             .one( animationEnd, function(){
//
//               $(this).removeClass( "animated bounce" );
//   });
// });
//  // end docready
