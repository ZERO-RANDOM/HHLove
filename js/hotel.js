$(document).ready(function(){
	var winHeight = $(document).scrollTop();
 
    $(window).scroll(function() {
    var scrollY = $(document).scrollTop();
  
    if (scrollY==200){
      $('.navbar').removeClass("navhotel"); 
       $('.navbar').addClass("navbar-fixed-top");
      $('.navbar').addClass("navbar-inverse");
    } 
    
    });
    
});