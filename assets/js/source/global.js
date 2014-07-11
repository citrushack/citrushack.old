/* gives all elements in group the same
   height */
function allItemsEqualHeight (group) {
  var tallest = 0;

  group.each(function(){
    $(this).css({height:"auto"});
    var thisHeight = $(this).height();

    if (thisHeight > tallest)
      tallest = thisHeight;
  });

  group.each(function(){
    $(this).height(tallest);
  });
}


/* returns a function which will execute 
   a callback after ms milliseconds */
function delayFunction () {
  var timer = 0;
  return function(callback, ms){
    clearTimeout(timer);
    timer = setTimeout(callback,ms);
  };
}