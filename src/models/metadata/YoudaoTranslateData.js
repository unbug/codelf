import Store from '../Store';
import JSONP from '../../utils/JSONP';
import AppModel from '../AppModel';

class YoudaoTranslateData {
  constructor() {
    this._store = new Store(Infinity, {
      persistence: 'session',
      persistenceKey: AppModel.genPersistenceKey('youdao_translate_key')
    });
  }

  async request(val) {
    const cache = this._store.get(val);
    if (cache) {
       return cache;
    }
    /**
     * 特别重要，必读！
     * CODELF 用的是有道翻译 API 的免费套餐，1小时仅有1K的请求次数限制！
     * 所以，如果你想二次开发，请单独申请自己的有道翻译 API 的 KEY，否则会直接影响 CODELF 的用户。
     * 有道翻译 API 申请参看： http://fanyi.youdao.com/openapi?path=data-mode
     */
    const url = `//fanyi.youdao.com/openapi.do?callback=?&keyfrom=Codelf&key=2023743559&type=data&doctype=jsonp&version=1.1&q=${val}`;
    const data = await JSONP(url, {callbackName: 'youdaoFanyiRequestCallback'});
    try{
      let suggestionStr = '';
      let tmp = [];
      let suggestion;
      let translation;
      //basic translate
      if (data.basic && data.basic.explains) {
        suggestionStr += data.basic.explains.join(' ');
        translation = suggestionStr;
      }
      //web translate
      if (data.web && data.web) {
        data.web.forEach(function (key) {
          suggestionStr += ' ' + key.value.join(' ');
        });
      }
      suggestion = suggestionStr && suggestionStr.replace(/[`~!@#$^&*()=|{}':;',\[\].<>\/?~！@#￥……&*（）——|\\{\\}【】‘；：”“’。，、？]/g, ' ')
        .replace(/\s+/ig, '+').split('+')
        .filter((key, idx, inputArray) => {
          const checked = key.length > 1
            && inputArray.indexOf(key) == idx
            && !/[^\x00-\xff]/gi.test(key)
            && !tmp.find(ikey => {
              return new RegExp('^' + key + '$', 'ig').test(ikey);
            });
          if (checked) {
            tmp.push(key);
          }
          return checked;
        });
      if (data && data.translation) {
        translation = data.translation.join(' ')
          .replace(/[!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, '')
          .split(' ').filter(function (key, idx, inputArray) {
            return inputArray.indexOf(key) == idx && !/^(a|an|the)$/ig.test(key);
          }).join(' ');
      }
      let response = {suggestion, translation};
      this._store.save(val, response);
      return response;
    }catch (e) {
      return null;
    }
  }
}

export default new YoudaoTranslateData();
