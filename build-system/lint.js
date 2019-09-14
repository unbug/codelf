'use strict';

const gulp = require('gulp');
const $ = require('./util');

// Lint JS files.
gulp.task('lint', () => {
  return gulp.src(['gulpfile.js', 'build-system/**/*.js', 'src/**/*.js*', '!src/vendors/**/**.*', '!src/sw.js'])
    .pipe($.eslint())
    .pipe($.eslint.format());
});
