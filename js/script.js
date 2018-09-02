$(document).ready(function(){
   $('.personal-info__form .input-holder input , textarea').each(function() { if($(this).val().length > 0) $('.personal-info__form .input-holder label[for="' + $(this).attr('id') + '"]').hide();
    $(this).change(function() {
      if($(this).val().length > 0)
          $('.personal-info__form .input-holder label[for="' + $(this).attr('id') + '"]').addClass('hold');
       else 
          $('.personal-info__form .input-holder label[for="' + $(this).attr('id') + '"]').removeClass('hold');
    });
  });
});
$(document).ready(function($) {
var holder = $(".input-holder input,textarea")
 holder.focus(function(){
   $(this).parent().addClass("active");

  }).blur(function(){
       $(this).parent().removeClass("active");
  })
});  

$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();

    if(winTop >= 100){
      $(".header-sticky").addClass("sticky-header");
    }else{
      $(".header-sticky").removeClass("sticky-header");
    }
  });
});
