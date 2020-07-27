/* carousel-animatiom*/
$(document).ready(function($) {
        		"use strict";
        		//  TESTIMONIALS CAROUSEL HOOK
		        $('#customers-testimonials').owlCarousel({
		           autoplay: true,
		   loop: true,
		   margin: 30,
		   items: 1,
		   responsiveClass: true,
		   
		   dots: false,
		   smartSpeed: 500,
		   
		        });
        	});
$('#customers-testimonials').owlCarousel({
   animateOut: 'fadeOut',
		   animateIn: 'fadeIn',
			autoplay: true,
		   loop: true,
		   margin: 30,
		   responsiveClass: true,
		   
		   dots: false,
		   items: 1,
		   smartSpeed: 500,
		   
});

/* navbar */
var distance=$('.customPreviousBtn').offset().top;
$(window).scroll(function(){
    var sWindow = $(window).scrollTop();
    if(sWindow > distance+200)
        {
            $('.navbar').css("backgroundColor","#000")
        }
    else
        {
         $('.navbar').css("backgroundColor","transparent")   
        }
})

var distance = $('.customPreviousBtn').offset().top;

var scrWindow= $(window).scrollTop();

if(scrWindow>distance)
    {
        $('.navbar').css("backgroundColor","#000")
    }
else
    {
        $('.navbar').css("backgroundColor","transparent") 
    }

$('.navbar-toggler').click(function(){
        $('.collapse').css("backgroundColor","#fff");
    });
        


