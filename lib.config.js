'use strict';

exports.js = [
  './node_modules/react/umd/react.production.min.js',
  './node_modules/react-dom/umd/react-dom.production.min.js',
  './node_modules/clipboard/dist/clipboard.min.js',
  './src/vendors/prettify.js',
  './node_modules/mark.js/dist/mark.min.js'
];

exports.css = [
  './node_modules/semantic-ui-css/semantic.min.css',
  './node_modules/animate.css/animate.min.css',
  './src/vendors/prettify.css'
];

exports.extra = [{
  'css/themes': './node_modules/semantic-ui-css/themes/**'
}];

exports.serviceWorker = {
  hosts: [ // cache hosts for service worker, get request only, cache then network
  ],
  excludedPaths: [ // exclude cache path for service worker, get request only, network-falling-back-to-cache
  ]
}
