var gulp    = require('gulp')
  , compass = require('gulp-compass')
  , uglify  = require('gulp-uglify')
  , concat  = require('gulp-concat')
  , jshint  = require('gulp-jshint')
  , clean   = require('gulp-clean');

var paths = {
  /* paths needed for compass compilation. Will compile
     all *.scss in compass/sass. */ 
  compass : {
    config     : './assets/compass/config.rb'
  , to_compile : './assets/compass/sass/*.scss'
  , css        : './assets/css'
  , sass       : './assets/compass/sass'
  },
  /* paths needed for javascript processing. */
  javascripts : {
    /* Add paths to scripts in the order you'd like them
       concatenated. external scripts will be the first
       to be combined 

       external = vendor scripts
       internal = our scripts */ 
    external : [] 
  , internal : ['./assets/js/src/nav.js']
    /* where we want to save final processed file.
       we just put it in the same directory as the 
       other javascripts */
  , min_dest : './assets/js/'
  }
};

/**
  * This task takes our citrushack.scss file and
    converts it to citrushack.css. 
  */
gulp.task('compass', function(){
  gulp.src(paths.compass.to_compile)
    .pipe(compass({
      config_file : paths.compass.config
    , css         : paths.compass.css 
    , sass        : paths.compass.sass
    }));
});

/**
  * This task processes our javascripts. It will first
    lint them through jshint, then minify them, then 
    concatenate them 
  */
gulp.task('scripts', function(){
  /* array of all our scripts. Vendor scripts come
     first */
  var scripts = paths.javascripts.external
                  .concat(paths.javascripts.internal);

  gulp.src(scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default')) //use default logger
    .pipe(jshint.reporter('fail'))    //fail build on error
    .pipe(uglify())                   //minify each script
    .pipe(concat('citrushack.min.js'))//concatenate the scripts
    .pipe(gulp.dest(paths.javascripts.min_dest));
});