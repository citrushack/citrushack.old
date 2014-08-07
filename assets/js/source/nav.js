$(document).ready(function(){
  var $offset_top = 100;
  var $window = $(window);
  var $nav = $('nav');

  $(document).scroll(function(){
    if ($(window).scrollTop() >= 100)
      $nav.addClass('transparent');
    else
      if ($nav.hasClass('transparent'))
        $nav.removeClass('transparent');
  });

  /* animation for href anchor to different segments
     of page */
  $nav.find('a').click(function(e) {
    e.preventDefault();
    var section = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(section).offset().top - 50
      , easing: 'easeInQuint'
      , duration: '500'
    });
  });
});