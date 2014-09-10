$(document).ready(function(){
  $body = $('body');
  $footer = $('#footer');
  $landing = $('#landing');
    
  function footerView () {
    $landing_bottom = $landing.offset().top + $landing.height();
    //Current scrollbar position
    $scroll_top = ($body.scrollTop());
    /* remove footer if we are at the landing section
       add footer if we are past the landing section */
    if ($scroll_top < $landing_bottom)
      $footer.css('display' , 'none');
    else 
      $footer.css('display', 'initial');
  }

  footerView();
  $(document).scroll(function(){
    footerView();
  });
});