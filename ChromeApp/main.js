window.onload = function() {
  var webview = document.createElement('webview');
  webview.style.width = '99%';
  webview.style.height = '99%';
  document.body.appendChild(webview);

  webview.addContentScripts([
    {
      name: 'openLinkInBroswer',
      matches: ['http://unbug.github.io/codelf/*'],
      js: { files: ['openLinkInBrowser.js'] },
      run_at: 'document_end'
    }]);
  webview.addEventListener('newwindow', function(e) {
    window.open(e.targetUrl);
  });
  webview.addEventListener('consolemessage', function(e) {
    console.log('consolemessage: ', e.message);
  });

  webview.src = 'http://unbug.github.io/codelf/';
};
