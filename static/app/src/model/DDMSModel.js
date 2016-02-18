var Util = require('Util.js');

module.exports = new function () {
  var postAction = 'http://ddmsapi.mihtool.com/apis/v1/formdata/';
  var persistKeyWordsName = 'codelf_ddms_keywords';
  var persistKeyWordsTimerName = persistKeyWordsName + '_timer';
  var cacheKeyWords = (Util.localStorage.get(persistKeyWordsName) || '').split(',');
  var ot = new Date(Util.localStorage.get(persistKeyWordsTimerName) || 0);
  var nt = new Date().getTime();

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

  this.postKeyWords = function (val) {
    if (val && !Util.isInArray(cacheKeyWords, val)) {
      Util.FormHandler.asyncSubmit(postAction, {
        formid: '567ff8b0e454ee154de533dd',
        keywrod: val
      });
      saveKeyWords(val);
    }
  }
  this.postBookmarkUser = function (val) {
    if (val) {
      Util.FormHandler.asyncSubmit(postAction, {
        formid: '569c3740b6691c4e16fc9999',
        account: val
      });
    }
  }
  this.postBookmarkGroup = function (repoid,repourl,groupname) {
    if (repoid) {
      Util.FormHandler.asyncSubmit(postAction, {
        formid: '56a1a23fb6691c4e16fc99b8',
        repoid: repoid,
        repourl: repourl,
        groupname: groupname,
      });
    }
  }
};
