var Util = require('Util.js');

module.exports = new function () {
  var lastVal;
  var translateRequestCallback;
  this.request = function (val, callback) {
    lastVal = val;
    translateRequestCallback = callback;
    lastVal && $.getJSON('//fanyi.youdao.com/openapi.do?callback=?&keyfrom=Codelf&key=2023743559&type=data&doctype=jsonp&version=1.1',
      {
        q: lastVal
      },
      function (data) {
        if (data) {
          translateRequestCallback && translateRequestCallback(data);
        }
    });
  }
};
