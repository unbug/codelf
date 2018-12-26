'use strict';

const gulp = require('gulp-help')(require('gulp'));
const $ = require('./util');

gulp.task('lint', 'Lint JS files.', () => {
  return gulp.src(['gulpfile.js', 'build-system/**/*.js', 'src/**/*.js*', '!src/vendors/**/**.*', '!src/sw.js'])
    .pipe($.eslint())
    .pipe($.eslint.format());
});
