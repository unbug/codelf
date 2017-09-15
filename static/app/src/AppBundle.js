/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var appCache = window.applicationCache;
appCache.addEventListener('updateready', function() {
  if (appCache.status == appCache.UPDATEREADY){
    try{
      appCache.update();
      if (appCache.status == appCache.UPDATEREADY) {
        try{
          appCache.swapCache();
          window.location.reload(false);
        }catch(err){}
      }
    }catch(err){}
  }
}, false);

var ua = navigator.userAgent,
  android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
  ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
  ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
  iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
  os = {};

if (android) os.android = true, os.version = android[2];
if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.')
if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.')
if (ipod) os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
exports.os = os;

exports.localStorage = new function () {
  var lcst = window.localStorage;

  function getLocalValue(id) {
    if (lcst) {
      return lcst[id];
    } else {
      return null;
    }
  }

  function setLocalValue(id, val) {
    if (lcst) {
      if (typeof id === 'object') {
        for (var key in id) {
          try {
            id[key] && lcst.setItem(key, id[key]);
          } catch (err) {
          }
        }
      } else {
        try {
          lcst.setItem(id, val);
        } catch (err) {
        }
      }
    }
    return this;
  }

  function removeLocalValue(id) {
    if (lcst) {
      if (typeof id === 'object') {
        for (var key in id) {
          try {
            lcst.removeItem(id[key]);
          } catch (err) {
          }
        }
      } else {
        try {
          lcst.removeItem(id);
        } catch (err) {
        }
      }
    }
    return this;
  }

  this.set = setLocalValue;
  this.get = getLocalValue;
  this.del = removeLocalValue;
};

var HashHandler = (function () {
  var lc = window.location;

  function getByURL(url) {
    var hash;
    url && decodeURIComponent(url).replace(new RegExp('#(.*)', 'g'), function ($1, $2) {
      hash = $2;
    });
    return hash;
  }

  function get() {
    return getByURL(lc.hash);
  }

  function set(hash) {
    lc.hash = hash;
  }

  return {
    get: get,
    set: set,
    getByURL: getByURL
  }
})();
exports.HashHandler = HashHandler;

var Navigator = (function () {
  var frame,
    androidReg = /Android/gi,
    isAndroid = androidReg.test(navigator.platform) || androidReg.test(navigator.userAgent);
  frame = null;
  function appendFrame(frame) {
    frame && document.body.appendChild(frame);
  }

  function removeFrame(frame) {
    frame && frame.parentNode.removeChild(frame);
  }

  function getFrame(src, name) {
    var _frame = document.createElement("iframe");
    _frame.setAttribute("style", "display:none;width:0;height:0;position: absolute;top:0;left:0;border:0;");
    _frame.setAttribute("height", "0px");
    _frame.setAttribute("width", "0px");
    _frame.setAttribute("frameborder", "0");
    name && _frame.setAttribute("name", name);
    if (src) {
      _frame.setAttribute("src", src);
    } else {
      appendFrame(_frame);
    }
    return _frame;
  }

  function protocol(command, single, noframe) {
    var _frame, timer;
    if (noframe) {
      window.location.href = command;
      return;
    }
    if (single) {
      if (isAndroid) {
        _frame = getFrame();
        _frame.setAttribute("src", command);
      } else {
        _frame = getFrame(command);
        appendFrame(_frame);
      }
      timer = setTimeout(function () {
        _frame && removeFrame(_frame);
      }, 30000);
      _frame.onload = _frame.onreadystatechange = function () {
        timer && clearTimeout(timer);
        _frame && removeFrame(_frame);
      }
    } else {
      frame = frame || getFrame();
      frame.setAttribute("src", command);
    }
  }

  return {
    protocol: protocol,
    getFrame: getFrame,
    appendFrame: appendFrame,
    removeFrame: removeFrame
  }
})();
exports.Navigator = Navigator;

var FormHandler = new function () {
  function getForm(method) {
    var _form = document.createElement('form');
    _form.setAttribute("style", "display:none;width:0;height:0;position: absolute;top:0;left:0;border:0;");
    _form.setAttribute("method", method || 'POST');
    document.body.appendChild(_form);
    return _form;
  }

  this.asyncSubmit = function (action, data) {
    this.submit(action, data, true);
  }

  this.submit = function (action, data, async) {
    var target,
      frame,
      form = getForm(),
      inputs = [],
      itpl = '<input type="text" name="{N}" value="{V}" />';

    if (async) {
      target = '__formhandler_' + new Date().getTime();
      frame = Navigator.getFrame(null, target);
      form.setAttribute('target', target);
      setTimeout(function () {
        Navigator.removeFrame(frame);
      }, 120000);
    }

    form.setAttribute('action', action);
    data = data || {};
    for (var key in data) {
      inputs.push(itpl.replace('{N}', key).replace('{V}', data[key]));
    }
    form.innerHTML = inputs.join('');
    action && setTimeout(function () {
      form.submit();
    }, 100);
  }
};
exports.FormHandler = FormHandler;

exports.localParam = function localParam(search, hash) {
  search = search || window.location.search;
  hash = hash || window.location.hash;
  var fn = function (str, reg) {
    if (str) {
      var data = {};
      str.replace(reg, function ($0, $1, $2, $3) {
        data[$1] = $3;
      });
      return data;
    }
  }
  return {
    search: fn(search, new RegExp("([^?=&]+)(=([^&]*))?", "g")) || {},
    hash: fn(hash, new RegExp("([^#=&]+)(=([^&]*))?", "g")) || {}
  };
}

exports.randomColor = function randomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

exports.randomList = function randomList(list, len, verify, ratio) {
  var rs = [], _list = list.slice(0);
  len = len || _list.length;
  ratio = ratio ? ratio : 0;
  function rd(_array) {
    _array = _array.sort(function () {
      return (0.5 - Math.random());
    });
  }

  while (ratio) {
    rd(_list);
    ratio--;
  }
  if (_list.length <= len) {
    rs = _list;
  } else {
    while (rs.length < len) {
      var index = Math.floor(Math.random() * _list.length),
        item = _list[index];
      if (( verify && verify.call(this, item, _list) ) || !verify) {
        rs.push(item);
        _list.splice(index, 1);
      }
    }
  }
  return rs;
}

exports.isInArray = function isInArray(arr, val) {
  if ($.inArray(val, arr) != -1) {
    return true;
  }
  for (var key in arr) {
    if (typeof val === 'function' && val.call(this, arr[key])) {
      return true;
    }
  }
  return false;
}

exports.InlineWebWorker = {
  ready: window.Blob && window.Worker && window.URL,
  create: function create(selector){
    return new Worker(window.URL.createObjectURL(new Blob([document.querySelector(selector).textContent])));
  }
}

var thisPage = window.location.href.replace(window.location.hash, '');
var thisPath = thisPage.substring(0, thisPage.lastIndexOf('/') + 1);
exports.thisPage = thisPage;
exports.thisPath = thisPath;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(0);

exports.schemaBuilder = lf.schema.create('Codelf', 6);
exports.eventType = {
  C: 'CREATE',
  U: 'UPDATED',
  D: 'DELETE'
};



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(0);
var Database = __webpack_require__(1);

//model
//http://githut.info/
exports.TopProgramLan = [{"id": "22,106", "language": "JavaScript, CoffeeScript"}, {
  "id": "133,135",
  "language": "CSS"
}, {"id": "3,39", "language": "HTML"}, {"id": 137, "language": "Swift"}, {
  "id": 35,
  "language": "Objective-C"
}, {"id": 23, "language": "Java"}, {"id": 19, "language": "Python"}, {"id": 24, "language": "PHP"}, {
  "id": 32,
  "language": "Ruby"
}, {"id": 28, "language": "C"}, {"id": 16, "language": "C++"}, {"id": 6, "language": "C#"}, {
  "id": 55,
  "language": "Go"
}, {"id": 51, "language": "Perl"}, {"id": "104,109", "language": "Clojure, ClojureScript"}, {
  "id": 40,
  "language": "Haskell"
}, {"id": 54, "language": "Lua"}, {"id": 20, "language": "Matlab"}, {"id": 144, "language": "R"}, {
  "id": 47,
  "language": "Scala"
}, {"id": "69,78,146", "language": "Shell"}, {"id": 29, "language": "Lisp"}, {"id": 42, "language": "ActionScript"}];

exports.BeanHelpers = new function () {
  this.getRandomLabelType = function () {
    var types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
    return Util.randomList(types, 1)[0];
  };

  this.getKeyWordReg = function (key) {
    return new RegExp('([\\-_\\w\\d\\/\\$]{0,}){0,1}' + key + '([\\-_\\w\\d\\$]{0,}){0,1}', 'gi');
  }
};
exports.Searchcode = __webpack_require__(5);
exports.YoudaoTranslate = __webpack_require__(6);
exports.Bookmark = __webpack_require__(7);
exports.DDMS = __webpack_require__(8);

//init DB
Database.schemaBuilder.connect({
  storeType: Util.os.ios?lf.schema.DataStoreType.WEB_SQL: null
}).then(function (db) {
  $(window).trigger('DB:ready',db);
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

$(function () {
  __webpack_require__(4);
  __webpack_require__(9);
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(0);
var Model = __webpack_require__(2);

//view and render
var els = {
  win: $(window),
  body: $('body'),

  title: $('.main-title>header h1'),
  subTitle: $('.main-title h5'),
  searchForm: $('.search-form'),
  searchInput: $('.search-form input'),
  searchBtn: $('.search-form button.search'),
  searchDropdownBtn: $('.search-form button.dropdown-toggle'),
  searchDropdownMenu: $('.search-form .dropdown-menu'),
  searchDropdownMenuTpl: $('.search-form .dropdown-menu script').html(),

  searchRelate: $('.search-relate'),
  searchRelateBd: $('.search-relate .bd'),
  searchRelateTpl: $('.search-relate script').html(),

  searchResult: $('.search-result'),
  searchResultCt: $('.search-result .ct'),
  searchResultTpl: $('.search-result script').html(),
  searchResultHd: $('.search-result .hd'),
  searchResultBd: $('.search-result .bd'),

  variableMenuTpl: $('script[template="variableMenu"]').html(),

  sourceCodeModal: $('.sourcecode-modal'),
  sourceCodeModalDropdown: $('.sourcecode-modal .dropdown-menu'),
  sourceCodeModalDropdownTpl: $('.sourcecode-modal .dropdown-menu script').html(),
  sourceCodeContent: $('.sourcecode-modal .modal-body pre code'),
  sourceCodeContentHd: $('.sourcecode-modal .modal-body .hd'),

  confirmModal: $('.confirm-modal'),

  githubCorner: $('.github-corner svg'),
  donate: $('.donate'),
  donateTitle: $('.donate .title'),
  noticeLinks: $('.notice-link a'),

  isGithub: /github\.io/g.test(location.href) || Util.localParam()['search']['debug']==1,
  lastVal: ''
};

function bindEvent() {
  window.addEventListener('hashchange', onLocationHashChanged, false);
  els.searchDropdownMenu.on('click', '.all', onResetLang);
  els.searchDropdownMenu.on('change', 'input', onSelectLang);
  els.searchInput.on('keyup', function () {
    renderSearchBtn();
  });
  els.searchBtn.on('click', function () {
    onSearch();
  });
  els.searchInput.keypress(function (e) {
    if (e.which == 13) {
      onSearch();
      return false;
    }
  });
  els.searchResultBd.on('click mouseenter', '.variable-wrap', function (e) {
    e.preventDefault();
    e.stopPropagation();
    renderVariableMenu.call(this);
    return false;
  });
  els.body.on('click', '.variable-btns__code', showSourceCode);
  els.body.on('click', beforeRemoveVariableMenus);
  els.sourceCodeModal.on('hidden.bs.modal', renderSourceCode);

  els.confirmModal.on('click','.btn',hideConfirm);
  els.win.on('MainView:showConfirm',function(){
    showConfirm.apply(this,[].slice.call(arguments,1));
  });
  els.win.on('MainView:hideConfirm',hideConfirm);

  els.win.on('MainView:renderAnalytics',function(){
    renderAnalytics.apply(this,[].slice.call(arguments,1));
  });
}

function init() {
  if (Util.os.ios || Util.os.android) {
    els.isMobile = true;
    els.body.addClass('mobile');
    FastClick.attach(document.body);
  }
  bindEvent();
  renderTitle();
  renderLangMunu();
  onLocationHashChanged();
  renderAnalytics();
  renderNotice();
}

function showSourceCode() {
  els.lastSourceCodeId = this.dataset.id;
  var htm = Model.Searchcode.getCacheSourceCodeHtmlById(this.dataset.id);
  if(htm){
    els.sourceCodeContentHd.hide();
    els.sourceCodeContent.html(htm);
  }else{
    renderSourceCode();
    Model.Searchcode.requestSourceCode(this.dataset.id, renderSourceCode);
  }
  els.lastVariableKeyword = this.dataset.val || els.lastVariableKeyword;
  this.dataset.val && renderRelatedProperty(this.dataset.val);
  els.sourceCodeModal.modal('show');
}

function showConfirm(msg,callback){
  els.confirmModal.find('.modal-body').html(msg||'');
  els.confirmModalYesCallback = callback;
  els.confirmModal.show();
  setTimeout(function(){
    els.confirmModal.addClass('in');
  },50);
}
function hideConfirm(){
  els.confirmModal.removeClass('in');
  setTimeout(function(){
    els.confirmModal.hide();
  },1000);
  if($(this).hasClass('yes')){
    els.confirmModalYesCallback && els.confirmModalYesCallback();
  }
  els.confirmModalYesCallback = null;
}

function onLocationHashChanged(e) {
  e && e.preventDefault();
  var hash = Util.HashHandler.get();
  hash && onSearch(decodeURIComponent(hash).replace(/(\?.*)/, ''));
}

function onSelectLang() {
  var checked = els.searchDropdownMenu.find('input:checked'), lang = [];
  checked.each(function () {
    lang.push(this.value);
  });
  Model.Searchcode.setLang(lang.join(' '));
  renderSearchBtn('Search');
}

function onResetLang() {
  els.searchDropdownMenu.find('input').removeAttr('checked');
  Model.Searchcode.setLang();
  renderSearchBtn('Search');
}

function onSearch(val) {
  els.searchInput.blur();
  beforeRemoveVariableMenus();
  if (val && val == els.lastInputVal) {
    return;
  }
  val = val || els.searchInput.val().trim();
  els.searchInput.val(val);
  els.valHistory = els.valHistory || '';
  if (val.length) {
    var isNext = val == els.lastInputVal;
    els.lastInputVal = val;
    if (!isNext) {
      Util.HashHandler.set(encodeURIComponent(val));
      var tmpval = [], tmpch = [];

      els.lastInputVal.replace(/\s+/ig, '+').split('+').forEach(function (key) {
        if (/[^\x00-\xff]/gi.test(key)) {
          tmpch.push(key);
          els.isZHSearchKeyWords = true;
        } else {
          tmpval.push(key);
        }
      });
      els.lastVal = tmpval.join(' ');
      if (tmpch.length) {
        Model.YoudaoTranslate.request(tmpch.join(' '), function (tdata) {
          //basic translate
          if (tdata.basic && tdata.basic.explains) {
            els.valHistory = tdata.basic.explains.join(' ');
          }
          //web translate
          if (tdata.web && tdata.web) {
            tdata.web.forEach(function (key) {
              els.valHistory += ' ' + key.value.join(' ');
            });
          }
          if (tdata && tdata.translation) {
            els.lastVal = els.lastVal + ' '
              + tdata.translation.join(' ')
                .replace(/[!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, '')
                .split(' ').filter(function (key, idx, inputArray) {
                  return inputArray.indexOf(key) == idx && !/^(a|an|the)$/ig.test(key);
                }).join(' ');
            beforeDoSearch();
          } else {
            beforeDoSearch();
          }
        });
      } else {
        beforeDoSearch();
      }
    } else {
      doSearch();
    }
  }
  renderTitle(true);
}

function beforeDoSearch() {
  els.lastVal = els.lastVal.trim();
  els.lastVal = els.lastVal.split(' ').filter(function (key, idx, inputArray) {
    return inputArray.indexOf(key) == idx;
  }).join(' ');
  saveKeyWordRegs();
  renderHistory();
  doSearch();
}

function saveKeyWordRegs() {
  els.valRegs = [];
  els.lastVal.replace(/\s+/ig, '+').split('+').forEach(function (key) {
    key.length && key.length > 1 && els.valRegs.push(Model.BeanHelpers.getKeyWordReg(key));
  });
}

function doSearch() {
  if (els.lastVal && els.lastVal.length) {
    Model.Searchcode.request(els.lastVal, renderSearchResult);
    renderSearchResultHeader('loading');
    renderSearchBtn();
  } else {
    renderSearchResultHeader('error');
    renderSearchBtn('Search');
  }

  els.isGithub && Model.DDMS.postKeyWords(els.lastInputVal);
  renderAnalytics('q=' + els.lastInputVal);
}

function renderTitle(black) {
  els.title[black ? 'removeClass' : 'addClass']('animated');
}

function formatPropertyName(name) {
  name = name.toLowerCase();
  return '__codelf__' + name;
}

function storeRelatedProperty(name, res) {
  name = formatPropertyName(name);
  els.storeRelatedProperties = els.storeRelatedProperties || {};
  if (!/\//g.test(name) /*exclude links*/ && name.length < 64 /*too long*/) {
    var prop = els.storeRelatedProperties[name] = els.storeRelatedProperties[name] || {
        ids: [],
        repos: [],
        repoNames: [],
        repoFilePaths: [],
        languages: []
      };
    if (!Util.isInArray(prop['ids'], res.id)) {
      prop['ids'].push(res.id);
      prop['repos'].push(res.repo);
      prop['repoNames'].push(res.name);
      prop['repoFilePaths'].push(res.repo+(res.location||'').substring(1)+'/'+res.filename);
      prop['languages'].push(res.language);
    }
  }
}

function getRelatedProperty(name) {
  name = formatPropertyName(name);
  return els.storeRelatedProperties[name];
}

function renderDark() {
  var hour = new Date().getHours();
  !(hour >= 12 && hour <= 13) && els.body.addClass('dark');
}

function renderLangMunu() {
  var htm = [], storeLang = Model.Searchcode.getLang();
  storeLang = storeLang ? storeLang.split(' ') : [];
  Model.TopProgramLan.forEach(function (key) {
    htm.push(els.searchDropdownMenuTpl
      .replace('{id}', key.id)
      .replace('{language}', key.language)
      .replace('{checked}', $.inArray(key.id, storeLang) != -1 ? 'checked' : ''));
  });
  els.searchDropdownMenu.append(htm.join(''));
}

function renderSearchResult(data) {
  var vals = [], labels = [], lineStr;
  data.results.forEach(function (rkey) {
    //filter codes
    lineStr = [];
    for (var lkey in rkey.lines) {
      var lstr = rkey.lines[lkey];
      //no base64
      if (!(/;base64,/g.test(lstr) && lstr.length > 256)) {
        lineStr.push(lstr);
      }
    }
    lineStr = lineStr.join('').replace(/\r\n/g, ' ');
    //match variables
    els.valRegs.forEach(function (key) {
      $.each(lineStr.match(key) || [], function (i, el) {
        //remove "-" and "/" from the starer and the ender
        el = el.replace(/^(\-|\/)*/, '').replace(/(\-|\/)*$/, '');
        storeRelatedProperty(el, rkey);
        if (
          !/\//g.test(el) /*exclude links*/
          && $.inArray(el, vals) === -1
          && $.inArray(el.toLowerCase(), vals) === -1
          && $.inArray(el.toUpperCase(), vals) === -1
          && el.length < 64 /*too long*/
        ) {
          vals.push(el);
          //render variable labels
          labels.push(els.searchResultTpl
            .replace('{label_type}', Model.BeanHelpers.getRandomLabelType())
            .replace(/\{val\}/g, el)
            .replace('{id}', rkey.id)
            .replace('{repo}', rkey.repo)
          );
        }
      });
    });
  });

  if (labels.length) {
    var blockquote = els.searchResultBd.find('.blockquote');
    if (blockquote[0]) {
      els.searchResultBd.find('.blockquote').remove();
    } else {
      labels.push('<hr/>');
    }
    els.searchResultBd.prepend(labels.join(''));
    els.searchResultCt.removeClass('ct--white');
    renderSearchResultHeader();
    renderTooltips();
  } else {
    renderSearchResultHeader('error');
  }
  renderDark();
  renderTitle();
  renderDonate();
  renderBaiduShare();
  els.subTitle.css({'max-height': 0, padding: 0, margin: 0});
}

function renderSearchBtn(str) {
  var val = els.searchInput.val().trim();
  els.searchBtn.removeClass('more').addClass((str || (val.length && val != els.lastInputVal)) ? '' : 'more');
}

function renderSearchResultHeader(cls) {
  els.searchResultHd.removeClass('loading error').addClass(cls || '');
}

function renderVariableMenu() {
  beforeRemoveVariableMenus();
  $(this).popover({
    trigger: 'manual',
    html: true,
    placement: 'top',
    offset: '-10 0',
    title: function () {
      return false;
    },
    content: function () {
      els.sourceCodeModal.find('.modal-header a.cur-repo').attr('href', this.dataset.repo);
      var prop = getRelatedProperty(this.dataset.val);
      return els.variableMenuTpl
        .replace('{id}', this.dataset.id)
        .replace('{count}', prop ? prop['ids'].length : 1)
        .replace(/\{val\}/g, this.dataset.val)
        .replace('{repo}', this.dataset.repo);
    },
    template: '<div class="popover popover--variable" role="tooltip">' +
    '<div class="popover-arrow"></div><div class="popover-content"></div>' +
    '</div>'
  });
  $(this).popover('show');
  els.variableClipboard = new ZeroClipboard($('.variable-btns__copy')[0]);
}

function renderTooltips() {
  els.showNextTipTimer = els.showNextTipTimer || 0;
  var now = new Date().getTime();
  if (now - els.showNextTipTimer > 1000 * 1800) {
    els.showNextTipTimer = now;
    setTimeout(function () {
      els.searchBtn.tooltip('show');
    }, 1000);
    setTimeout(function () {
      els.searchBtn.tooltip('dispose');
    }, 3000);
  }
}

function renderHistory() {
  var his = [els.lastVal, els.valHistory], labels = [], tmp = [];
  els.valHistory = his.join(' ')
    .replace(/[`~!@#$^&*()=|{}':;',\[\].<>\/?~！@#￥……&*（）——|\\{\\}【】‘；：”“’。，、？]/g, ' ')
    .replace(/\s+/ig, '+').split('+')
    .filter(function (key, idx, inputArray) {
      var checked = key.length > 1
        && inputArray.indexOf(key) == idx
        && !/[^\x00-\xff]/gi.test(key)
        && !Util.isInArray(tmp, function (ikey) {
          return new RegExp('^' + key + '$', 'ig').test(ikey)
        });
      if (checked) {
        tmp.push(key);
        labels.push(els.searchRelateTpl.replace(/\{val\}/g, key));
      }
      return checked;
    })
    .join(' ');
  if (labels.length < 1) {
    ['foo', 'bar', '2016'].forEach(function (key) {
      labels.push(els.searchRelateTpl.replace(/\{val\}/g, key));
    });
  }
  els.searchRelateBd.html('<span class="label label-default">Suggestions :</span>' + labels.join(''));
}

function renderSourceCode(data) {
  els.sourceCodeContentHd.show();
  els.sourceCodeContent.removeClass('prettyprinted').text('');
  if (data && data.code) {
    renderSourceCodeByWorker(function(){
      els.sourceCodeContentHd.hide();
      els.sourceCodeContent.text(data.code);
      setTimeout(function(){
        PR.prettyPrint(renderHighlightVariableKeyword);
      }, 100);
    });
    renderAnalytics('vc&q=' + els.lastInputVal);
  }
}

function renderSourceCodeByWorker(callback){
  if(Util.InlineWebWorker.ready){
    if(!els.prettifyWorker){
      els.prettifyWorker = els.prettifyWorker || Util.InlineWebWorker.create('#worker_prettify');
    }
    els.prettifyWorker.onmessage = function(e){
      if(e.data=='after'){
        callback && callback();
      }
    }
    els.prettifyWorker.postMessage('before');
  }else{
    callback && callback();
  }
}

function renderHighlightVariableKeyword(){
  els.sourceCodeContent.unhighlight();
  setTimeout(function(){
    els.sourceCodeContent.highlight(els.lastVariableKeyword);
    setTimeout(function(){
      els.sourceCodeContent.find('.highlight').each(function(idx){
        this.setAttribute('tabindex',idx+1);
      });
      setTimeout(function() {
        Model.Searchcode.setCacheSourceCodeHtmlById(els.lastSourceCodeId,els.sourceCodeContent.html());
      },300);
    },300);
  },800);
}

function renderRelatedProperty(name) {
  var htm = [],
    prop = getRelatedProperty(name);
  if (prop) {
    var ids = prop['ids'],
      repos = prop['repos'],
      repoNames = prop['repoNames'],
      repoFilePaths = prop['repoFilePaths'],
      langs = prop['languages'],
      i = 0, len = ids.length;
    for (i; i < len; i++) {
      htm.push(
        els.sourceCodeModalDropdownTpl.replace(/\{id\}/g, ids[i])
          .replace(/\{repo\}/g, repos[i])
          .replace(/\{repoName\}/g, repoNames[i])
          .replace(/\{repoFilePath\}/g, repoFilePaths[i])
          .replace(/\{lang\}/g, langs[i])
          .replace(/\{label_type\}/g, Model.BeanHelpers.getRandomLabelType().replace('secondary', 'default'))
      );
    }
  }
  els.sourceCodeModalDropdown.html(htm.join(''));
  els.sourceCodeModal.find('.match-count').html(htm.length);
}

function renderDonate(isZh) {
  isZh = isZh || els.isZHSearchKeyWords;
  els.donate.removeAttr('hidden');
  els.donateTitle.removeClass('cn en').addClass(isZh ? 'cn' : 'en');
}

function renderNotice() {
  els.noticeLinks.hide();
  els.noticeLinks.eq(Math.floor(Math.random() * els.noticeLinks.length)).show();
  setTimeout(renderNotice, 5 * 1000);
}

function renderAnalytics(param) {
  els.isGithub && setTimeout(function () {
    Util.Navigator.getFrame(null).setAttribute('src', '//www.mihtool.com/analytics.html?codelf' + (param ? ('&' + param) : ''));
  }, param ? 500 : 3000);
}

function renderBaiduShare() {
  return;
  if (els.hasBaiduShare || !els.isZHSearchKeyWords) {
    return;
  }
  els.hasBaiduShare = true;
  window._bd_share_config = {
    "common": {
      "bdSnsKey": {},
      "bdText": "",
      "bdMini": "2",
      "bdMiniList": false,
      "bdPic": "",
      "bdStyle": "0",
      "bdSize": "16"
    }, "slide": {"type": "slide", "bdImg": "5", "bdPos": "right", "bdTop": els.win.height() / 2 - 80}
  };

  with (document)0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = '//bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
}

function beforeRemoveVariableMenus() {
  els.body.find('.popover--variable').remove();
}

init();


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(0);
var Database = __webpack_require__(1);


module.exports = new function () {
  var _this = this;
  var DB;
  var schemaBuilder = Database.schemaBuilder;
  var Tables;
  var DBEventType = Database.eventType;
  var win = $(window);

  schemaBuilder
    .createTable('SourceCode')
    .addColumn('id', lf.Type.INTEGER)
    .addColumn('sid', lf.Type.OBJECT)
    .addColumn('htm', lf.Type.OBJECT)
    .addColumn('create', lf.Type.DATE_TIME)
    .addPrimaryKey(['id'], true);

  var persistLangsName = 'codelf_langs_selected';
  var langs = Util.localStorage.get(persistLangsName), langQuery;
  var page = 0;
  var lastVal;
  var cacheSourceCodes = {};
  var cacheSourceCodeHtmls = {};
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

  win.on('DB:ready', function (ev,db) {
    DB = db;
    Tables = {
      SourceCode: DB.getSchema().table('SourceCode')
    };
    _this.SourceCodeTable.getAll(function(rows){
      rows.forEach(function (key) {
        cacheSourceCodeHtmls[key.sid] = key.htm;
      });
    });
  });

  this.SourceCodeTable = new function () {
    this.add = function (sid, htm, callback) {
      if (!sid) {
        return;
      }
      var row = Tables.SourceCode.createRow({
        'sid': sid,
        'htm': htm,
        'create': new Date()
      });
      DB.insertOrReplace().into(Tables.SourceCode).values([row])
        .exec().then(function () {
        callback && callback();
        win.trigger('DB:Table.SourceCode.onchange', {type: DBEventType.C});
      });
    }

    this.getAll = function (callback) {
      DB.select()
        .from(Tables.SourceCode)
        .orderBy(Tables.SourceCode.id, lf.Order.DESC)
        .exec().then(function (rows) {
        callback && callback(rows);
      });
    }
  };

  this.setCacheSourceCodeHtmlById = function(id,htm){
    cacheSourceCodeHtmls[id] = htm;
    _this.SourceCodeTable.add(id,htm);
  }
  this.getCacheSourceCodeHtmlById = function(id){
    return cacheSourceCodeHtmls[id];
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
      dataType: 'jsonp',
      //dataType: 'json',
      //url: 'https://searchcode.com/api/codesearch_I/' + (langQuery ? ('?' + langQuery) : ''),
      url: 'https://searchcode.com/api/jsonp_codesearch_I/' + (langQuery ? ('?' + langQuery) : ''),
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


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(0);

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


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Database = __webpack_require__(1);

module.exports = new function () {
  var BM = this;
  var DB;
  var schemaBuilder = Database.schemaBuilder;
  var Tables;
  var DBEventType = Database.eventType;
  var win = $(window);
  var curUserName;
  var curUser;

  schemaBuilder
    .createTable('User')
    .addColumn('id', lf.Type.INTEGER)
    .addColumn('name', lf.Type.STRING)
    .addColumn('create', lf.Type.DATE_TIME)
    .addColumn('lastSync', lf.Type.DATE_TIME)
    .addPrimaryKey(['id'], true);

  schemaBuilder
    .createTable('RepoGroup')
    .addColumn('id', lf.Type.INTEGER)
    .addColumn('name', lf.Type.STRING)
    .addColumn('repoIds', lf.Type.OBJECT)
    .addColumn('order', lf.Type.INTEGER)
    .addColumn('create', lf.Type.DATE_TIME)
    .addPrimaryKey(['id'], true);

  schemaBuilder
    .createTable('Repo')
    .addColumn('id', lf.Type.INTEGER)
    .addColumn('userId', lf.Type.INTEGER)
    .addColumn('originRepoId', lf.Type.STRING)
    .addColumn('data', lf.Type.OBJECT)
    .addColumn('create', lf.Type.DATE_TIME)
    .addPrimaryKey(['id'], true);

  schemaBuilder
    .createTable('RepoTag')
    .addColumn('id', lf.Type.INTEGER)
    .addColumn('name', lf.Type.STRING)
    .addColumn('color', lf.Type.STRING)
    .addColumn('repoIds', lf.Type.OBJECT)
    .addColumn('create', lf.Type.DATE_TIME)
    .addPrimaryKey(['id'], true);

  win.on('DB:ready', function (ev,db) {
    DB = db;
    Tables = {
      User: DB.getSchema().table('User'),
      RepoGroup: DB.getSchema().table('RepoGroup'),
      RepoTag: DB.getSchema().table('RepoTag'),
      Repo: DB.getSchema().table('Repo')
    };
    BM.RepoTagTable.addDefaultTags();
  });

  this.UserTable = new function () {
    this.add = function (name, callback) {
      if (!name) {
        return;
      }
      var row = Tables.User.createRow({
        'name': name,
        'create': new Date(),
        'lastSync': new Date()
      });
      DB.select().from(Tables.User).where(Tables.User.name.eq(name))
        .exec().then(function (rows) {
        !rows.length && DB.insertOrReplace().into(Tables.User).values([row])
          .exec().then(function (res) {
            curUser = res[0];
            callback && callback();
            win.trigger('DB:Table.User.onchange', {type: DBEventType.C});
          });
      });
    }

    this.updateSync = function (name) {
      DB.update(Tables.User).set(Tables.User.lastSync, new Date()).where(Tables.User.name.eq(name))
        .exec().then(function () {
        win.trigger('DB:Table.User.onchange', {type: DBEventType.U});
      });
    }

    this.delete = function (id, callback) {
      DB.delete()
        .from(Tables.Repo)
        .where(Tables.Repo.userId.eq(id))
        .exec().then(function () {
        DB.delete()
          .from(Tables.User)
          .where(Tables.User.id.eq(id))
          .exec().then(function (res) {
          callback && callback(res);
          win.trigger('DB:Table.User.onchange', {type: DBEventType.D});
        });
      });
    }

    this.getAll = function (callback) {
      DB.select()
        .from(Tables.User)
        .orderBy(Tables.User.create, lf.Order.DESC)
        .exec().then(function (rows) {
        callback && callback(rows);
      });
    }
  };

  this.RepoGroupTable = new function () {
    this.add = function (name) {
      if (!name) {
        return;
      }
      var row = Tables.RepoGroup.createRow({
        'name': name,
        'repoIds': [],
        'order': 0,
        'create': new Date()
      });
      DB.select().from(Tables.RepoGroup).where(Tables.RepoGroup.name.eq(name))
        .exec().then(function (rows) {
        !rows.length && DB.insertOrReplace().into(Tables.RepoGroup).values([row])
          .exec().then(function (res) {
            win.trigger('DB:Table.RepoGroup.onchange', {type: DBEventType.C});
          });
      });
    }

    this.addRopoId = function (id, repoId) {
      DB.select().from(Tables.RepoGroup).where(Tables.RepoGroup.id.eq(id))
        .exec().then(function (rows) {
        if (rows && rows[0]) {
          var ids = /string/i.test(typeof rows[0].repoIds)?
            (rows[0].repoIds.length ? rows[0].repoIds.split(',') : []):
            rows[0].repoIds;
          if (ids.indexOf(repoId) == -1) {
            ids.push(repoId);
          }
          DB.update(Tables.RepoGroup).set(Tables.RepoGroup.repoIds, ids).where(Tables.RepoGroup.id.eq(id))
            .exec();
        }
      });
    }

    this.removeRopoId = function (id, repoId) {
      DB.select().from(Tables.RepoGroup).where(Tables.RepoGroup.id.eq(id))
        .exec().then(function (rows) {
        if (rows && rows[0]) {
          var ids = /string/i.test(typeof rows[0].repoIds)?
                      (rows[0].repoIds.length ? rows[0].repoIds.split(',') : []):
                      rows[0].repoIds,
            idx = ids.indexOf(repoId);

          if (idx != -1) {
            ids.splice(idx, 1);
          }
          DB.update(Tables.RepoGroup).set(Tables.RepoGroup.repoIds, ids).where(Tables.RepoGroup.id.eq(id))
            .exec();
        }
      });
    }
    this.updateName = function (id, name) {
      DB.update(Tables.RepoGroup).set(Tables.RepoGroup.name, name).where(Tables.RepoGroup.id.eq(id))
        .exec().then(function () {
        win.trigger('DB:Table.RepoGroup.onchange', {type: DBEventType.U, fields: 'name'});
      });
    }

    this.delete = function (id, callback) {
      DB.delete()
        .from(Tables.RepoGroup)
        .where(Tables.RepoGroup.id.eq(id))
        .exec().then(function (res) {
        callback && callback(res);
        win.trigger('DB:Table.RepoGroup.onchange', {type: DBEventType.D});
      });
    }

    this.deleteAll = function (callback) {
      DB.delete()
        .from(Tables.RepoGroup)
        .exec().then(function (res) {
        callback && callback(res);
        win.trigger('DB:Table.RepoGroup.onchange', {type: DBEventType.D});
      });
    }

    this.addAll = function (data, callback) {
      if(data){
        this.deleteAll(function(){
          var rows = [];
          data.forEach(function(key){
            rows.push(Tables.RepoGroup.createRow({
              'name': key.name,
              'repoIds': key.repoIds,
              'order': key.order,
              'create': new Date()
            }));
          });
          DB.insertOrReplace().into(Tables.RepoGroup).values(rows)
            .exec().then(function () {
            callback && callback();
            win.trigger('DB:Table.RepoGroup.onchange', {type: DBEventType.C});
          });
        });
      }
    }

    this.getAll = function (callback) {
      DB.select()
        .from(Tables.RepoGroup)
        .orderBy(Tables.RepoGroup.create, lf.Order.DESC)
        .exec().then(function (rows) {
        callback && callback(rows);
      });
    }
  };

  this.RepoTagTable = new function () {
    this.addDefaultTags = function(callback){
      var tags = [
        {
          name: 'Red',
          color: '#ff5f5f'
        },
        {
          name: 'Orange',
          color: '#fba45b'
        },
        {
          name: 'Yellow',
          color: '#f6cc67'
        },
        {
          name: 'Green',
          color: '#60cb68'
        },
        {
          name: 'Blue',
          color: '#33baef'
        },
        {
          name: 'Purple',
          color: '#d38adb'
        },
        {
          name: 'Gray',
          color: '#a4a4a7'
        }
      ];
      DB.select().from(Tables.RepoTag)
        .exec().then(function (rows) {
        if(!rows.length){
          var trows = [];
          tags.forEach(function(key){
            trows.push(Tables.RepoTag.createRow({
              'name': key.name,
              'color': key.color,
              'repoIds': [],
              'create': new Date()
            }));
          });
          DB.insertOrReplace().into(Tables.RepoTag).values(trows)
            .exec().then(function () {
            callback && callback();
          });
        }else{
          callback && callback();
        }
      });
    }

    this.add = function (name,color) {
      if (!name || !color) {
        return;
      }
      var row = Tables.RepoTag.createRow({
        'name': name,
        'color': color,
        'repoIds': [],
        'create': new Date()
      });
      DB.select().from(Tables.RepoTag).where(Tables.RepoTag.name.eq(name))
        .exec().then(function (rows) {
        !rows.length && DB.insertOrReplace().into(Tables.RepoTag).values([row])
          .exec().then(function () {
            win.trigger('DB:Table.RepoTag.onchange', {type: DBEventType.C});
          });
      });
    }

    this.addRopoId = function (id, repoId,callback) {
      DB.select().from(Tables.RepoTag).where(Tables.RepoTag.id.eq(id))
        .exec().then(function (rows) {
        if (rows && rows[0]) {
          var ids = rows[0].repoIds;
          if (ids.indexOf(repoId) == -1) {
            ids.push(repoId);
          }
          DB.update(Tables.RepoTag).set(Tables.RepoTag.repoIds, ids).where(Tables.RepoTag.id.eq(id))
            .exec().then(function(){
              callback && callback();
              win.trigger('DB:Table.RepoTag.onchange', {type: DBEventType.U, fileds: ['repoIds']});
            });
        }
      });
    }

    this.removeRopoId = function (id, repoId,callback) {
      DB.select().from(Tables.RepoTag).where(Tables.RepoTag.id.eq(id))
        .exec().then(function (rows) {
        if (rows && rows[0]) {
          var ids = rows[0].repoIds,
            idx = ids.indexOf(repoId);

          if (idx != -1) {
            ids.splice(idx, 1);
          }
          DB.update(Tables.RepoTag).set(Tables.RepoTag.repoIds, ids).where(Tables.RepoTag.id.eq(id))
            .exec().then(function(){
              callback && callback();
              win.trigger('DB:Table.RepoTag.onchange', {type: DBEventType.U, fileds: ['repoIds']});
            });
        }
      });
    }

    this.updateName = function (id, name) {
      DB.update(Tables.RepoTag).set(Tables.RepoTag.name, name).where(Tables.RepoTag.id.eq(id))
        .exec().then(function () {
        win.trigger('DB:Table.RepoTag.onchange', {type: DBEventType.U, fields: 'name'});
      });
    }

    this.delete = function (id, callback) {
      DB.delete()
        .from(Tables.RepoTag)
        .where(Tables.RepoTag.id.eq(id))
        .exec().then(function (res) {
          callback && callback(res);
          win.trigger('DB:Table.RepoTag.onchange', {type: DBEventType.D});
        });
    }

    this.deleteAll = function (callback) {
      DB.delete()
        .from(Tables.RepoTag)
        .exec().then(function (res) {
          callback && callback(res);
          win.trigger('DB:Table.RepoTag.onchange', {type: DBEventType.D});
        });
    }

    this.addAll = function (data, callback) {
      if(data){
        this.deleteAll(function(){
          var rows = [];
          data.forEach(function(key){
            rows.push(Tables.RepoTag.createRow({
              'name': key.name,
              'color': key.color,
              'repoIds': key.repoIds,
              'create': new Date()
            }));
          });
          DB.insertOrReplace().into(Tables.RepoTag).values(rows)
            .exec().then(function () {
              callback && callback();
              win.trigger('DB:Table.RepoTag.onchange', {type: DBEventType.C});
            });
        });
      }
    }

    this.getAll = function (callback) {
      DB.select()
        .from(Tables.RepoTag)
        .orderBy(Tables.RepoTag.create, lf.Order.DESC)
        .exec().then(function (rows) {
        callback && callback(rows);
      });
    }
  };

  this.RepoTable = new function () {
    var _Table = this;
    this.addListByCurUser = function (repos, callback) {
      function fn() {
        _Table.deleteAllByUserId(curUser.id, function () {
          var rows = [];
          repos.forEach(function (key) {
            rows.push(
              Tables.Repo.createRow({
                'userId': curUser.id,
                'originRepoId': key.id,
                'data': key,
                'create': new Date()
              })
            );
          });
          DB.insertOrReplace().into(Tables.Repo).values(rows)
            .exec().then(function () {
            callback && callback();
            win.trigger('DB:Table.Repo.onchange', {type: DBEventType.C});
          });
        });
      }

      if (curUser && curUser.name == curUserName) {
        fn();
      } else {
        DB.select().from(Tables.User).where(Tables.User.name.eq(curUserName))
          .exec().then(function (rows) {
          curUser = rows[0];
          fn.call(this);
        });
      }
    }

    this.delete = function (id, callback) {
      DB.delete()
        .from(Tables.Repo)
        .where(Tables.Repo.id.eq(id))
        .exec().then(function (res) {
        callback && callback(res);
        win.trigger('DB:Table.Repo.onchange', {type: DBEventType.D});
      });
    }

    this.deleteAllByUserId = function (id, callback) {
      DB.delete()
        .from(Tables.Repo)
        .where(Tables.Repo.userId.eq(id))
        .exec().then(function (res) {
        callback && callback(res);
        win.trigger('DB:Table.Repo.onchange', {type: DBEventType.D});
      });
    }

    this.getAll = function (callback) {
      DB.select()
        .from(Tables.Repo)
        .exec().then(function (rows) {
        callback && callback(rows);
      });
    }
  };

  this.setCurUserName = function (name) {
    curUserName = name;
  };
  this.getCurUserName = function () {
    return curUserName;
  };
  var githubRepos = new function () {
    var _this = this;
    var page = 1;
    var mainData = [];

    function concat(data) {
      if (toString.call(data) == '[object Array]') {
        mainData = mainData.concat(data);
      }
    }
    this.resetPage = function(){
      page = 1;
      mainData = [];
    }
    this.request = function (callback) {
      $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'https://api.github.com/users/' + curUserName + '/repos?sort=updated&per_page=100&page=' + page,
        success: function (data) {
          if (data && data.length) {
            concat(data);
            page++;
            _this.request(callback);
          } else {
            callback && callback(mainData);
          }
        }
      });
    }
  };

  var githubStars = new function () {
    var _this = this;
    var page = 1;
    var mainData = [];

    function concat(data) {
      if (toString.call(data) == '[object Array]') {
        mainData = mainData.concat(data);
      }
    }
    this.resetPage = function(){
      page = 1;
      mainData = [];
    }
    this.request = function (callback) {
      $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'https://api.github.com/users/' + curUserName + '/starred?sort=updated&per_page=100&page=' + page,
        success: function (data) {
          if (data && data.length) {
            concat(data);
            page++;
            _this.request(callback);
          } else {
            callback && callback(mainData);
          }
        }
      });
    }
  };

  this.getAll = function (callback) {
    //select user
    BM.UserTable.getAll(function (users) {
      //select groups
      BM.RepoGroupTable.getAll(function (groups) {
        //select repos
        BM.RepoTable.getAll(function (repos) {
          //select tags
          BM.RepoTagTable.getAll(function (tags) {
            callback && callback.call(this, {
              users: users || [],
              repos: repos || [],
              groups: groups || [],
              tags: tags || []
            });
          });
        });
      });
    });
  }
  this.syncGithub = function (callback) {
    var data = [];
    //reauest repos
    githubRepos.resetPage();
    githubRepos.request(function (res) {
      data = data.concat(res);
      //request star repos
      githubRepos.resetPage();
      githubStars.request(function (res) {
        //add repos to DB
        BM.RepoTable.addListByCurUser(data.concat(res), function () {
          callback && callback();
        });
      });
    });

    this.UserTable.updateSync(curUserName);
  }

  this.syncRepoGroup = function (){

  }

  this.syncRepoTag = function (){

  }

  this.arrayToObj = function (data,idName) {
    var d = {};
    idName = idName || 'id';
    data.forEach(function (key) {
      d[key[idName]] = key;
    });
    return d;
  }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(0);

module.exports = new function () {
  var formAction = '//ddms.mihtool.com/apis/v1/formdata/';
  var formDataAction = '//ddms.mihtool.com/apis/v1/formdata_detail/';
  var persistKeyWordsName = 'codelf_ddms_keywords';
  var persistOrganizerName = 'codelf_ddms_group_sync_id';
  var persistKeyWordsTimerName = persistKeyWordsName + '_timer';
  var cacheKeyWords = (Util.localStorage.get(persistKeyWordsName) || '').split(',');
  var ot = new Date(Util.localStorage.get(persistKeyWordsTimerName) || 0);
  var nt = new Date().getTime();
  var OrganizerSyncId;

  if ((nt - ot) > 1000 * 60 * 60 * 24) {
    cacheKeyWords = [];
    Util.localStorage.set(persistKeyWordsTimerName, nt);
  }
  function saveKeyWords(val) {
    if (!Util.isInArray(cacheKeyWords, val)) {
      cacheKeyWords.push(val);
      Util.localStorage.set(persistKeyWordsName, cacheKeyWords.join(',').replace(/^,*/g, '').replace(/,*&/g, ''));
    }
  }

  this.setOrganizerSyncId = function (val) {
    OrganizerSyncId = val;
    Util.localStorage.set(persistOrganizerName, val);
  }

  this.getOrganizerSyncId = function () {
    return OrganizerSyncId || Util.localStorage.get(persistOrganizerName);
  }

  this.postKeyWords = function (val) {
    if (val && !Util.isInArray(cacheKeyWords, val)) {
      Util.FormHandler.asyncSubmit(formAction, {
        formid: '56e58775ade3a8e84dbacadf',
        keyword: val
      });
      saveKeyWords(val);
    }
  }
  this.postBookmarkUser = function (val) {
    if (val) {
      Util.FormHandler.asyncSubmit(formAction, {
        formid: '56e587a9ade3a8e84dbacae1',
        account: val
      });
    }
  }
  this.postBookmarkGroup = function (repoid,repourl,groupname,lang,stars) {
    if (repoid) {
      Util.FormHandler.asyncSubmit(formAction, {
        formid: '56e587ecade3a8e84dbacae3',
        repoid: repoid,
        repourl: repourl,
        groupname: groupname,
        lang: lang,
        stars: stars
      });
    }
  }
  this.postBookmarkOrganizer = function (data, callback) {
    if (data) {
      window.afterPostBookmarkOrganizer = callback;
      Util.FormHandler.asyncSubmit(formAction, {
        formid: '56fb7d9dade3a8e84dbacaf0',
        success_url: Util.thisPath+'ddms_frame_callback.html?frame_callback=afterPostBookmarkOrganizer',
        data: data
      });
    }
  }
  this.postUpdateBookmarkOrganizer = function (id, data, callback) {
    if (id && data) {
      window.afterPostUpdateBookmarkOrganizer = callback;
      Util.FormHandler.asyncSubmit(formDataAction, {
        id: id,
        success_url: Util.thisPath+'ddms_frame_callback.html?frame_callback=afterPostUpdateBookmarkOrganizer',
        data: data
      });
    }
  }
  this.getBookmarkOrganizer = function (id, callback) {
    $.getJSON(formDataAction+'?callback=?',
      {
        id: id
      },
      function (data) {
        if (data) {
          callback && callback(data);
        }
      });
  }
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(0);
var Model = __webpack_require__(2);

//view and render
var els = {
  win: $(window),
  body: $('body'),

  bookmarkBtn: $('.bookmark-btn'),
  bookmarkModal: $('.bookmark-modal'),
  bookmarkModalTagMenu: $('.bookmark-modal .modal-header .tag-menu'),
  bookmarkModalContent: $('.bookmark-modal .modal-body>.bd'),
  bookmarkModalContentHd: $('.bookmark-modal .modal-body>.hd'),
  bookmarkModalGroupTpl: $('.bookmark-modal script[data-template="repoGroup"]').html(),
  bookmarkModalGroupItemTpl: $('.bookmark-modal script[data-template="groupItem"]').html(),
  bookmarkModalTagItemTpl: $('.bookmark-modal script[data-template="tagItem"]').html(),
  bookmarkModalTagDotTpl: $('.bookmark-modal script[data-template="tagDot"]').html(),
  bookmarkModalReopTpl: $('.bookmark-modal script[data-template="repoItem"]').html(),

  bookmarkUserModal: $('.bookmark-user-modal'),
  bookmarkUserModalUserList: $('.bookmark-user-modal .user-list'),
  bookmarkUserModalUserTpl: $('.bookmark-user-modal .user-list script').html(),

  bookmarkGroupModal: $('.bookmark-group-modal'),
  bookmarkGroupModalInput: $('.bookmark-group-modal input.group-name'),
  bookmarkSyncModal: $('.bookmark-sync-modal'),
  bookmarkSyncModalInput: $('.bookmark-sync-modal input.sync-id'),

  confirmModal: $('.confirm-modal'),

  isDebug: /github\.io/g.test(location.href) || Util.localParam()['search']['debug']==1
};

function bindEvent() {
  els.win.on('DB:ready', renderBookmarkGroup);
  els.win.on('DB:Table.RepoGroup.onchange', renderBookmarkGroup);
  els.win.on('DB:Table.RepoTag.onchange', updateBookmarkTagsData);
  els.bookmarkBtn.on('click', showBookmark);
  els.bookmarkModalTagMenu.on('click', '.dropdown-item', renderBookmarkGroupByTag);
  els.bookmarkModal.on('click', '.add-account', showBookmarkUserModal);
  els.bookmarkModal.on('click', '.add-group', function(){
    showBookmarkGroupModal();
  });
  els.bookmarkModal.on('click', '.modal-header .sync', function(){
    showBookmarkSyncModal();
  });
  els.bookmarkModalContentHd.on('click', '.submit', function(){
    beforeAddBookmarkUser(els.bookmarkModalContentHd);
  });
  els.bookmarkModalContentHd.keypress(function (e) {
    if (e.which == 13) {
      beforeAddBookmarkUser(els.bookmarkModalContentHd);
      return false;
    }
  });
  els.bookmarkUserModal.keypress(function (e) {
    if (e.which == 13) {
      beforeAddBookmarkUser();
      return false;
    }
  });
  els.bookmarkGroupModal.on('click', '.submit-group', beforeEditBookmarkGroup);
  els.bookmarkSyncModal.on('click', '.download', beforeDownloadBookmarkGroupsAndTags);
  els.bookmarkSyncModal.on('click', '.upload', beforeUploadBookmarkGroupsAndTags);
  els.bookmarkModalContent.on('click', '.repo-group-item>.hd .ctrl .del', beforeDelBookmarkGroup);
  els.bookmarkModalContent.on('click', '.repo-group-item>.hd .ctrl .edit', function(){
    showBookmarkGroupModal(this.dataset.id,this.dataset.name);
  });
  els.bookmarkModalContent.on('click', '.group-menu .add-repo', beforeAddRepoToGroup);
  els.bookmarkModalContent.on('click', '.tag-menu .add-repo', beforeAddRepoToTag);
  els.bookmarkModalContent.on('click', '.repo-item .group-menu', renderBookmarkRepoGroupMenu);
  els.bookmarkModalContent.on('click', '.repo-item .tag-menu', renderBookmarkRepoTagMenu);
  els.bookmarkModalContent.on('mouseenter mouseleave ontouchstart ontouchend', '.repo-item', renderBookmarkRepoTagDots);
  els.bookmarkModalContent.on('mouseenter', '.repo-item', renderBookmarkRepoTitle);
  els.bookmarkModalContent.on('keyup','.repo-group-item>.hd .search input',renderBookmarkSearchRepos);
  els.bookmarkModalContent.on('click','.repo-group-item>.hd .search submit',renderBookmarkSearchRepos);
  els.bookmarkModalContent.on('show.bs.collapse hide.bs.collapse','.repo-group-item>.repo-list',function () {
    this !== els.bookmarkModalContent.find('.repo-group-item:last-child .collapse')[0] && toggleLastBookmarkGroup();
  });
  els.bookmarkUserModal.on('click', '.submit', function(){
    beforeAddBookmarkUser();
  });
  els.bookmarkUserModalUserList.on('click', '.sync', function () {
    beforeSyncUser(this.dataset.name);
  });
  els.bookmarkUserModalUserList.on('click', '.del', beforeDelUser);
  els.bookmarkGroupModal.on('hidden.bs.modal', showBookmark);
  els.bookmarkUserModal.on('hidden.bs.modal', showBookmark);
  els.bookmarkSyncModal.on('hidden.bs.modal', showBookmark);
}

function init() {
  bindEvent();
  renderBookmarkTip();
}

function showBookmark() {
  renderBookmarkTip(true);
  els.bookmarkModal.modal('show');
  els.win.trigger('MainView:renderAnalytics','bk');
}

function hideBookmark() {
  els.bookmarkModal.modal('hide');
}

function showBookmarkUserModal() {
  hideBookmark();
  els.bookmarkUserModal.modal('show');
}

function hideBookmarkUserModal() {
  els.bookmarkUserModal.modal('hide');
}

function showBookmarkGroupModal(id,name) {
  hideBookmark();
  els.bookmarkGroupModal.modal('show');
  if(id){
    els.bookmarkGroupModalInput.attr('data-id',id).val(name||'');
  }else{
    els.bookmarkGroupModalInput.removeAttr('data-id').val('');
  }
}

function hideBookmarkGroupModal() {
  els.bookmarkGroupModal.modal('hide');
}

function showBookmarkSyncModal() {
  hideBookmark();
  els.bookmarkSyncModal.modal('show');
  renderBookmarkSyncGroupsAndTags();
}

function hideBookmarkSyncModal() {
  els.bookmarkSyncModal.modal('hide');
}

function getBookmarkRopeHtm(repo, allGroupHtm, allTagHtm) {
  return els.bookmarkModalReopTpl
    .replace(/\{id\}/g, repo.id)
    .replace(/\{originRepoId\}/g, repo.originRepoId)
    .replace(/\{full_name\}/g, repo.data.full_name)
    .replace(/\{_full_name\}/g, repo.data.full_name.toLowerCase())
    .replace(/\{description\}/g, repo.data.description||'')
    .replace(/\{html_url\}/g, repo.data.html_url)
    .replace(/\{language\}/g, repo.data.language||'')
    .replace(/\{stargazers_count\}/g, repo.data.stargazers_count||'')
    .replace(/\{groupItems\}/g, allGroupHtm)
    .replace(/\{tagItems\}/g, allTagHtm)
}
function renderBookmarkTip(dispose) {
  if(dispose){
    els.bookmarkBtn.tooltip('hide');
  }else{
    setTimeout(function(){
      els.bookmarkBtn.tooltip('show');
      setTimeout(function(){
        els.bookmarkBtn.tooltip('hide');
      },2500);
    },1500);
  }
}

function renderBookmarkHeader(cls){
  els.bookmarkModalContentHd.removeClass('empty loading').addClass(cls||'');
}

function renderBookmarkGroup(data) {
  if (!data || !data.repos || !data.users || !data.groups || !data.tags) {
    Model.Bookmark.getAll(renderBookmarkGroup);
    return;
  }
  var repos = Model.Bookmark.arrayToObj(data.repos,'originRepoId'),
    htm = [],
    allRepoHtm = [],
    allGroupHtm = [],
    allTagHtm = [];

  data.groups.forEach(function (key) {
    allGroupHtm.push(els.bookmarkModalGroupItemTpl
      .replace(/\{id\}/g, key.id)
      .replace(/\{name\}/g, key.name)
    );
  });
  allGroupHtm = allGroupHtm.join('');
  data.tags.forEach(function (key) {
    allTagHtm.push(els.bookmarkModalTagItemTpl
      .replace(/\{id\}/g, key.id)
      .replace(/\{name\}/g, key.name)
      .replace(/\{color\}/g, key.color)
      .replace(/\{count\}/g, key.repoIds.length)
    );
  });
  allTagHtm = allTagHtm.join('');
  data.groups.forEach(function (key) {
    var rids = /string/i.test(typeof key.repoIds)?key.repoIds.split(','):key.repoIds,
      rhtm = [];
    rids.length && rids.forEach(function (key) {
      var rd = repos[key];
      rd && rhtm.push(getBookmarkRopeHtm(rd, allGroupHtm, allTagHtm));
    });
    htm.push(els.bookmarkModalGroupTpl
      .replace(/\{id\}/g, key.id)
      .replace(/\{name\}/g, key.name)
      .replace(/\{items\}/g, rhtm.join(''))
      .replace(/\{itemCount\}/g, rhtm.length||'')
    );
  });
  if(data.repos.length){
    //add all group
    data.repos.forEach(function (key) {
      allRepoHtm.push(getBookmarkRopeHtm(key, allGroupHtm, allTagHtm));
    });
    htm.push(els.bookmarkModalGroupTpl
      .replace(/\{id\}/g, 0)
      .replace(/\{name\}/g, 'All')
      .replace(/\{items\}/g, allRepoHtm.join(''))
      .replace(/\{itemCount\}/g, data.repos.length)
    );
  }

  if(data.repos.length || data.groups.length){
    els.bookmarkModalContent.html(htm.join(''));
    renderBookmarkHeader();
  }else{
    els.bookmarkModalContent.html('');
    renderBookmarkHeader('empty');
  }
  setTimeout(function () {
    toggleLastBookmarkGroup(true);
  }, 100);

  updateBookmarkGroupsData();
  renderBookmarkTagMenu(allTagHtm);
  renderBookmarkUsers(data.users);
}

function toggleLastBookmarkGroup(show) {
  els.bookmarkModalContent.find('.repo-group-item:last-child .collapse')[show ? 'addClass' : 'removeClass']('in');
}

function renderBookmarkGroupByTag(){
  var id = this.dataset.id;
  Model.Bookmark.getAll(function(data){
    var repoObjs = Model.Bookmark.arrayToObj(data.repos,'originRepoId'),
      repos = [],
      repoIds;
    if(id){
      repoIds = data.tags.filter(function (key) {
        return key.id == +id;
      })[0].repoIds;
      repoIds.forEach(function (key) {
        repoObjs[key] && repos.push(repoObjs[key]);
      });
      data.repos = repos;
    }
    renderBookmarkGroup(data);
  });
}

function renderBookmarkTagMenu(htm){
  els.bookmarkModalTagMenu.find('.add-repo').remove();
  els.bookmarkModalTagMenu.append(htm);
  updateBookmarkTagsData();
}

function renderBookmarkRepoGroupMenu(){
  var el = $(this),
    id = el.parents('.repo-item').attr('data-repoid');
  els.lastBookmarkGroupsData.forEach(function(key){
    el.find('.add-repo[data-id="'+key.id+'"]')[key.repoIds.indexOf(id)==-1?'removeAttr':'attr']('data-selected',true);
  });
}

function renderBookmarkRepoTagMenu(){
  var el = $(this),
    id = el.parents('.repo-item').attr('data-repoid');
  els.lastBookmarkTagsData.forEach(function(key){
    el.find('.add-repo[data-id="'+key.id+'"]')[key.repoIds.indexOf(id)==-1?'removeAttr':'attr']('data-selected',true);
  });
}

function renderBookmarkRepoTitle(){
  var el = $(this),
    id = el.attr('data-repoid'),
    groups = [];
  els.lastBookmarkGroupsData.forEach(function(key){
    key.repoIds.indexOf(id)!=-1 && groups.push(key.name);
  });

  el.attr('title', groups.length? ('Group: '+ groups.join('\n\t   ')): '');
}

function renderBookmarkRepoTagDots(e){
  var el = $(this),
    id = el.attr('data-repoid'),
    dotsEl = el.find('.tag-dots'),
    htm = [];
  if(/ontouchstart|mouseenter/g.test(e.type)){
    els.lastBookmarkTagsData.forEach(function(key){
      if(key.repoIds.indexOf(id)!=-1){
        htm.push(
          els.bookmarkModalTagDotTpl
            .replace(/\{color\}/g,key.color)
        );
      }
    });
    dotsEl.html(htm.join('')).addClass('in');
  }else{
    dotsEl.html('').removeClass('in');
  }
}

function renderBookmarkSyncGroupsAndTags(syncId) {
  syncId = syncId || Model.DDMS.getOrganizerSyncId();
  if(syncId){
    els.bookmarkSyncModalInput.val(syncId);
    els.bookmarkSyncModal.find('.sync-note').html('Your current sync id is: '+ syncId);
  }
}

function renderBookmarkSearchRepos(){
  var gEl = els.bookmarkModalContent.find('.repo-group-item[data-id="0"]'),
    inputEl = gEl.find('.hd .search input'),
    countEl = gEl.find('.hd .count'),
    val = inputEl.val().trim().toLowerCase(),
    repoEls = gEl.find('.repo-list .repo-item'),
    matchRepoEls = gEl.find('.repo-list .repo-item[data-name*="'+val+'"]'),
    resultRepoEls = val.length?matchRepoEls:repoEls;

  repoEls.attr('hidden','true');
  resultRepoEls.removeAttr('hidden');
  countEl.html(resultRepoEls.length);

}
function renderBookmarkUsers(data) {
  var htm = [];
  data.forEach(function (key) {
    htm.push(els.bookmarkUserModalUserTpl
      .replace(/\{id\}/g, key.id)
      .replace(/\{name\}/g, key.name)
    )
  });
  els.bookmarkUserModalUserList.html(htm.join(''));
}

function beforeAddBookmarkUser(el) {
  el = el || els.bookmarkUserModal;
  var inputEl = el.find('input'),
    val = inputEl.val().trim();
  val = val.replace(/(\/)*$/, '').replace(/^(.{0,}\/)/, '').replace(/@/g,'');
  if (val.length) {
    Model.Bookmark.setCurUserName(val);
    Model.Bookmark.UserTable.add(val, function () {
      beforeSyncUser(val);
    });
    els.isDebug && Model.DDMS.postBookmarkUser(val);
    els.win.trigger('MainView:renderAnalytics','bk&u=' + val);
  }
  inputEl.val('');
  hideBookmarkUserModal();
}

function beforeEditBookmarkGroup() {
  var id = els.bookmarkGroupModalInput.attr('data-id'),
    val = els.bookmarkGroupModalInput.val().trim();

  if(val.length){
    if(id){
      Model.Bookmark.RepoGroupTable.updateName(id,val);
      els.bookmarkGroupModalInput.removeAttr('data-id');
    }else{
      Model.Bookmark.RepoGroupTable.add(val);
    }
  }
  els.bookmarkGroupModalInput.val('');
  hideBookmarkGroupModal();
}

function beforeDelBookmarkGroup() {
  var el = $(this),
    id = el.attr('data-id');

  els.win.trigger('MainView:showConfirm',["Remove this group?",function(){
    Model.Bookmark.RepoGroupTable.delete(id);
  }]);
}

function beforeAddRepoToGroup() {
  var el = $(this),
    targetGroupId = el.attr('data-id'),
    selected = el.attr('data-selected'),
    repoEl = el.parents('.repo-item'),
    repoId = repoEl.attr('data-repoid'),
    repoUrl = repoEl.find('.repo-item__hd a').attr('href'),
    repoLang = repoEl.attr('data-repolang'),
    repoStar = repoEl.attr('data-repostar'),
    curGroupEl = el.parents('.repo-group-item'),
    curGroupId = curGroupEl.attr('data-id'),
    curGroupElCountEl = curGroupEl.find('.hd>.count'),
    curGoupCountNum = parseInt(curGroupElCountEl.html()||0),
    targetGoupEl = curGroupEl.siblings('.repo-group-item[data-id="'+targetGroupId+'"]'),
    targetGroupName = targetGoupEl.find('>.hd>a').html(),
    targetGoupCountEl = targetGoupEl.find('.hd>.count'),
    targetGoupCountNum = parseInt(targetGoupCountEl.html()||0),
    targetGroupRepo = targetGoupEl.find('.repo-item[data-repoid="'+repoId+'"]');

  if (!selected) {
    Model.Bookmark.RepoGroupTable.addRopoId(targetGroupId, repoId);

    if(!targetGroupRepo.length){
      targetGoupCountEl.html(++targetGoupCountNum);
      targetGoupEl.find('.repo-list').append(repoEl.clone());
    }
    els.isDebug && Model.DDMS.postBookmarkGroup(repoId,repoUrl,targetGroupName,repoLang,repoStar||0);

  } else{
    Model.Bookmark.RepoGroupTable.removeRopoId(targetGroupId, repoId);

    if(targetGroupId==curGroupId){
      repoEl.remove();
      curGroupElCountEl.html(--curGoupCountNum||'');
    }else{
      targetGroupRepo.remove();
      targetGoupCountEl.html(--targetGoupCountNum||'');
    }
  }
}

function beforeAddRepoToTag() {
  var el = $(this),
    targetId = el.attr('data-id'),
    selected = el.attr('data-selected'),
    repoEl = el.parents('.repo-item'),
    repoId = repoEl.attr('data-repoid');

  if (targetId != undefined && targetId != 0){
    Model.Bookmark.RepoTagTable[selected?'removeRopoId':'addRopoId'](targetId, repoId);
  }
}

function beforeSyncUser(name) {
  if (name) {
    renderBookmarkHeader('loading');
    Model.Bookmark.setCurUserName(name);
    Model.Bookmark.syncGithub(function () {
      Model.Bookmark.getAll(renderBookmarkGroup);
    });
  }
}

function beforeDelUser() {
  var el = $(this),
    id = el.attr('data-id');

  els.win.trigger('MainView:showConfirm',["Remove this user and all repos for the user?",function(){
    Model.Bookmark.UserTable.delete(id, function () {
      el.parents('.user-item').remove();
      Model.Bookmark.getAll(renderBookmarkGroup);
    });
  }]);
}

function beforeDownloadBookmarkGroupsAndTags(){
  els.win.trigger('MainView:showConfirm',["Download will overwrite all local groups, are you sure?",function(){
    var id = els.bookmarkSyncModalInput.val();
    Model.DDMS.getBookmarkOrganizer(id,function(data){
      if(data && data.code){
        Model.DDMS.setOrganizerSyncId(id);
        renderBookmarkSyncGroupsAndTags(id);
        var json = JSON.parse(decodeURIComponent(data.data.data.data));
        Model.Bookmark.RepoGroupTable.addAll(json.groups, function () {
          Model.Bookmark.RepoTagTable.addAll(json.tags, function () {
            Model.Bookmark.getAll(renderBookmarkGroup);
          });
        });
      }
    });
  }]);
}
function beforeUploadBookmarkGroupsAndTags(){
    Model.Bookmark.getAll(function(data){
      var id = els.bookmarkSyncModalInput.val(),
        data = encodeURIComponent(JSON.stringify({groups: data.groups, tags: data.tags}));
      //update
      if(!!id){
        els.win.trigger('MainView:showConfirm',["Upload will overwrite groups belong to this sync id on the server, are you sure?",function(){
            Model.DDMS.postUpdateBookmarkOrganizer(id, data, function () {
            Model.DDMS.setOrganizerSyncId(id);
            renderBookmarkSyncGroupsAndTags(id);
          });
        }]);
      }
      //create
      else{
        Model.DDMS.postBookmarkOrganizer(data, function(url){
          id = Util.localParam(url).search['id'];
          Model.DDMS.setOrganizerSyncId(id);
          renderBookmarkSyncGroupsAndTags(id);
        });
      }
    });
}

function updateBookmarkTagsData(){
  Model.Bookmark.RepoTagTable.getAll(function(res){
    els.lastBookmarkTagsData = res;
  });
}
function updateBookmarkGroupsData(){
  Model.Bookmark.RepoGroupTable.getAll(function(res){
    els.lastBookmarkGroupsData = res;
  });
}

init();


/***/ })
/******/ ]);