$(document).ready( function(){

// Store this horrible string in a variable so we never need to look at it again

  var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
});
  $(".square").on("click", function(){

    $(this).addClass("animated bounce")
            .one( animationEnd, function(){

              $(this).removeClass( "animated bounce" );
  });
});
 // end docready
