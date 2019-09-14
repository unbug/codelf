const JSONP = (url, options) => {
  options = options || {};
  url = options.url || url;
  return new Promise((resolve, reject) => {
    let timer = 0;
    let script = document.createElement('script');
    const callbackName = options.callbackName || `__jsonp_${Date.now()}_callback`;
    url = url.replace('=?', `=${callbackName}${options.nocache ? ('&_=' + Date.now()) : ''}`);
    const done = () => {
      window.clearTimeout(timer);
      try { document.head.removeChild(script); } catch (e) { }
      window[callbackName] = null;
    };
    const onerror = () => {
      window.removeEventListener('error', onerror);
      done();
      reject();
    };
    window[callbackName] = (...args) => {
      done();
      resolve(...args);
    };
    timer = setTimeout(onerror, 5 * 60 * 1000); // timeout in 5 min
    window.addEventListener('error', onerror);
    script.onerror = onerror;
    script.src = url;
    document.head.appendChild(script);
  });
}
export default JSONP;
