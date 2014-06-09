/* All nav related functions */
$(document).ready(function(){

  var $offset_top = 100;
  var $window = $(window);
  var $nav = $('nav');
  
  /* Make navbar fade in after offset_top px and
     fade back out before offset_top px */
  $window.scroll(function(){
    if ($window.scrollTop() > $offset_top)
      $nav.addClass('nav-show');
    else
      $nav.removeClass('nav-show');
  });

  /* animation for href anchor to different segments
     of page */
  $nav.find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
  });
  
});