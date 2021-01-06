$(document).ready(function(){

  $(div).on("click", function(){
    console.log(this);
    $(this.addClass( "animatedBounce" ));
    $(this).on( animationEnd, function(){
  });
});// end docReady
};
