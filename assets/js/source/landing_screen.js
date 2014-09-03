$(document).ready(function(){
  $('#arrow-down').click(function(){
    var position = $('#intro').offset().top;
    $('html, body').animate({
      scrollTop: position
    , easing: 'easeInQuint'
    , duration: '500'
    });
  });
});