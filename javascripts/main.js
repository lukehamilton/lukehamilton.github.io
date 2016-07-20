
// change nav active
$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).addClass("active");
});

// open employer modal
$(".circle").on("click", function(){
  slug = $(this).data('slug');
  $("#" + slug + "-modal").modal('show');
});

// scroll to
$(function () {
  $('[data-scroll-to]').click(function (e) {
    var el = e.currentTarget,
      $targetEl = $($(el).attr('href')),
      // offset = 50,
      offset = 0,
      targetElTop;
    if ($targetEl.size()) {
      targetElTop = $targetEl.offset().top;
      $('html, body').animate({scrollTop: targetElTop - offset}, 500);
    }
    return false;
  });
});

/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}
