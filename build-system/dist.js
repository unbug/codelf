'use strict';

const gulp = require('gulp-help')(require('gulp'));
const $ = require('./util');
const pngquant = require('imagemin-pngquant');
const runSequence = require('run-sequence');
const cachebust = $.cachebust();

const distPath = './dist';

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
    .pipe($.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(distPath))
    .pipe($.size({title: 'dist:html'}));
});

gulp.task('dist', 'Dist the app.', cb => {
  runSequence('clean:dist', 'dist:all', 'dist:images', 'dist:css', 'dist:js', 'dist:html', cb);
});
