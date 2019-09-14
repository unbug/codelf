'use strict';

const gulp = require('gulp');
const $ = require('./util');

function watch(files, task) {
  const watcher = gulp.watch(files, task);
  ['add', 'addDir', 'change', 'unlink', 'unlinkDir'].forEach(type => {
    watcher.on(type, (path, stats) => {
      $.util.log($.util.colors.bold('File ' + path + ' was ' + type + ', running tasks...'));
    });
  });
}

// Watches for changes in files.
gulp.task('watch', cb => {
  watch(['lib.config.js'], gulp.series('lint', 'build:extra', 'build:lib-js', 'build:lib-css'));
  watch(['styles/**/*.*'], gulp.series('lint', 'build:app-css'));
  cb();
});
