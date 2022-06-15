$(function($) {
    $(window).scroll(function(){
        var targetElement=$('.fadein').offset().top;
        var scroll=$(window).scrollTop();
        var windowHeight=$(window).height();
        if(scroll>targetElement-windowHeight+90){
            $('.fadein').css('opacity','1');
            $('.fadein').css('transform','translateY(0)');
        }
    });

    $(".nav_toggle").on("click", function () {
        $(".nav_toggle, .nav").toggleClass("show");
      });

});
   
    