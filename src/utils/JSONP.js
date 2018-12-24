const JSONP = url => {
  return new Promise((resolve, reject) => {
    let timer = 0;
    let script = document.createElement('script');
    const callbackName = `__jsonp_${Date.now()}_callback`;
    window[callbackName] = (...args) => {
      window.clearTimeout(timer);
      document.body.removeChild(script);
      resolve(...args);
    };
    setTimeout(() => {
      document.body.removeChild(script);
      reject();
    }, 5 * 60 * 1000); // timeout in 5 min
    script.src = url.replace('=?', `=${callbackName}&_=${Date.now()}`);
    document.body.appendChild(script);
  });
}
export default JSONP;
