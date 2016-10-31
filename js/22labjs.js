/* Navbar Smooth Scrolling */
$(function() {
  $('nav, a').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
});
/* end of Smooth Scrolling */

/* Navbar Show/Hide */
$(function scrolly(){
    //Keep track of last scroll
    var lastScroll = 0;
    $(window).scroll(function(event){
        //Sets the current scroll position
        var st = $(this).scrollTop();
        //Determines up-or-down scrolling
        if (st > lastScroll){
          // Hide Time delay
          setTimeout( function () {
          $('nav').addClass('fixedAtTop');
          }, 800);
        }
        else {
          $('nav').removeClass('fixedAtTop');
        }
        //Updates scroll position
        lastScroll = st;
    });
  $('nav').hover(function(){
    $(this).removeClass('fixedAtTop');
  });
});
/* end of Navbar Show/Hide */

/* Skill gauge */
;( function( $ ) {
	"use strict";

	$( ".level-gauge" ).each( function() {
		var $bar = $( this ),
			  $pct = $bar.find( ".percentage" ),
			  data = $bar.data( "bar" );

		setTimeout( function() {

			$bar
				.css( "background-color", data.color )
				.animate({
					"width": $pct.html()
				}, data.speed || 1500, function() {
					$pct.css({
						"color": data.color,
						"opacity": 1
					});
				});
		}, data.delay || 0 );
	});

})( jQuery );
/* end of Skill Gauge */
