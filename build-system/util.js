'use strict';

let util = require('gulp-load-plugins')();
const argv = require('minimist')(process.argv.slice(2));
const log = require('fancy-log');
const colors = require('ansi-colors');
const PluginError = require('plugin-error');
const replace = require('gulp-replace');

util.util = {
  argv: argv,
  log: log,
  colors: colors,
  PluginError: PluginError,
  replace: replace
};

util.minify = function (options) {
  return util.babelMinify(
    Object.assign({
      evaluate: false,
      builtIns: false
    }, options),
    {
      comments: false
    }
  );
};

module.exports = util;
