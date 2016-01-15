var gulp = require('gulp');
var through2 = require('through2');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');//http://www.browsersync.io/docs/gulp/
var reload = browserSync.reload;
var cachebust = new $.cachebust();
require('date-utils');

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
    'gulpfile.js',
    './static/app/**/*.*'
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

gulp.task('dist:js', function (cb) {
  var dir = './static/app/src/lib/';
  gulp.src([dir+'jquery.min.js',dir+'tether.min.js',dir+'bootstrap.min.js',dir+'prettify.js',dir+'ZeroClipboard.min.js',dir+'lovefield.min.js'])
    .pipe($.cached('build-cache', {
      optimizeMemory: true
    }))
    .pipe($.concat('libs.js'))
    .pipe(cachebust.references())
    .pipe($.uglify())
    .pipe(cachebust.resources())
    .pipe(gulp.dest('./src/lib/'))
    .on('end', function () {
      cb();
    });
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
  runSequence('prepare', 'dist:js', 'dist:html', 'manifest', cb);
});
gulp.task('default', function (cb) {
  runSequence('clean:dist', 'compile', 'watch', 'serve', cb);
});
