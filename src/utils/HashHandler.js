const HashHandler = (function () {
  let lc = window.location;
  function getByURL(url) {
    let hash;
    url && decodeURIComponent(url).replace(new RegExp('#(.*)', 'g'), function ($1, $2) {
      hash = $2;
    });
    return hash && decodeURIComponent(hash);
  }

  function get() {
    return getByURL(lc.hash);
  }

  function set(hash) {
    if (hash) {
      lc.hash = encodeURIComponent(hash);
    }
  }

  return {
    get: get,
    set: set,
    getByURL: getByURL
  }
})();

export default HashHandler;
