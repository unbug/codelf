window.onload = function() {
  var webview = document.querySelector('#codelf');
  webview.addContentScripts([
    {
      name: 'openLinkInBroswer',
      matches: ['http://unbug.github.io/codelf/*'],
      js: { files: ['openLinkInBroswer.js'] },
      run_at: 'document_end'
    }]);
  webview.addEventListener('consolemessage', function(e) {
    console.log('Guest page logged a message: ', e.message);
  });
};
