function allItemsEqualHeight (group) {
  var tallest = 0;

  group.each(function(){
    $(this).css({height:"auto"});
    var thisHeight = $(this).height();

    if (thisHeight > tallest)
      tallest = thisHeight;
  });

  console.log('done');
  group.each(function(){
    $(this).height(tallest);
  });
}

$(document).ready(function(){
  allItemsEqualHeight($('.faq-item'));
});

$(window).resize(function(){ 
  allItemsEqualHeight($('.faq-item'));
});
