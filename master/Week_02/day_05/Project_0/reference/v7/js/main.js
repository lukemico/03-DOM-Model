$(document).ready(function() {

  $(function() {

    var player = 1;
    var table = $('table');
    var messages = $('.messages');
    var turn = $('.turn');
    displayNextPlayer(turn, player);

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script type="text/javascript">
    $(document).ready(function(){
    	$("#image1").click(function(){
    		if($("#image1").attr("src") == "images/1.jpg"){
    			$("#image1").attr("src", "images/2.jpg");
    		}else{
    			$("#image1").attr("src", "images/1.jpg");
    		}
    	});
    });
    </script>


    $('td').click(function() {
      td = $(this);
      var state = getState(td);
      if(!state) {
        var pattern = definePatternForCurrentPlayer(player);
        changeState(td, pattern);
        if(checkIfPlayerWon(table, pattern)) {
          messages.html('Player '+player+' wins. DONUT TIME...');
          turn.html('');
        } else {
          player = setNextPlayer(player);
          displayNextPlayer(turn, player);
        }
      } else {
        messages.html('This box is already checked.');
      }
    });

    $('.reset').click(function() {
      player = 1;
      messages.html('');
      reset(table,td);
      displayNextPlayer(turn, player);
    });

  });

  function getState(td) {
    if(td.hasClass('image1') || td.hasClass('image2')) {
      return 1;
    } else {
      return 0;
    }
  }

  function changeState(td, pattern) {
    return td.addClass(pattern);
  }

  function definePatternForCurrentPlayer(player) {
    if(player === 1) {
      return 'donut';
    } else {
      return 'eclair';
    }
  }

  function setNextPlayer(player) {
    if(player === 1) {
      return player = 2;
    } else {
      return player = 1;
    }
  }

  function displayNextPlayer(turn, player) {
    turn.html('Player turn : '+player);
  }

  function checkIfPlayerWon(table, pattern) {
    var won = 0;
    if(table.find('.item1').hasClass(pattern) && table.find('.item2').hasClass(pattern) && table.find('.item3').hasClass(pattern)) {
      won = 1;
    } else if (table.find('.item1').hasClass(pattern) && table.find('.item4').hasClass(pattern) && table.find('.item7').hasClass(pattern)) {
      won = 1;
    } else if (table.find('.item1').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
      won = 1;
    } else if (table.find('.item4').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item6').hasClass(pattern)) {
      won = 1;
    } else if (table.find('.item7').hasClass(pattern) && table.find('.item8').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
      won = 1;
    } else if (table.find('.item2').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item8').hasClass(pattern)) {
      won = 1;
    } else if (table.find('.item3').hasClass(pattern) && table.find('.item6').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
      won = 1;
    } else if (table.find('.item3').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item7').hasClass(pattern)) {
      won = 1;
    }
    return won;
  }

  function reset(table) {
    table.find('td').each(function() {
      $(this).removeClass('image1').removeClass('image2');
    });
  }










  // function displayResult()
  //     {
  //         var firstRow=document.getElementById("table").rows[2];
  //         var x=firstRow.insertCell(-1);
  //         x.innerHTML="<img src='css/donut.png' alt='donut'/>";
  //     }
  // function displayResult()
  //     {
  //       var firstRow=document.getElementById("td").rows[0];
  //         var x=firstRow.insertCell(-1);
  //         x.innerHTML="New cell";
  //
  //         var img = document.createElement('img');
  //         img.src = "css/blank.png";
  //         x.appendChild(img);
  //     }












































































//
//
//   var count = 0;
//
//   var currentPlayer = ["Donut", "Eclair"];
//
//   var field = [
//       [ 1, 2, 3 ],
//       [ 4, 5, 6 ],
//       [ 7, 8, 9 ],
//       [ 1, 4, 7 ],
//       [ 2, 5, 8 ],
//       [ 1, 5, 9 ],
//       [ 7, 5, 3 ]
//   ];
//
// var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
//
// $('.field').on("click", function(){
//   $(this).addClass("animated bounce")
//       .one( animationEnd, function(){
//           $(this).removeClass( "animated bounce" );
//     });
// });
//
// function isAvailableField($this) {
//     return ! $this.attr('data-move');
// }
//
//   function doMove($this, move) {
//       $this.attr('data-move', move);
//       $this.addClass(move);
// }
//
//   function reset() {
//             $('.move-x').removeClass('move-x');
//             $('.move-o').removeClass('move-o');
//             $('.grid td').attr('data-move', '');
//     count = 0;
// }
//
//   $('.grid td').click(function() {
//     if (isAvailableField($(this))) {
//                 doMove($(this), 'move-x');
//     count++;
//     checkVictory();
//     doAiMove();
//   }
// });
//
//   function doAiMove() {
//     var found = false;
//   while (!found) {
//       var Random = Math.floor(Math.random() * 9) + 1;
//                 var field = $('#field' + Random);
//   if (isAvailableField(field)) {
//       found = true;
//       doMove(field, 'move-o');
//     count++;
//     checkVictory();
//     }
//   }
// }
//
// function hasWon(move) {
//   for (var i = 0; i < lines.length; ++i) {
//     var line = lines[i];
//     var j = 0;
//   for (; j < line.length; ++j) {
//     var num = line[j];
//   if ($('#field' + num).attr('data-move') != move) {
//     break;
//     }
// }
//   if (j == line.length) {
//     return true;
//     }
//   }
// }
//
// function checkVictory() {
//   if (count < 5) {
//     return;
// }
//     if (hasWon('move-x')) {
//         victory();
//       } else if (hasWon('move-o')) {
//         defeat();
//       } else if (count == 9) {
//         draw();
//       }
// }
//
// function draw() {
//     alert('It is a draw! Let\'s EAT');
//     reset();
// }
//   function victory() {
//     alert('You win! DONUT TIME...');
//     reset();
// }
//   function defeat() {
//     alert("Too bad! NO DONUTS FOR YOU!");
//     reset();
//   }
// });
//
//

//
// function Cell(){
//  tCell = new Sprite(game, "blank.png", 100, 100);
//  tCell.setSpeed(0);
//  tCell.state = BLANK;
//  tCell.images = new Array("blank.png", "X.png", "O.png");
//  tCell.checkClick = function(){
//   if (this.isClicked()){
//    if (this.state == BLANK){
//     this.state = currentPlayer;
//     this.setImage(this.images[currentPlayer]);
//     //change the player
//     if (currentPlayer === "donut"){
//      currentPlayer = O;
//     } else {
//      currentPlayer = X;
//     } // end if
//    } // end if
//   } // end if
//  } // end checkClick
//  return tCell;
// } // end cell
