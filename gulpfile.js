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
  , to_compile : './assets/compass/sass/citrushack.scss'
  , css        : './assets/css'
  , sass       : './assets/compass/sass'
  },
  /* paths needed for javascript processing. */
  javascript : {
    /* Add paths to scripts in the order you'd like them
       concatenated. */
    scripts : [
      './assets/js/source/nav.js'
    , './assets/js/source/global.js'
    , './assets/js/source/landing_screen.js'
    , './assets/js/source/faq.js'
    ]
    /* name of our final minified, combined script */
  , main_script : 'citrushack.js'
    /* location of main_script */
  , location : 'assets/js'
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
  var scripts     = paths.javascript.scripts
    , main_script = paths.javascript.main_script
    , dest        = paths.javascript.location;
  
  /* if we have no scripts to process, exit function */
  if (scripts.length == 0)
    return;

  gulp.src(scripts)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))   //use default logger
    .pipe(concat(main_script))        //concatenate the scripts    
    .pipe(uglify())                   //minify the resulting script
    .pipe(gulp.dest(dest));           //save script
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
