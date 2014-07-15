$(document).ready(function(){
  var $offset_top = 100;
  var $window = $(window);
  var $nav = $('nav');

  /* animation for href anchor to different segments
     of page */
  $nav.find('a').click(function(e) {
    e.preventDefault();
    var section = $(this).attr('href');

    $('html, body').animate({
        /* +2 px to prevent the scroll effect from confusing the 
           scroll spy */
        scrollTop: $(section).offset().top + 2
      , easing: 'easeInQuint'
      , duration: '500'
    });
  });
});