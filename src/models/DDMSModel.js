import BaseModel from './BaseModel';
import FormHandler from '../utils/FormHandler';
import LocalStorage from '../utils/LocalStorage';
import AppModel from './AppModel';
import * as Tools from '../utils/Tools';
import JSONP from '../utils/JSONP';

const formAction = '//ddms.mihtool.com/apis/v1/formdata/';
const formDataAction = '//ddms.mihtool.com/apis/v1/formdata_detail/';
const persistKeyWordsName = AppModel.genPersistenceKey('ddms_keywords');
const persistOrganizerName = AppModel.genPersistenceKey('ddms_group_sync_id');
const persistKeyWordsTimerName = persistKeyWordsName + '_timer';
let cacheKeyWords = (LocalStorage.getItem(persistKeyWordsName) || '').split(',');
const ot = new Date(LocalStorage.getItem(persistKeyWordsTimerName) || 0);
const nt = Date.now();

if ((nt - ot) > 1000 * 60 * 60 * 24) {
  cacheKeyWords = [];
  LocalStorage.setItem(persistKeyWordsTimerName, nt);
}

class DDMSModel extends BaseModel {
  constructor() {
    super();
    this._data = {
      organizerSyncId: LocalStorage.getItem(persistOrganizerName),
      luckyKeyWords: []
    };
    this.getLuckyKeyWords();
  }

  getLuckyKeyWords() {
    JSONP(`${formAction}?callback=?&formid=56e58775ade3a8e84dbacadf`).then(res => {
      if (res && res.code == 1) {
        this.update({
          luckyKeyWords: Tools.randomList([...new Set(res.data.reduce((cal, cur) => {
            if (cur.data.keyword.length > 1) {
              cal.push(cur.data.keyword);
            }
            return cal;
          }, []))], 6)
        });
      }
    });
  }

  postKeyWords(val) {
    if (!(AppModel.isGithub || AppModel.debug)) { return; }
    if (val && cacheKeyWords.indexOf(val) == -1) {
      FormHandler.asyncSubmit(formAction, {
        formid: '56e58775ade3a8e84dbacadf',
        keyword: val
      });
      this._saveKeyWords(val);
    }
  }

  postBookmarkUser(val) {
    if (val) {
      FormHandler.asyncSubmit(formAction, {
        formid: '56e587a9ade3a8e84dbacae1',
        account: val
      });
    }
  }

  postBookmarkGroup(repoid, repourl, groupname, lang, stars) {
    if (repoid) {
      FormHandler.asyncSubmit(formAction, {
        formid: '56e587ecade3a8e84dbacae3',
        repoid: repoid,
        repourl: repourl,
        groupname: groupname,
        lang: lang,
        stars: stars
      });
    }
  }

  postBookmarkOrganizer(data, callback) {
    if (data) {
      window.afterPostBookmarkOrganizer = callback;
      FormHandler.asyncSubmit(formAction, {
        formid: '56fb7d9dade3a8e84dbacaf0',
        success_url: Tools.thisPath + 'ddms_frame_callback.html?frame_callback=afterPostBookmarkOrganizer',
        data: data
      });
    }
  }

  postUpdateBookmarkOrganizer(id, data, callback) {
    if (id && data) {
      window.afterPostUpdateBookmarkOrganizer = callback;
      FormHandler.asyncSubmit(formDataAction, {
        id: id,
        success_url: Tools.thisPath + 'ddms_frame_callback.html?frame_callback=afterPostUpdateBookmarkOrganizer',
        data: data
      });
    }
  }

  getBookmarkOrganizer(id, callback) {
    JSONP(`${formDataAction}?callback=?&id=${id}`).then(data => {
      if (data) {
        callback && callback(data);
      }
    });
  }

  _saveKeyWords(val) {
    if (cacheKeyWords.indexOf(val) == -1) {
      cacheKeyWords.push(val);
      LocalStorage.setItem(persistKeyWordsName, cacheKeyWords.join(',').replace(/^,*/g, '').replace(/,*&/g, ''));
    }
  }

  set organizerSyncId(val) {
    this._data.organizerSyncId = val;
    LocalStorage.setItem(persistOrganizerName, val);
  }

  get organizerSyncId() {
    return this._data.organizerSyncId || LocalStorage.getItem(persistOrganizerName);
  }

  get luckyKeyWords() {
    return this._data.luckyKeyWords;
  }
}

export default new DDMSModel();
