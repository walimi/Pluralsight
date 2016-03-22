var gulp = require('gulp');
var plug = require('gulp-load-plugins')();
var rename = require('gulp-rename');

var source = [
    './client/app/**/*module*.js',
    './client/app/**/*.js',
    '!./client/app/**/{,/*-spaghetti.js}'
];

gulp.task('ngAnnotateTest', function() {
   return gulp
       .src(source)
       .pipe(plug.ngAnnotate({add: true, single_quotes: true}))
       .pipe(rename(function(path){
           path.extname = '.annotated.js';
       }))
       .pipe(gulp.dest('./build'));
});