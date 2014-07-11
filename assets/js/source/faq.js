$(document).ready(function(){
  allItemsEqualHeight($('.faq-item'));
});

$(window).resize(function(){ 
  allItemsEqualHeight($('.faq-item'));
});
