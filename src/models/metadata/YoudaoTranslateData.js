import Store from '../Store';
import JSONP from '../../utils/JSONP';

class YoudaoTranslateData {
  constructor() {
    this._store = new Store(Infinity);
  }

  async request(val) {
    const cache = this._store.get(val);
    if (cache) {
       return cache;
    }
    const url = `//fanyi.youdao.com/openapi.do?callback=?&keyfrom=Codelf&key=2023743559&type=data&doctype=jsonp&version=1.1&q=${val}`;
    const data = await JSONP(url);
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
