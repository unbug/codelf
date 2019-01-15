'use strict';
const gulp = require('gulp-help')(require('gulp'));
const $ = require('./util');
const pngquant = require('imagemin-pngquant');
const runSequence = require('run-sequence');
const cachebust = $.cachebust();
const through2 = require('through2');

const distPath = './dist';
const buildVersion = (new Date()).toISOString();

gulp.task('dist:all', 'Copy all to dist.', () => {
  return gulp.src(['./app/**/**'])
    .pipe(gulp.dest(distPath))
    .pipe($.size({title: 'dist:all'}));
});

gulp.task('dist:images', 'Compress images to dist.', () => {
  return gulp.src(['./app/images/**/*'])
    .pipe($.imagemin({
      use: [pngquant()]
    }))
    .pipe(cachebust.resources())
    .pipe(gulp.dest(distPath + '/images/'))
    .pipe($.size({title: 'dist:images'}));
});

gulp.task('dist:css', 'Compress css to dist.', () => {
  return gulp.src('./app/css/**/*.css')
    .pipe(cachebust.references())
    .pipe($.csso({comments: false}))
    .pipe(cachebust.resources())
    .pipe(gulp.dest(distPath + '/css'))
    .pipe($.size({title: 'dist:css'}));
});

gulp.task('dist:js', 'Compress js to dist.', () => {
  return gulp.src(['./app/js/*.js'])
    .pipe(cachebust.references())
    .pipe($.uglify())
    .pipe(cachebust.resources())
    .pipe(gulp.dest(distPath + '/js/'))
    .pipe($.size({title: 'dist:js'}));
});

gulp.task('dist:html', 'Compress html to dist.', () => {
  return gulp.src(['./app/*.html'])
    .pipe(cachebust.references())
    .pipe($.htmlmin({collapseWhitespace: true, minifyCSS: true, minifyJS: true}))
    .pipe(gulp.dest(distPath))
    .pipe($.size({title: 'dist:html'}));
});


//generate service workers
gulp.task('dist:serviceworkers', function (cb) {
  const swConfig = require('../lib.config').serviceWorker;
  const rootPath = __dirname.replace('build-system', '') + 'dist/';
  let resources = ['"./"'];
  gulp.src([distPath + '/**/*.*'])
    .pipe(through2.obj(function (file, enc, next) {
      !/sw\.js|\.html|\.map/.test(file.path) && this.push('"' + file.path.replace(rootPath,'') + '"');
      next();
    }))
    .on('data', function (data) {
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
        .pipe($.uglifyEs.default())
        .pipe(gulp.dest(distPath))
        .on('end', cb);
    });
});


gulp.task('dist', 'Dist the app.', cb => {
  runSequence('clean:dist', 'dist:all', 'dist:images', 'dist:css', 'dist:js', 'dist:html', 'dist:serviceworkers', cb);
});
