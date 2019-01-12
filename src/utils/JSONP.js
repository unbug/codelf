const JSONP = (url, options) => {
  options = options || {};
  url = options.url || url;
  return new Promise((resolve, reject) => {
    let timer = 0;
    let script = document.createElement('script');
    const callbackName = options.callbackName || `__jsonp_${Date.now()}_callback`;
    window[callbackName] = (...args) => {
      window.clearTimeout(timer);
      document.body.removeChild(script);
      resolve(...args);
      window[callbackName] = null;
    };
    setTimeout(() => {
      document.body.removeChild(script);
      reject();
      window[callbackName] = null;
    }, 5 * 60 * 1000); // timeout in 5 min
    script.src = url.replace('=?', `=${callbackName}${options.nocache ? ('&_=' + Date.now()) : ''}`);
    document.body.appendChild(script);
  });
}
export default JSONP;
