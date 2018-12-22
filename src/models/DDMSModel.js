var Util = require('Util.js');

module.exports = new function () {
  var formAction = '//ddms.mihtool.com/apis/v1/formdata/';
  var formDataAction = '//ddms.mihtool.com/apis/v1/formdata_detail/';
  var persistKeyWordsName = 'codelf_ddms_keywords';
  var persistOrganizerName = 'codelf_ddms_group_sync_id';
  var persistKeyWordsTimerName = persistKeyWordsName + '_timer';
  var cacheKeyWords = (Util.localStorage.get(persistKeyWordsName) || '').split(',');
  var ot = new Date(Util.localStorage.get(persistKeyWordsTimerName) || 0);
  var nt = new Date().getTime();
  var OrganizerSyncId;

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

  this.setOrganizerSyncId = function (val) {
    OrganizerSyncId = val;
    Util.localStorage.set(persistOrganizerName, val);
  }

  this.getOrganizerSyncId = function () {
    return OrganizerSyncId || Util.localStorage.get(persistOrganizerName);
  }

  this.postKeyWords = function (val) {
    if (val && !Util.isInArray(cacheKeyWords, val)) {
      Util.FormHandler.asyncSubmit(formAction, {
        formid: '56e58775ade3a8e84dbacadf',
        keyword: val
      });
      saveKeyWords(val);
    }
  }
  this.postBookmarkUser = function (val) {
    if (val) {
      Util.FormHandler.asyncSubmit(formAction, {
        formid: '56e587a9ade3a8e84dbacae1',
        account: val
      });
    }
  }
  this.postBookmarkGroup = function (repoid,repourl,groupname,lang,stars) {
    if (repoid) {
      Util.FormHandler.asyncSubmit(formAction, {
        formid: '56e587ecade3a8e84dbacae3',
        repoid: repoid,
        repourl: repourl,
        groupname: groupname,
        lang: lang,
        stars: stars
      });
    }
  }
  this.postBookmarkOrganizer = function (data, callback) {
    if (data) {
      window.afterPostBookmarkOrganizer = callback;
      Util.FormHandler.asyncSubmit(formAction, {
        formid: '56fb7d9dade3a8e84dbacaf0',
        success_url: Util.thisPath+'ddms_frame_callback.html?frame_callback=afterPostBookmarkOrganizer',
        data: data
      });
    }
  }
  this.postUpdateBookmarkOrganizer = function (id, data, callback) {
    if (id && data) {
      window.afterPostUpdateBookmarkOrganizer = callback;
      Util.FormHandler.asyncSubmit(formDataAction, {
        id: id,
        success_url: Util.thisPath+'ddms_frame_callback.html?frame_callback=afterPostUpdateBookmarkOrganizer',
        data: data
      });
    }
  }
  this.getBookmarkOrganizer = function (id, callback) {
    $.getJSON(formDataAction+'?callback=?',
      {
        id: id
      },
      function (data) {
        if (data) {
          callback && callback(data);
        }
      });
  }
};
