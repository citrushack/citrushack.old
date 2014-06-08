var gulp    = require('gulp')
  , compass = require('gulp-compass')
  , uglify  = require('gulp-uglify')
  , rename  = require('gulp-rename')
  , concat  = require('gulp-concat')
  , jshint  = require('gulp-jshint')
  , stylish = require('jshint-stylish');

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
    external : ['./assets/js/vendors/jquery-1.11.1.js'] 
  , internal : ['./assets/js/src/nav.js']
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
    .pipe(jshint.reporter(stylish))   //use default logger
    .pipe(concat('citrushack.js'))      //concatenate the scripts    
   // .pipe(uglify())                   //minify the resulting script
    .pipe(gulp.dest('./assets/js'));    //save script
});

/**
  * This task watchs for changes and re-runs tasks. 
  */
gulp.task('watch', function(){
  gulp.watch('./assets/compass/sass/**/*.scss', ['compass']);
  gulp.watch('./assets/js/**/*.js', ['scripts']);
});

/**
  * Default task to run when gulp is called
  */
gulp.task('default', ['compass', 'scripts', 'watch']);