$(document).ready(function(){

	$('.slider-active').owlCarousel({
    loop:true,
    nav:true,
   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


	$('.blog-active').owlCarousel({
    loop:true,
    nav:true,
   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})




$('.brand-active').owlCarousel({
    loop:true,
    nav:false,
    margin:50,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        992:{
            items:4
        },
        1200:{
            items:6
        }
    }
})	


$('.video-popup').magnificPopup({
  type: 'iframe'
  // other options
});


})





	

