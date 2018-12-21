'use strict';

const gulp = require('gulp-help')(require('gulp'));
const del = require('del');
const runSequence = require('run-sequence');

gulp.task('clean:dist', 'Cleans dist files.', () => {
  return del(['./dist/**'], {force: true});
});

gulp.task('clean', 'Cleans files.', cb => {
  runSequence('clean:dist', cb);
});
