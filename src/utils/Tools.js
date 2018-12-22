let appCache = window.applicationCache;
appCache.addEventListener('updateready', function () {
  if (appCache.status == appCache.UPDATEREADY) {
    try {
      appCache.update();
      if (appCache.status == appCache.UPDATEREADY) {
        try {
          appCache.swapCache();
          window.location.reload(false);
        } catch (err) {
        }
      }
    } catch (err) {
    }
  }
}, false);

const ua = navigator.userAgent;
const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
const iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
let os = {};

if (android) os.android = true, os.version = android[2];
if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.');
if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.');
if (ipod) os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;

export const os = os;

let Navigator = (function () {
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
export const Navigator = Navigator;

let FormHandler = new function () {
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
export const FormHandler = FormHandler;

export const randomColor = () => {
  const letters = '0123456789ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const randomList = (list, len, verify, ratio) => {
  let rs = [], _list = list.slice(0);
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
      let index = Math.floor(Math.random() * _list.length),
        item = _list[index];
      if ((verify && verify.call(this, item, _list)) || !verify) {
        rs.push(item);
        _list.splice(index, 1);
      }
    }
  }
  return rs;
}

export const InlineWebWorker = {
  ready: window.Blob && window.Worker && window.URL,
  create: function create(selector) {
    return new Worker(window.URL.createObjectURL(new Blob([document.querySelector(selector).textContent])));
  }
}

export const thisPage = window.location.href.replace(window.location.hash, '');
export const thisPath = thisPage.substring(0, thisPage.lastIndexOf('/') + 1);

export const uuid = len => {
  let res = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, function (c) {
    let num = Math.random() * 16 | 0, v = c === 'x' ? num : (num & 0x3 | 0x8);
    return v.toString(16);
  });
  return len ? res.substr(0, len) : res;
}
