require('date-utils');
var path = require('path');
var gulp = require('gulp');
var through2 = require('through2');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');//http://www.browsersync.io/docs/gulp/
var reload = browserSync.reload;
var cachebust = new $.cachebust();
var webpack = require("webpack-stream");

//build version:
//script version
//style version
//manifest version
var startTime = 0;
var buildVersion = 0;
gulp.task('build_version', function (cb) {
  var startDate = new Date();
  startTime = startDate.getTime();
  buildVersion = startDate.toFormat('YYYYMMDDHHMISS');

  cb();
});

//watching script change to start default task
gulp.task('watch', function () {
  return gulp.watch([
    './static/app/**/*.*','!./static/app/src/AppBundle.js'
  ], function (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    runSequence('compile');
  });

});
//clear dist folder
gulp.task('clean:dist', function (cb) {
  return gulp.src(['./src/lib/*.js'])
    .pipe($.clean({force: true}))
});
//compile sass files
var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];
gulp.task('sass', function () {
  return gulp.src(['./static/app/scss/*.scss'], {buffer: true})
    //.pipe($.sourcemaps.init())
    .pipe($.sass({errLogToConsole: true}))
    .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    //.pipe($.sourcemaps.write())
    .pipe($.cached('build-cache', {
      optimizeMemory: true
    }))
    .pipe(gulp.dest('./static/app/resources/css/'))
});
gulp.task('dist:libjs', function () {
  return gulp.src(['./static/app/src/lib/all.js'])
    .pipe($.fileInclude({
      basepath: './static/app/src/lib/'
    }))
    .pipe($.cached('build-cache', {
      optimizeMemory: true
    }))
    .pipe(cachebust.references())
    .pipe($.uglify())
    .pipe(cachebust.resources())
    .pipe(gulp.dest('./src/lib/'));
});
gulp.task("dist:appjs", function() {
  return gulp.src(['./static/app/src/App.js'])
    .pipe(webpack({
      resolve: {
        modules: [
          path.resolve('./static/app/src')
        ]
      },
      output: {
        filename: "AppBundle.js"
      }
    }))
    .pipe(gulp.dest('./static/app/src'));
});
gulp.task('dist:html', function () {
  return gulp.src(['./static/app/*.html'])
    .pipe($.fileInclude({
      basepath: './static/app/'
    }))
    .pipe(cachebust.references())
    .pipe($.htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      minifyJS: true,
      minifyCSS: true
    }))
    .pipe(gulp.dest('./'));
});
//generate cache.manifest
gulp.task('manifest', function (cb) {
  var resources = [];
  gulp.src(['./resources/**/*.*','./src/**/*.js'])
    .pipe(through2.obj(function (file, enc, next) {
      this.push(file.path.replace(__dirname+'/',''));
      next();
    }))
    .on('data', function (data) {
      resources.push(data)
    })
    .on('end', function () {
      gulp.src(['./static/app/cache.manifest'])
        .pipe($.replace(/_BUILD_VERSION_/g, buildVersion))
        .pipe($.replace(/_FILES_/g, resources.join('\n')))
        .pipe(gulp.dest('./'))
        .on('end', function () {
          cb();
        });
    });
});
//generate service workers
gulp.task('serviceworkers', function (cb) {
  var resources = ['"./"'];
  gulp.src(['./resources/**/*.*','./src/**/*.js'])
    .pipe(through2.obj(function (file, enc, next) {
      this.push('"' + file.path.replace(__dirname+'/','') + '"');
      next();
    }))
    .on('data', function (data) {
      resources.push(data)
    })
    .on('end', function () {
      gulp.src(['./static/app/sw.js'])
        .pipe($.replace(/_BUILD_VERSION_/g, buildVersion))
        .pipe($.replace(/_FILES_/g, resources.join(',\n')))
        .pipe(gulp.dest('./'))
        .on('end', function () {
          cb();
        });
    });
});

//browser-sync serve
gulp.task('serve', function () {
  browserSync({
    "open": false,
    server:{
      dir: './'
    }
  });

  gulp.watch(['./*.html'], reload);
});

//print after tasks all done
gulp.task('_endlog', function (cb) {
  var endDate = new Date();
  var logs = [];
  logs.push('\nBuild version is ' + buildVersion);
  logs.push(', Completed in ' + ((endDate.getTime() - startTime) / 1000) + 's at ' + endDate + '\n');
  console.log(logs.join(''));
  cb();
});

gulp.task('prepare', function (cb) {
  runSequence('build_version', cb);
});
gulp.task('compile', function (cb) {
  runSequence('prepare', 'sass', 'dist:libjs', 'dist:appjs', 'dist:html', 'manifest', 'serviceworkers', cb);
});
gulp.task('default', function (cb) {
  runSequence('clean:dist', 'compile', 'watch', 'serve', cb);
});
