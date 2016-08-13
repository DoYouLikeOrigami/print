'use strict';

/* --------- plugins --------- */

var
  gulp = require('gulp'),
  less = require('gulp-less');

/* --------- paths --------- */

var
  paths = {
    style: {
      src: './joint/css',
      location: './joint/dev/less/styles.less',
      watch: ['./joint/dev/less/*.less', './dev/less/_*/*.less'],
      entryPoint: './joint/css/style.css',
      destination: './joint/css'
    }
  };

/* --------- style --------- */

gulp.task('style', function () {
  return gulp.src(paths.style.location)
    .pipe(less())
    .pipe(gulp.dest(paths.style.destination));
});

/* --------- watch --------- */

gulp.task('watch', function () {
  gulp.watch(paths.style.watch, ['style']);
});

/* --------- default --------- */

gulp.task('default', ['style'], function () {
  gulp.watch(paths.style.watch, ['style']);
});
