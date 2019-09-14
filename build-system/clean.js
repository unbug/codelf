'use strict';

const gulp = require('gulp');
const del = require('del');

// Cleans dist files.
gulp.task('clean:dist', () => {
  return del(['./dist/**'], { force: true });
});

// Cleans files.
gulp.task('clean', gulp.series('clean:dist'));
