$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).addClass("active");
  //  $(this).parent().addClass("active");

});

// scroll to
$(function () {
  $('[data-scroll-to]').click(function (e) {
    var el = e.currentTarget,
      $targetEl = $($(el).attr('href')),
      // offset = 150,
      offset = 0,
      targetElTop;
    if ($targetEl.size()) {
      targetElTop = $targetEl.offset().top;
      $('html, body').animate({scrollTop: targetElTop - offset}, 500);
    }
    return false;
  });
});
