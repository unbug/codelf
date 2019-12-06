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

// configs for service worker, get request only, not in "included" url won't be cached
exports.serviceWorker = {
  included: [ // cache then network, url must start with it's host
    '"searchcode.com"',
    '"fanyi.youdao.com"',
    '"api.cognitive.microsofttranslator.com"',
    '"api.github.com"'
  ],
  networkOnly: [ // network falling back to cache, url|path|etc must included in "included"
  ],
  cacheOnly: [ // cache fallback to network, url|path|etc must included in "included"
    '"fanyi.youdao.com"',
    '"api.cognitive.microsofttranslator.com"',
    '"api.github.com"'
  ],
  excluded: [ // won't be cache, url|path|etc must included in "included"
  ]
}
