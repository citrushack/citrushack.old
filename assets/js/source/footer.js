$(document).ready(function(){
  var $footer_border = $('#footer-border');
  var $window = $(window);

  /**
    * Create the border of triangles on top
      of the footer 
      @param num_blocks {INT} number of triangles to draw
      @return none
    */
  function createTriangleBorder (num_blocks, color) {
    /* Calculate the size of the triangles based 
       on window's width. */
    var triangle_size = Math.floor($window.width() / 2 / num_blocks);

    /* Border style we will apply to create a triangle */
    var border_left = 'border-left:' + triangle_size + 'px solid transparent;'
      , border_right = 'border-right:' + triangle_size + 'px solid transparent;'
      , border_bottom = 'border-bottom:' + triangle_size + 'px solid ' + color + ';';

    var border_style = border_left + border_right + border_bottom;
    for (var i=0; i<num_blocks; ++i){
      $footer_border.append('<span style="width:0;height:0;' + border_style + '"></span>');
    }
  }
  
  //createTriangleBorder(30,'#634A7E');

  $window.resize(function(){
    $footer_border.empty();
    createTriangleBorder(30,'#634A7E');
  });
});