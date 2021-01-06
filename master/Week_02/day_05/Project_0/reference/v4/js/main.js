$(document).ready(function() {
  var count = 0;

  var field = [
      [ 1, 2, 3 ],
      [ 4, 5, 6 ],
      [ 7, 8, 9 ],
      [ 1, 4, 7 ],
      [ 2, 5, 8 ],
      [ 1, 5, 9 ],
      [ 7, 5, 3 ]
  ];

  var currentPlayer = [blank, "donut", "eclair"];

  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

$('.field').on("click", function(){
  $(this).addClass("animated bounce")
      .one( animationEnd, function(){
          $(this).removeClass( "animated bounce" );
    });
});

function isAvailableField($this) {
    return ! $this.attr('data-move');
}

  function doMove($this, move) {
      $this.attr('data-move', move);
      $this.addClass(move);
}

  function reset() {
            $('.move-x').removeClass('move-x');
            $('.move-o').removeClass('move-o');
            $('.grid td').attr('data-move', '');
    count = 0;
}

  $('.grid td').click(function() {
    if (isAvailableField($(this))) {
                doMove($(this), 'move-x');
    count++;
    checkVictory();
    doAiMove();
  }
});

  function doAiMove() {
    var found = false;
  while (!found) {
      var Random = Math.floor(Math.random() * 9) + 1;
                var field = $('#field' + Random);
  if (isAvailableField(field)) {
      found = true;
      doMove(field, 'move-o');
    count++;
    checkVictory();
    }
  }
}

function hasWon(move) {
  for (var i = 0; i < lines.length; ++i) {
    var line = lines[i];
    var j = 0;
  for (; j < line.length; ++j) {
    var num = line[j];
  if ($('#field' + num).attr('data-move') != move) {
    break;
    }
}
  if (j == line.length) {
    return true;
    }
  }
}

function checkVictory() {
  if (count < 5) {
    return;
}
    if (hasWon('move-x')) {
        victory();
      } else if (hasWon('move-o')) {
        defeat();
      } else if (count == 9) {
        draw();
      }
}

function draw() {
    alert('It is a draw! Let\'s EAT');
    reset();
}
  function victory() {
    alert('You win! DONUT TIME...');
    reset();
}
  function defeat() {
    alert("Too bad! NO DONUTS FOR YOU!");
    reset();
  }
});



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
