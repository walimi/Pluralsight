var gulp = require('gulp');
var plug = require('gulp-load-plugins')();


var source = [
    './src/client/app/**/*module*.js',
    './src/client/app/**/*.js',
    '!./src/client/app/**/{,/*-spaghetti.js}'
];

gulp.task('ngAnnotateTest', function() {
    return gulp
        .src(source)
        .pipe(plug.ngAnnotate({add: true, single_quotes: true}))
        .pipe(plug.rename({suffix:'.annotated'}))
        .pipe(plug.uglify({mangle: true}))
        .pipe(gulp.dest('./build'));
});