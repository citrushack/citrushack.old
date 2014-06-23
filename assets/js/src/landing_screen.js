/* all landing related functions */
$(document).ready(function(){
  /* Grey out background on scroll */
  $(window).scroll(function(){
    if($(window).scrollTop() > 100)
      $('#landing-bg').addClass('change');
    else
      $('#landing-bg').removeClass('change');
  });
});