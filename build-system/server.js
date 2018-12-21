'use strict';

const gulp = require('gulp-help')(require('gulp'));
const browserSync = require('browser-sync').create();
const $ = require('./util');
const serveIndex = require('serve-index');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

// start server with browserSync
gulp.task('server', 'Starts a HTTP(s) server for debug.',  () => {
  return new Promise(resolve => {
    const compiler = webpack(webpackConfig.dev, () => {
      const config = {
        open: false,
        cors: true,
        reloadDelay: 1000,
        reloadDebounce: 3000,
        ghostMode: false,
        logPrefix: 'Debug Server',
        codeSync: $.util.argv['bs_code_sync'] != 'false',
        notify: false,
        server: {
          baseDir: ['./'],
        },
        https: $.util.argv['bs_https'] != 'false',
        serveStatic: ['./'],
        middleware: [
          serveIndex('.'),
          webpackDevMiddleware(compiler, {
            publicPath: webpackConfig.dev.output.publicPath,
            stats: {colors: true},
            writeToDisk: true,
            logTime: true,
            logLevel: 'error'
          }),
          webpackHotMiddleware(compiler)
        ]
      };
      if ($.util.argv['bs_proxy']) {
        config.server = false;
        config.proxy = $.util.argv['bs_proxy'];
      }
      // disable Browsersync scripts in browser
      if (!$.util.argv['bs_code_sync']) {
        config.scriptPath = () => '';
      } else {
        gulp.watch(['./app/**/*.*'], browserSync.reload);
      }
      browserSync.init(config, resolve);
    });
  });
});
