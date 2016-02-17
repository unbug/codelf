var Util = require('../Util.js');

module.exports = new function () {
  var persistLangsName = 'codelf_langs_selected';
  var langs = Util.localStorage.get(persistLangsName), langQuery;
  var page = 0;
  var lastVal;
  var cacheSourceCodes = {};
  var afterRequestSearchcode;

  genLangQuery(langs);

  this.resetPage = function () {
    page = 0;
  }

  this.setLang = function (val) {
    langs = val || null;
    genLangQuery(val);
    this.resetPage();
    Util.localStorage[langs ? 'set' : 'del'](persistLangsName, langs);
  }

  this.getLang = function () {
    return langs;
  }

  function genLangQuery(val) {
    if (!!val) {
      var arr1 = val.replace(/\s+/g, ',').split(','),
        arr2 = [];
      arr1.forEach(function (key) {
        arr2.push('lan=' + key);
      });
      langQuery = arr2.join('&');
    } else {
      langQuery = null;
    }
  }

  //search code by query
  this.request = function (val, callback) {
    afterRequestSearchcode = callback;
    if (val != lastVal) {
      this.resetPage();
    }
    lastVal = val;
    lastVal && $.ajax({
      type: 'GET',
      //dataType: 'jsonp',
      dataType: 'json',
      url: 'https://searchcode.com/api/codesearch_I/' + (langQuery ? ('?' + langQuery) : ''),
      //url: 'https://searchcode.com/api/jsonp_codesearch_I/' + (langQuery ? ('?' + langQuery) : ''),
      data: {
        q: lastVal,
        p: page,
        per_page: 42,
        callback: 'afterRequestSearchcode'
      },
      jsonp: false,
      jsonpCallback: false,
      success: function (data) {
        callback && callback(data, page);
        page++;
      }
    })
  };

  window.afterRequestSearchcode = function(data){
    afterRequestSearchcode && afterRequestSearchcode(data, page);
    page++;
  }

  //get source code by id
  this.requestSourceCode = function (id, callback) {
    if (cacheSourceCodes[id]) {
      callback && callback(cacheSourceCodes[id]);
      return;
    }
    id && $.ajax({
      type: 'GET',
      dataType: 'json',
      url: 'https://searchcode.com/api/result/' + id + '/',
      success: function (data) {
        cacheSourceCodes[id] = data;
        callback && callback(data);
      }
    });
  }
};
