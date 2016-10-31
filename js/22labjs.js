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

/* Contact Form */
//var form = document.getElementsByTagName('form')[0];
//form.addEventListener('submit',contact,false);
//function contact(e) {
   // Prevent Default Form Submission
//   e.preventDefault();

//   var target = e.target || e.srcElement;
//   var i = 0;
//   var message = '';

   // Loop Through All Input Fields
//   for(i = 0; i < target.length; ++i) {
      // Check to make sure it's a value. Don't need to include Buttons
//      if(target[i].type != 'text' && target[i].type != 'textarea') {
             // Skip to next input since this one doesn't match our rules
//         continue;
//      }

      // Add Input Name and value followed by a line break
//      message += target[i].name + ': ' + target[i].value + "\r\n";
//   }
   // Modify the hidden body input field that is required for the mailto: scheme
//   target.elements["body"].value = message;

   // Submit the form since we previously stopped it. May cause recursive loop in some browsers? Should research this.
//   this.submit();
//}

/* end of Contact Form */
