var gulp = require("gulp");
var uglify = require('gulp-uglifyjs');
var concat = require('gulp-concat');
var size = require('gulp-size');


gulp.task('default', function() {
  return gulp.src(['./index.js', './src/*.js'])
    .pipe(concat('spark.js'))
    .pipe(size())
    .pipe(gulp.dest('./dist/'));
});
