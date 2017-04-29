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
