$(document).ready(function(){


     // navbar fixed
    $(window).scroll(function(){
       
        var scrolling = $(this).scrollTop();     
        if(scrolling > 100)
            {
                $(".fix-nav").addClass("navbar-fixed-top");
                $(".fix-nav").css("background","rgba(0,0,0,.5)");
                $(".navbar-default .navbar-nav>li>a").css("color","#fff");
               
            }
        else
            {
                $(".fix-nav").removeClass("navbar-fixed-top");
                $(".fix-nav").css("background","transparent");
                
            }
    });
     // navbar fixed
    

    $(".contact-us .row form > div input:not(.sub)").focusin(function(){
        $(this).css("border-radius","5px");
    });
     $(".contact-us .row form > div input:not(.sub)").blur(function(){
        $(this).css("border-radius","0px");
    });
    
    // Button Of Scroll Top
    var myButton = $(".scrollTop");
    $(window).scroll(function(){
        
        if($(this).scrollTop() >= 400)
            {
                myButton.fadeIn(1000);
            }
        else{
            myButton.fadeOut(1000);
        }
       
        
    });
    myButton.click(function(){
        $("html,body").animate({ scrollTop : 0 },400);
    });
    
    var varInput = $(".contact-us .row form > div input"),
        varArea = $(".contact-us .row form > div textarea");
    varInput.focusin(function(){
        $(this).css(
            "border","1px solid #cc9966"
        );
    });
    
    varInput.blur(function(){
        $(this).css({
            "border":"none",
            "border-bottom":"1px solid #cc9966"
        });
    });
    
   
    



});



$(function() {
  if ($('.select-options ul li').hasClass('selected')) {
    $('.select .input').text($('.select-options li.selected > span:first-child').text());
  } else {
    $('.select .input').text($('.select-options li:first-child > span:first-child').text());
  }
  $('.select').click(function() {
    $('.select-options').toggleClass('visible');
  });
  $('.select-options li').click(function() {
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
    $('.select .input').text($(this).find('span:first-child').text());
  });
});



