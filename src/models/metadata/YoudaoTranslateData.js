import Store from '../Store';
import JSONP from '../../utils/JSONP';
import { formatSuggestionStr, formatTranslationArr } from '../../utils/TranslateHandler';
import AppModel from '../AppModel';

/**
 * 特别重要，必读！
 * CODELF 用的是有道翻译 API 的免费套餐，1小时仅有1K的请求次数限制！
 * 所以，如果你想二次开发，请单独申请自己的有道翻译 API 的 KEY，否则会直接影响 CODELF 的用户。
 * 有道翻译 API 申请参看： http://fanyi.youdao.com/openapi?path=data-mode
 */
const translateEndpoint = '//fanyi.youdao.com/openapi.do?callback=?&keyfrom=Codelf&key=2023743559&type=data&doctype=jsonp&version=1.1';

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
    const url = `${translateEndpoint}&q=${val}`;
    const data = await JSONP(url, { callbackName: 'youdaoFanyiRequestCallback' });
    try {
      let suggestionStr = '';
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
      suggestion = formatSuggestionStr(suggestionStr);
      if (data && data.translation) {
        translation = formatTranslationArr(data.translation);
      }
      let response = { suggestion, translation };
      this._store.save(val, response);
      return response;
    } catch (e) {
      return null;
    }
  }
}

export default new YoudaoTranslateData();
