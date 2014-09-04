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
$(document).ready(function(){
  var $offset_top = 100;
  var $window = $(window);
  var $nav = $('nav');

  /* make nav transparent when scrolling down */
  $(document).scroll(function(){
    if ($window.scrollTop() >= 100)
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
$(document).ready(function(){
  allItemsEqualHeight($('.faq-item'));
});

$(window).resize(function(){ 
  allItemsEqualHeight($('.faq-item'));
});


$(document).ready(function(){
  /* Equivalent to getElementById, but wanted
     to do it the JQuery way */
  var $canvas = $('#logo-bg')[0];
  
  /* Install paper onto canvas */
  paper.setup($canvas);

  /* Save the width/height of the canvas */
  var view_width = paper.view.size.width
    , view_height = paper.view.size.height;

  /* Block sizes and spacing settings */ 
  var block_width = 20
    , block_height = 20
    , block_size = new paper.Size(block_width,block_height)
    , spacing = 7;

  /* Throttle the speed of the animation
     1 is default speed, 2 is 1/2 the speed, etc */
  var animation_speed = 5;

  /* Colors to use for blocks. */
  var block_colors = [
    "#ECECEC" 
  , "#B3B3B3"
  , "#666666"
  ];

  /* Will hold all of our block objects */
  var block_matrix = [];

  /**
    * Chooses and returns a random color
    * from block_colors
    */
  function randColor () {
    return block_colors[Math.floor(Math.random() * block_colors.length)];
  } 

  /**
    * Fills matrix with rectangle objects 
    */
  function createMatrix () {
    /* First block to start */
    var start = new paper.Point(0, 0);
    
    /* Fill the X-Axis */
    while (start.x < view_width){
      var matrix_row = [];
      /* Fill the Y-Axis */
      while (start.y < view_height){
        var block = new paper.Path.Rectangle(start, block_size);
        block.fillColor = randColor();
        matrix_row.push(block);
        start.y += block_width + spacing;
      }
      block_matrix.push(matrix_row);
      start.x += block_height + spacing;
      start.y = 0;
    }
  }

  /* Create the Matrix */
  createMatrix();
 
  /* Used for throttling the speed */
  var counter = 0;
  
  /*
   * Used for animation with paper.js. Creates a 
   * cascading effect with the blocks
   */
  function onFrame () {
    if (counter == animation_speed){
      /* Reset counter */
      counter = 0;

      for (var i=0; i<block_matrix.length; ++i){
        for (var j=block_matrix[0].length - 1; j>=0; --j){
          /* If we are on the first row, choose a random
             color. */
          if (j === 0)
            block_matrix[i][j].fillColor = randColor();
          else
            block_matrix[i][j].fillColor = block_matrix[i][j-1].fillColor;
        }
      }
    }
    else
      ++counter;
  }

  /**
    * Resizes canvas when window is resized. Needed because setting
      canvas width/height to 100% doesn't seem to work 
    */
  $(window).resize(function(){
    $('#logo-bg').css("width" , $(window).width());
    $('#logo-bg').css("height" , $(window).height());
  });

  /*
   * Used to redraw canvas when its width/height is changed 
   * @event {Event} <- this is provided by paper.js
   */
  function onResize (event) {
    view_width = paper.view.size.width;
    view_height = paper.view.size.height;

    block_matrix = [];
    createMatrix();
    paper.view.draw();
  }

  /* Install onFrame function */
  paper.view.onFrame = onFrame;
  /* Install onResize function */
  paper.view.onResize = onResize;
  /* Draw to canvas */
  paper.view.draw();
});