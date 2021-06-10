(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
  meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu',
  
});
// slider
$('.hero-slider').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
     navText:["<img src='img/large_left.png'>","<img src='img/large_right.png'>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        767:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// blog
$('.blog-active').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
     navText:["<img src='img/large_left.png'>","<img src='img/large_right.png'>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        767:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// 
/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});
  

$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});	



//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});



})(jQuery);	