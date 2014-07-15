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
        scrollTop: $(section).offset().top
      , easing: 'easeInQuint'
      , duration: '500'
    });
  });
});