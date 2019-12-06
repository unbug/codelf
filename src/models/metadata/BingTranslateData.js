import Store from '../Store';
import { formatSuggestionStr, formatTranslationArr } from '../../utils/TranslateHandler';
import AppModel from '../AppModel';

/**
 * 特别重要，必读！
 * CODELF 用的是 Bing 翻译 API 的免费套餐，一个月仅有200万字符请求限制！
 * 所以，如果你想二次开发，请单独申请自己的 Bing 翻译 API 的 KEY，否则会直接影响 CODELF 的用户。
 * Bing 翻译 API 申请参看： https://docs.microsoft.com/en-us/azure/cognitive-services/translator/
 * https://docs.microsoft.com/en-us/azure/cognitive-services/translator/reference/v3-0-translate
 */
// curl -X POST "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=en" -H "Ocp-Apim-Subscription-Key: 445fd33be8764339add46f0770ac617d" -H "Content-Type: application/json; charset=UTF-8" -d "[{'Text':'咸鱼'}]"
const translateEndpoint = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=en';
const translateKey = '445fd33be8764339add46f0770ac617d';

class BingTranslateData {
  constructor() {
    this._store = new Store(Infinity, {
      persistence: 'session',
      persistenceKey: AppModel.genPersistenceKey('bing_translate_key')
    });
  }

  async request(val) {
    const cache = this._store.get(val);
    if (cache) {
      return cache;
    }

    try {
      let res = await fetch(translateEndpoint, {
        method: 'POST',
        headers: {
          'Ocp-Apim-Subscription-Key': translateKey,
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(val.split(' ').map(text => { return { Text: text } }))
      });
      res = await res.json();
      if (res) {
        let suggestionStr = '';
        let suggestion = null;
        let translation = [];

        res.forEach(key => {
          const trans = key.translations.map(t => t.text);
          suggestionStr += ' ' + trans.join(' ');
          Array.prototype.push.apply(translation, trans);
        });

        suggestion = formatSuggestionStr(suggestionStr);
        if (translation) {
          translation = formatTranslationArr(translation);
        }
        let response = { suggestion, translation };
        this._store.save(val, response);
        return response;
      } else {
        throw new Error(`Request Bing translate failed`);
      }
    } catch (err) {
      return null;
    }
  }
}

export default new BingTranslateData();
