/* All nav related functions */
$(document).ready(function(){

  $(window).scroll(function(){
    if ($(window).scrollTop() > 100)
      $('nav').addClass('nav-show');
    else
      $('nav').removeClass('nav-show');
  });
});