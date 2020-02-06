'use strict';

const gulp = require('gulp');
const $ = require('./util');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const env = process.env.NODE_ENV;

// Builds the app scripts.
gulp.task('build:app-js', () => {
  return new Promise(resolve => webpack(webpackConfig[env === 'production' ? 'prod' : 'dev'], (err, stats) => {
    if (err) throw new $.util.PluginError('webpack', err);
    let errorStats = stats.toString('errors-only');
    if (errorStats != '') $.util.log('[webpack]', errorStats);
    resolve();
  }));
});

// Builds the app style.
gulp.task('build:app-css', cb => {
  gulp.src(['./styles/**/*.scss'], { buffer: true })
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

// Builds the lib scripts.
gulp.task('build:lib-js', () => {
  return gulp.src(require('../lib.config').js)
    .pipe($.concat('lib.js'))
    .pipe(gulp.dest('./app/js/'));
});

// Builds the lib style.
gulp.task('build:lib-css', () => {
  return gulp.src(require('../lib.config').css)
    .pipe($.concat('lib.css'))
    .pipe($.replace('@import url(https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&subset=latin);', ''))
    .pipe(gulp.dest('./app/css/'));
});

// Builds the images.
gulp.task('build:images', () => {
  return gulp.src('./assets/images/**/*.*')
    .pipe(gulp.dest('./app/images/'));
});

// Builds the fonts.
gulp.task('build:fonts', () => {
  return gulp.src('./assets/fonts/**/*.*')
    .pipe(gulp.dest('./app/fonts/'));
});

// Builds extra files.
gulp.task('build:extra', () => {
  return Promise.all(require('../lib.config').extra.map(key => {
    const dest = Object.keys(key);
    const path = key[dest];
    return gulp.src(path)
      .pipe(gulp.dest(`./app/${dest}`));
  }));
});

// Builds the app.
gulp.task('build', gulp.parallel('build:extra', 'build:fonts', 'build:images', 'build:app-js', 'build:lib-css', 'build:app-css', 'build:lib-js'));
