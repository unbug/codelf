'use strict';

const gulp = require('gulp-help')(require('gulp'));
const $ = require('./util');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const runSequence = require('run-sequence');
const env = process.env.NODE_ENV;

gulp.task('build:app-js', 'Builds the app scripts.', () => {
  return new Promise(resolve => webpack(webpackConfig[env === 'production' ? 'prod' : 'dev'], (err, stats) => {
    if (err) throw new $.util.PluginError('webpack', err);
    let errorStats = stats.toString('errors-only');
    if (errorStats != '') $.util.log('[webpack]', errorStats);
    resolve();
  }));
});

gulp.task('build:app-css', 'Builds the app style.', cb => {
  gulp.src(['./styles/**/*.scss'], {buffer: true})
    .pipe($.sass({
      outputStyle: 'expanded',
      sourceMap: 'app.css.map',
      sourceMapContents: true,
      sourceMapEmbed: false,
      includePaths: ['./node_modules/']
    }).on('error', $.sass.logError))
    .pipe($.cached('sass-cache', {
      optimizeMemory: true
    }))
    .pipe($.autoprefixer())
    .pipe(gulp.dest('./app/css/'))
    .on('end', function () {
      cb();
    });
});

gulp.task('build:lib-js', 'Builds the lib scripts.', () => {
  return gulp.src(require('../lib.config').js)
    .pipe($.concat('lib.js'))
    .pipe(gulp.dest('./app/js/'));
});

gulp.task('build:lib-css', 'Builds the lib style.', () => {
  return gulp.src(require('../lib.config').css)
    .pipe($.concat('lib.css'))
    .pipe(gulp.dest('./app/css/'));
});

gulp.task('build:images', 'Builds the app style.', () => {
  return gulp.src('./assets/images/**/*.*')
    .pipe(gulp.dest('./app/images/'));
});

gulp.task('build:extra', 'Builds extra files.', () => {
  return Promise.all(require('../lib.config').extra.map(key => {
    const dest = Object.keys(key);
    const path = key[dest];
    return gulp.src(path)
      .pipe(gulp.dest(`./app/${dest}`));
  }));
});

gulp.task('build', 'Builds the app.', cb => {
  runSequence(['build:extra', 'build:images', 'build:app-js', 'build:lib-css', 'build:app-css', 'build:lib-js'], cb);
});
