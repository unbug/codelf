import Store from '../Store';
import * as Tools from '../../utils/Tools';
import JSONP from '../../utils/JSONP';
import { formatSuggestionStr, formatTranslationArr } from '../../utils/TranslateHandler';
import AppModel from '../AppModel';

/**
 * 特别重要，必读！
 * CODELF 用的是 Baidu 翻译 API 的免费套餐，一个月仅有200万字符请求限制！
 * 所以，如果你想二次开发，请单独申请自己的 Baidu 翻译 API 的 KEY，否则会直接影响 CODELF 的用户。
 * Baidu 翻译 API 申请参看： https://api.fanyi.baidu.com/api/trans/product/apidoc
 */
const translateAppId = '20191206000363640';
const translateKey = '4hJrdEmxB3M42OYwhAPA';
const translateSalt = Date.now();
const translateEndpoint = `//fanyi-api.baidu.com/api/trans/vip/translate?callback=?&from=auto&to=en&appid=${translateAppId}&salt=${translateSalt}`;

// https://fanyi-api.baidu.com/api/trans/vip/translate?callback=baiduFanyiRequestCallback&from=auto&to=en&appid=20191206000363640&salt=1575646376369&q=%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD&sign=4e7d639cd17477acf5b13bd5ba6bab76
function genUrl(val) {
  const sign = Tools.MD5(`${translateAppId}${val}${translateSalt}${translateKey}`); // appid+q+salt+密钥 的MD5值
  return `${translateEndpoint}&q=${encodeURIComponent(val)}&sign=${sign}`;
}

class BaiduTranslateData {
  constructor() {
    this._store = new Store(Infinity, {
      persistence: 'session',
      persistenceKey: AppModel.genPersistenceKey('baidu_translate_key')
    });
  }

  async request(val) {
    const cache = this._store.get(val);
    if (cache) {
      return cache;
    }

    try {
      const url = genUrl(val);
      let res = await JSONP(url, { callbackName: 'baiduFanyiRequestCallback' });
      if (res && res.trans_result) {
        let translation = res.trans_result.map(key => key.dst);
        let suggestion = formatSuggestionStr(translation.join(' '));
        translation = formatTranslationArr(translation);
        let response = { suggestion, translation };
        this._store.save(val, response);
        return response;
      } else {
        throw new Error(`Request Baidu translate failed`);
      }
    } catch (err) {
      return null;
    }
  }
}

export default new BaiduTranslateData();
