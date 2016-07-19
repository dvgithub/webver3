$(document).ready(function(){
  $('#navigation a, #fixedbar a').on('click', function(e) {
    e.preventDefault();
  });
  
  $(window).on('scroll',function() {
    var scrolltop = $(this).scrollTop();
    var topOfDiv = $('#navigation').position().top;
    var bottomOfDiv = $('#navigation').position().top+$('#navigation').outerHeight(true);

    if(scrolltop >= bottomOfDiv) {
      $('#fixedbar').fadeIn(250);
    }
    
    else if(scrolltop <= topOfDiv) {
      $('#fixedbar').fadeOut(250);
    }
  });
});