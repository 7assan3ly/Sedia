$(document).ready(function () {
    // NICE-Scroll
    $("html").niceScroll();
   // NICE-Scroll
    
    //NAVBAR    
    $(window).scroll(function() {
       if($(window).scrollTop()>=500){
           $("#navTop").css("background-color","#8B0211")
       }
        else{
            $("#navTop").css("background-color","rgba(105, 105, 107, 0.2)")
        }
    });
    //NAVBAR
    
    // Go To Another
    $("nav").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        },1000);
    });
    // Go To Another
    
    
    // MIX BTN
    $(function() {
       $("#galBtn li").click(function() {
          // remove classes from all
          $("#galBtn li").removeClass("act");
          // add class to the one we clicked
          $(this).addClass("act");
       });
    });
    // MIX BTN
    
    
    //MIXITUP
    var mixer = mixitup('.cont');
    var mixer = mixitup(containerEl);
    var mixer = mixitup(containerEl, {
        selectors: {
            target: '.blog-item'
        },
        animation: {
            duration: 1000
        }
    });
    //MIXITUP
    
   //Fancy Box
    /* This is basic - uses default settings */
	
	$("a#single_image").fancybox();
	
	/* Using custom settings */
	
	$("a#inline").fancybox({
		'hideOnContentClick': true
	});

	/* Apply fancybox to multiple items */
	
	$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
   //Fancy Box
    
});
 //SCROLL-TOP
    
    $(window).scroll(function(){
       if($(this).scrollTop()>=400){
           $("#scroll-top").fadeIn(200);
       }
        else{
            $("#scroll-top").fadeOut(200);
        }
    });
        $("#scroll-top").click(function(){
           $("html,body").animate({scrollTop : 0},1000); 
        });
//SCROLL-TOP

// LOADING SCREEN
$(window).ready(function(){

	$("#loader").fadeOut(1000);
    $("body").css("overflow","auto");

});
//LOADING SCREEN