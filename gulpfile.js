'use strict';

const gulp = require('gulp');
const $ = require('./build-system/util');
const requireDir = require('require-dir');
requireDir('./build-system');

gulp.task('help', cb => {
  $.util.log(
    `
    Usage
    gulp [TASK] [OPTIONS...]

  Available tasks
    build          Builds the app.
    build:app-css  Builds the app style.
    build:app-js   Builds the app scripts.
    build:extra    Builds extra files.
    build:images   Builds the app style.
    build:lib-css  Builds the lib style.
    build:lib-js   Builds the lib scripts.
    clean          Cleans files.
    clean:dist     Cleans dist files.
    default
    dist           Dist the app.
    dist:all       Copy all to dist.
    dist:css       Compress css to dist.
    dist:html      Compress html to dist.
    dist:images    Compress images to dist.
    dist:js        Compress js to dist.
    help           Display this help text.
    lint           Lint JS files.
    server         Starts a HTTP(s) server for debug.
    watch          Watches for changes in files.
    `
  );
  cb();
});

// Run tasks: lint, build, docs, watch, server
gulp.task('default', cb => {
  $.util.log(
    $.util.colors.green('Building and watching for changes ...')
  );
  gulp.series(
    'lint',
    'build:extra', 'build:images', 'build:app-css', 'build:lib-js', 'build:lib-css', 'watch', 'server', () => {
      $.util.log(
        $.util.colors.green('Ready! Run "gulp help" for more build command usages.'), '\n'
      );
    })(cb);
});
