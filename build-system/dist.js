'use strict';

const gulp = require('gulp');
const $ = require('./util');
const pngquant = require('imagemin-pngquant');
const cachebust = $.cachebust();
const through2 = require('through2');

const distPath = './dist';
const buildVersion = (new Date()).toISOString();

// Copy all to dist.
gulp.task('dist:all', () => {
  return gulp.src(['./app/**/**'])
    .pipe(gulp.dest(distPath))
    .pipe($.size({ title: 'dist:all' }));
});

// Compress images to dist.
gulp.task('dist:images', () => {
  return gulp.src(['./app/images/**/*'])
    .pipe($.imagemin({
      use: [pngquant()]
    }))
    .pipe(cachebust.resources())
    .pipe(gulp.dest(distPath + '/images/'))
    .pipe($.size({ title: 'dist:images' }));
});

// Compress css to dist.
gulp.task('dist:css', () => {
  return gulp.src('./app/css/**/*.css')
    .pipe(cachebust.references())
    .pipe($.csso({ comments: false }))
    .pipe(cachebust.resources())
    .pipe(gulp.dest(distPath + '/css'))
    .pipe($.size({ title: 'dist:css' }));
});

// Compress js to dist.
gulp.task('dist:js', () => {
  return gulp.src(['./app/js/*.js'])
    .pipe(cachebust.references())
    .pipe($.minify())
    .pipe(cachebust.resources())
    .pipe(gulp.dest(distPath + '/js/'))
    .pipe($.size({ title: 'dist:js' }));
});

// Compress html to dist.
gulp.task('dist:html', () => {
  return gulp.src(['./app/*.html'])
    .pipe(cachebust.references())
    .pipe($.htmlmin({ collapseWhitespace: true, minifyCSS: true, minifyJS: true }))
    .pipe(gulp.dest(distPath))
    .pipe($.size({ title: 'dist:html' }));
});

//generate service workers
gulp.task('dist:serviceworkers', cb => {
  const swConfig = require('../lib.config').serviceWorker;
  const rootPath = __dirname.replace('build-system', '') + 'dist/';
  let resources = ['"./"'];
  gulp.src([distPath + '/**/*.*'])
    .pipe(through2.obj(function (file, enc, next) {
      !/sw\.js|\.html|\.map/.test(file.path) && this.push('"' + file.path.replace(rootPath, '') + '"');
      next();
    }))
    .on('data', data => {
      resources.push(data)
    })
    .on('end', function () {
      gulp.src(['./src/sw.js'])
        .pipe($.replace(/_BUILD_VERSION_/g, buildVersion))
        .pipe($.replace(/_FILES_/g, resources.join(',\n')))
        .pipe($.replace(/_INCLUDED_/g, swConfig.included.join(',\n')))
        .pipe($.replace(/_NETWORK_ONLY_/g, swConfig.networkOnly.join(',\n')))
        .pipe($.replace(/_CACHE_ONLY_/g, swConfig.cacheOnly.join(',\n')))
        .pipe($.replace(/_EXCLUDED_/g, swConfig.excluded.join(',\n')))
        .pipe($.minify())
        .pipe(gulp.dest(distPath))
        .on('end', cb);
    });
});

// Dist the app.
gulp.task('dist', gulp.series('clean:dist', 'dist:all', 'dist:images', 'dist:css', 'dist:js', 'dist:html', 'dist:serviceworkers'));
