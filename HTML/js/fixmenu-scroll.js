$(document).ready(function(){
  $('.sticky-nav a, .product-feature-booking a').on('click', function(e) {
    e.preventDefault();
	
	$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 120
    }, 500);
	
  });
  
  $(window).on('scroll',function() {	  
	var scrolltop = $(this).scrollTop(); 
    var toggleposition = $('.dv-page-header').position().top
					+$('.dv-page-header').outerHeight(true)
					+$('.product-header').outerHeight(true)
					+$('.breadcrumb').outerHeight(true)
          +$('.product-title').outerHeight(true)
          +$('.product-rating-location').outerHeight(true)
          +$('.key-details').outerHeight(true)
          +$('.product-booking').outerHeight(true)
          +$('.overview').outerHeight(true)
          +$('.product-highlights').outerHeight(true);
	
    if(scrolltop >= toggleposition) {
      $('.sticky-nav').fadeIn(250);
    }
    
    else if(scrolltop <= toggleposition) {
      $('.sticky-nav').fadeOut(250);
    }
  });
});