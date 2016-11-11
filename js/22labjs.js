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

/* Galley Image Zoom */
// get all links
var links = document.querySelectorAll('.lightCustom'),
// make array
arrayOfLinks = Array.prototype.slice.call(links);
// loop
Array.prototype.forEach.call(arrayOfLinks,function(obj,index){
  // open modal on click
  obj.addEventListener('click',function(e){
    e.preventDefault();
    // if not title show no title
    var title = (obj.title) ? obj.title : 'This not have title';
    // add class show
    document.querySelector('.lightModal').classList.add('show');
    // add title in modal with title=""
    document.querySelector('.lightModal-title').innerHTML = title;
    // get href and add in image modal
    document.querySelector('.lightModal-image').src = obj.href;
    // add title in alt image
    document.querySelector('.lightModal-image').alt = title;
  });
  // close modal
  document.querySelector('.lightModal-close').addEventListener('click',function(e){
    e.preventDefault();
    // remove class="show"
    document.querySelector('.lightModal').classList.remove('show');
    // remove title
    document.querySelector('.lightModal-title').innerHTML = '';
    // remove src
    document.querySelector('.lightModal-image').src = '';
    // remove alt
    document.querySelector('.lightModal-image').alt = '';
  });

});
/* end of Galley Image Zoom */
