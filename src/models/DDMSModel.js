import BaseModel from './BaseModel';
import FormHandler from '../utils/FormHandler';
import LocalStorage from '../utils/LocalStorage';
import AppModel from './AppModel';

const formAction = '//ddms.mihtool.com/apis/v1/formdata/';
const formDataAction = '//ddms.mihtool.com/apis/v1/formdata_detail/';
const persistKeyWordsName = 'codelf_ddms_keywords';
const persistOrganizerName = 'codelf_ddms_group_sync_id';
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
    };
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

  _saveKeyWords(val) {
    if (cacheKeyWords.indexOf(val) == -1) {
      cacheKeyWords.push(val);
      LocalStorage.setItem(persistKeyWordsName, cacheKeyWords.join(',').replace(/^,*/g, '').replace(/,*&/g, ''));
    }
  }
}

export default new DDMSModel();
