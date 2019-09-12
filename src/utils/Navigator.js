const Navigator = (function () {
  let frame,
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
    let _frame = document.createElement('iframe');
    _frame.setAttribute('style', 'display:none;width:0;height:0;position: absolute;top:0;left:0;border:0;');
    _frame.setAttribute('height', '0px');
    _frame.setAttribute('width', '0px');
    _frame.setAttribute('frameborder', '0');
    name && _frame.setAttribute('name', name);
    if (src) {
      _frame.setAttribute('src', src);
    } else {
      appendFrame(_frame);
    }
    return _frame;
  }

  function protocol(command, single, noframe) {
    let _frame, timer;
    if (noframe) {
      window.location.href = command;
      return;
    }
    if (single) {
      if (isAndroid) {
        _frame = getFrame();
        _frame.setAttribute('src', command);
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
      frame.setAttribute('src', command);
    }
  }

  return {
    protocol: protocol,
    getFrame: getFrame,
    appendFrame: appendFrame,
    removeFrame: removeFrame
  }
})();

export default Navigator;
