$(document).ready(function(){ 
	var touch 	= $('#resp-menu');
	var menu 	= $('.menu');
 
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
	
	$('.top-none').click(function(){
		$('.header-layout').addClass("expand");
	});	
	
});


$( '.js-input' ).keyup(function() {
	if( $(this).val() ) {
	   $(this).addClass('not-empty');
	} else {
	   $(this).removeClass('not-empty');
	}
  });