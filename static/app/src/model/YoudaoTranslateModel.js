var Util = require('../Util.js');

module.exports = new function () {
  var lastVal;
  var translateRequestCallback;
  this.request = function (val, callback) {
    lastVal = val;
    translateRequestCallback = callback;
    lastVal && $.ajax({
      type: 'GET',
      url: 'http://fanyi.youdao.com/openapi.do?keyfrom=Codelf&key=2023743559&type=data&doctype=jsonp&version=1.1',
      dataType: 'jsonp',
      jsonp: false,
      jsonpCallback: false,
      contentType: "application/json",
      data: {
        q: lastVal,
        callback: 'afterYoudaoTranslateRequest'
      }
    });
  }
  window.afterYoudaoTranslateRequest = function (data) {
    if (data) {
      translateRequestCallback && translateRequestCallback(data);
    }
  }
};
