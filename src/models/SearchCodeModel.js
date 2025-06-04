import BaseModel from './BaseModel';
import * as Tools from '../utils/Tools';
import YoudaoTranslateData from './metadata/YoudaoTranslateData';
import BaiduTranslateData from './metadata/BaiduTranslateData';
import BingTranslateData from './metadata/BingTranslateData';
import DeepSeekData from './metadata/DeepSeekData';
import JSONP from '../utils/JSONP';
import Store from './Store';
import AppModel from './AppModel';
import { SessionStorage } from '../utils/LocalStorage';
import * as Configs from '../constants/Configs';

const SEARCH_LANG_KEY = `${Configs.APP_NANE}_search_lang_key`;

class SearchCodeModel extends BaseModel {
  constructor() {
    super();
    this._data = {
      isZH: false,
      searchValue: null,
      searchLang: SessionStorage.getItem(SEARCH_LANG_KEY),
      searchSource: SessionStorage.getItem(Configs.SEARCH_SOURCE_STORAGE) || Configs.SEARCH_SOURCES.SEARCHCODE,
      page: 0,
      variableList: [],
      suggestion: [],
      sourceCode: null
    };
    this._variableRepoMapping = {};
    this._sourceCodeStore = new Store(Infinity);
    this._variableListStore = new Store(Infinity, {
      persistence: 'session',
      persistenceKey: AppModel.genPersistenceKey('variable_list_key')
    });
    const translators = [BaiduTranslateData, BaiduTranslateData, BingTranslateData, YoudaoTranslateData, YoudaoTranslateData, BingTranslateData];
    this._translator = translators[new Date().getSeconds() % translators.length];
  }

  //search code by query
  async requestVariable(val, page, lang, searchSource) {
    lang = lang || this.searchLang;
    searchSource = searchSource || this.searchSource;
    SessionStorage.setItem(SEARCH_LANG_KEY, lang); // persist lang
    SessionStorage.setItem(Configs.SEARCH_SOURCE_STORAGE, searchSource); // persist search source
    
    if (val !== undefined && val !== null) {
      val = val.trim().replace(/\s+/ig, ' '); // filter spaces
    }
    if (val.length < 1) {
      return;
    }
    let q = val;
    let suggestion = this._parseSuggestion(val.split(' '));
    let isZH = this._isZH(val);
    if (isZH) {
      // translate by youdao
      const translate = await this._translator.request(val);
      if (translate) {
        q = translate.translation;
        suggestion = this._parseSuggestion(translate.suggestion, suggestion);
        suggestion = this._parseSuggestion(q.split(' '), suggestion);
      } else {
        this.update({
          searchValue: val,
          page: page,
          variableList: [...this.variableList, []],
          searchLang: lang,
          searchSource: searchSource,
          suggestion: suggestion,
          isZH: isZH || this.isZH
        });
      }
    }
    
    const cacheId = Tools.MD5(q + page + (lang && lang.length ? lang.join(',') : '') + searchSource);
    const cache = this._variableListStore.get(cacheId);
    if (cache) {
      this.update(cache);
      return;
    }

    // Route to appropriate search provider
    if (searchSource === Configs.SEARCH_SOURCES.DEEPSEEK) {
      await this._searchWithDeepSeek(val, q, page, lang, suggestion, isZH, cacheId);
    } else {
      await this._searchWithSearchCode(val, q, page, lang, suggestion, isZH, cacheId);
    }
  }

  //get source code by id
  requestSourceCode(id) {
    const cache = this._sourceCodeStore.get(id);
    if (cache) {
      this.update({ sourceCode: cache });
      return;
    }
    id && fetch('https://searchcode.com/api/result/' + id + '/')
      .then(res => res.json())
      .then(data => {
        this._sourceCodeStore.save(id, data.code);
        this.update({ sourceCode: data.code });
      });
  }

  // Search with searchcode.com (original implementation)
  async _searchWithSearchCode(val, q, page, lang, suggestion, isZH, cacheId) {
    // multiple val separate with '+'
    const langParams = lang.length ? ('&lan=' + lang.join(',').split(',').join('&lan=')) : '';
    const qParams = q.replace(' ', '+');
    const url = `//searchcode.com/api/jsonp_codesearch_I/?callback=?&q=${qParams}&p=${page}&per_page=42${langParams}`;
    const done = data => {
      const cdata = {
        searchValue: val,
        page: page,
        variableList: [...this._data.variableList, this._parseVariableList(data.results, q)],
        searchLang: lang,
        searchSource: this.searchSource,
        suggestion: suggestion,
        isZH: isZH || this.isZH
      };
      this.update(cdata);
      this._variableListStore.save(cacheId, cdata);
    };
    val && JSONP(url, { callbackName: 'searchcodeRequestVariableCallback' })
      .then(done).catch(() => {
        // fallback to fetch
        fetch(`//searchcode.com/api/codesearch_I/?q=${qParams}&p=${page}&per_page=42${langParams}`)
          .then(res => res.json())
          .then(done)
          .catch(() => {
            this.update({
              searchValue: val,
              page: page,
              variableList: [...this.variableList, []],
              searchLang: lang,
              searchSource: this.searchSource,
              suggestion: suggestion,
              isZH: isZH || this.isZH
            });
          });
      });
  }

  // Search with DeepSeek API
  async _searchWithDeepSeek(val, q, page, lang, suggestion, isZH, cacheId) {
    try {
      const data = await DeepSeekData.searchCode(q, page, lang);
      const cdata = {
        searchValue: val,
        page: page,
        variableList: [...this._data.variableList, this._parseVariableList(data.results, q)],
        searchLang: lang,
        searchSource: this.searchSource,
        suggestion: suggestion,
        isZH: isZH || this.isZH
      };
      this.update(cdata);
      this._variableListStore.save(cacheId, cdata);
    } catch (error) {
      console.error('DeepSeek search failed:', error);
      // Fallback to empty results with error indicator
      this.update({
        searchValue: val,
        page: page,
        variableList: [...this.variableList, []],
        searchLang: lang,
        searchSource: this.searchSource,
        suggestion: suggestion,
        isZH: isZH || this.isZH,
        error: error.message
      });
    }
  }

  getKeyWordReg(keyword) {
    return new RegExp('([\\-_\\w\\d\\/\\$]{0,}){0,1}' + keyword + '([\\-_\\w\\d\\$]{0,}){0,1}', 'gi');
  }

  getKeyWroddRegs(keywords) {
    return keywords.split(' ').reduce((accumulator, curr) => {
      if (curr.length && curr.length > 1) {
        return accumulator.concat(this.getKeyWordReg(curr));
      }
      return accumulator;
    }, []);
  }

  _parseVariableList(results, keywords) {
    let vals = [], variables = [];
    results.forEach(res => {
      res.repo = res.repo.replace('git://github.com', 'https://github.com');
      //filter codes
      const lineStr = Object.keys(res.lines).reduce((accu, line) => {
        let lstr = res.lines[line];
        //no base64
        if (!(/;base64,/g.test(lstr) && lstr.length > 256)) {
          return accu.concat(lstr);
        }
        return accu;
      }, []).join('').replace(/\r\n/g, ' '); // remove \r\n
      //match variables
      this.getKeyWroddRegs(keywords).forEach(reg => {
        (lineStr.match(reg) || []).forEach(val => {
          //remove "-" and "/" from the start and the end
          val = val.replace(/^(\-|\/)*/, '').replace(/(\-|\/)*$/, '');
          this._updateVariableRepoMapping(val, res);
          if (
            !/\//g.test(val) /*exclude links*/
            && vals.indexOf(val) === -1
            && vals.indexOf(val.toLowerCase()) === -1
            && vals.indexOf(val.toUpperCase()) === -1
            && val.length < 64 /*too long*/
          ) {
            vals.push(val);
            variables.push({
              keyword: val,
              repoLink: res.repo,
              repoLang: res.language,
              color: Tools.randomLabelColor()
            });
          }
        });
      });
    });
    return variables.map(val => {
      val.repoList = this._getVariableRepoMapping(val.keyword);
      return val;
    });
  }

  _parseSuggestion(keywords, curr) {
    let suggestion = curr || this.suggestion;
    if (keywords) {
      suggestion = keywords.concat(suggestion);
    }
    return [...new Set(suggestion)].filter((item, i) => !this._isZH(item));
  }

  _updateVariableRepoMapping(val, repo) {
    if (!/\//g.test(val) /*exclude links*/ && val.length < 64 /*too long*/) {
      val = `__${val.toLowerCase()}`;
      this._variableRepoMapping[val] = this._variableRepoMapping[val] || [];
      if (!this._variableRepoMapping[val].find(key => key.id == repo.id)) {
        repo.lines = null;
        delete repo.lines;
        this._variableRepoMapping[val].push(repo);
      }
    }
  }

  _getVariableRepoMapping(val) {
    val = `__${val.toLowerCase()}`;
    return this._variableRepoMapping[val];
  }

  _isZH(val) {
    let isZH = false;
    val.replace(/\s+/ig, '+').split('+').forEach((key) => {
      if (/[^\x00-\xff]/gi.test(key)) {
        isZH = true;
      }
    });
    return isZH;
  }

  get searchValue() {
    return this._data.searchValue;
  }

  get searchLang() {
    return this._data.searchLang || SessionStorage.getItem(SEARCH_LANG_KEY) || [];
  }

  get searchSource() {
    return this._data.searchSource || SessionStorage.getItem(Configs.SEARCH_SOURCE_STORAGE) || Configs.SEARCH_SOURCES.SEARCHCODE;
  }

  get page() {
    return this._data.page;
  }

  get variableList() {
    return this._data.variableList;
  }

  get suggestion() {
    return this._data.suggestion;
  }

  get isZH() {
    return this._data.isZH;
  }

  get sourceCode() {
    return this._data.sourceCode;
  }

  // DeepSeek configuration methods
  setDeepSeekApiKey(apiKey) {
    DeepSeekData.setApiKey(apiKey);
  }

  getDeepSeekApiKey() {
    return DeepSeekData.getApiKey();
  }

  isDeepSeekConfigured() {
    return DeepSeekData.isConfigured();
  }

  setSearchSource(source) {
    if (Object.values(Configs.SEARCH_SOURCES).includes(source)) {
      this._data.searchSource = source;
      SessionStorage.setItem(Configs.SEARCH_SOURCE_STORAGE, source);
      this.update({ searchSource: source });
    }
  }
}

export default new SearchCodeModel();
