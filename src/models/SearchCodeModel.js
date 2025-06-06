import BaseModel from './BaseModel';
import * as Tools from '../utils/Tools';
import YoudaoTranslateData from './metadata/YoudaoTranslateData';
import BaiduTranslateData from './metadata/BaiduTranslateData';
import BingTranslateData from './metadata/BingTranslateData';
import DeepSeekSearchData from './metadata/DeepSeekSearchData';
import JSONP from '../utils/JSONP';
import Store from './Store';
import AppModel from './AppModel';
import { SessionStorage } from '../utils/LocalStorage';
import * as Configs from '../constants/Configs';

const SEARCH_LANG_KEY = `${Configs.APP_NANE}_search_lang_key`;
const SEARCH_ENGINE_KEY = `${Configs.APP_NANE}_search_engine_key`;

class SearchCodeModel extends BaseModel {
  constructor() {
    super();
    this._data = {
      isZH: false,
      searchValue: null,
      searchLang: SessionStorage.getItem(SEARCH_LANG_KEY),
      searchEngine: SessionStorage.getItem(SEARCH_ENGINE_KEY) || Configs.SEARCH_ENGINES.SEARCHCODE,
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
  async requestVariable(val, page, lang, searchEngine) {
    lang = lang || this.searchLang;
    searchEngine = searchEngine || this.searchEngine;
    
    // Persist search preferences
    SessionStorage.setItem(SEARCH_LANG_KEY, lang);
    SessionStorage.setItem(SEARCH_ENGINE_KEY, searchEngine);
    
    if (val !== undefined && val !== null) {
      val = val.trim().replace(/\s+/ig, ' '); // filter spaces
    }
    if (val.length < 1) {
      return;
    }

    // Route to appropriate search engine
    if (searchEngine === Configs.SEARCH_ENGINES.DEEPSEEK) {
      return this._searchWithDeepSeek(val, page, lang);
    } else {
      return this._searchWithSearchCode(val, page, lang);
    }
  }

  /**
   * Search using DeepSeek AI
   * @private
   */
  async _searchWithDeepSeek(val, page, lang) {
    let q = val;
    let suggestion = this._parseSuggestion(val.split(' '));
    let isZH = this._isZH(val);

    // Translate Chinese queries if needed
    if (isZH) {
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
          searchEngine: Configs.SEARCH_ENGINES.DEEPSEEK,
          suggestion: suggestion,
          isZH: isZH || this.isZH
        });
        return;
      }
    }

    try {
      // Call DeepSeek search API
      const searchResults = await DeepSeekSearchData.search(q, page, lang);
      
      // Parse results into the expected format
      const variables = this._parseDeepSeekResults(searchResults.results, q);
      
      const cdata = {
        searchValue: val,
        page: page,
        variableList: [...this._data.variableList, variables],
        searchLang: lang,
        searchEngine: Configs.SEARCH_ENGINES.DEEPSEEK,
        suggestion: suggestion,
        isZH: isZH || this.isZH
      };
      
      this.update(cdata);
    } catch (error) {
      console.error('DeepSeek search failed:', error);
      this.update({
        searchValue: val,
        page: page,
        variableList: [...this.variableList, []],
        searchLang: lang,
        searchEngine: Configs.SEARCH_ENGINES.DEEPSEEK,
        suggestion: suggestion,
        isZH: isZH || this.isZH
      });
    }
  }

  /**
   * Search using SearchCode.com (original implementation)
   * @private
   */
  async _searchWithSearchCode(val, page, lang) {
  /**
   * Search using SearchCode.com (original implementation)
   * @private
   */
  async _searchWithSearchCode(val, page, lang) {
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
          searchEngine: this.searchEngine,
          suggestion: suggestion,
          isZH: isZH || this.isZH
        });
      }
    }
    const cacheId = Tools.MD5(q + page + (lang && lang.length ? lang.join(',') : ''));
    const cache = this._variableListStore.get(cacheId);
    if (cache) {
      this.update(cache);
      return;
    }
    // multiple val separate with '+'
    // const url = `//searchcode.com/api/codesearch_I/?q=${q.replace(' ', '+')}&p=${page}&per_page=42${lang.length ? ('&lan=' + lang.join(',')) : ''}`;
    const langParams = lang.length ? ('&lan=' + lang.join(',').split(',').join('&lan=')) : '';
    const qParams = q.replace(' ', '+');
    const url = `//searchcode.com/api/jsonp_codesearch_I/?callback=?&q=${qParams}&p=${page}&per_page=42${langParams}`;
    const done = data => {
      const cdata = {
        searchValue: val,
        page: page,
        variableList: [...this._data.variableList, this._parseVariableList(data.results, q)],
        searchLang: lang,
        searchEngine: this.searchEngine,
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
              searchEngine: this.searchEngine,
              suggestion: suggestion,
              isZH: isZH || this.isZH
            });
          });
      });
  }

  /**
   * Parse DeepSeek AI search results into app format
   * @private
   */
  _parseDeepSeekResults(results, keywords) {
    let variables = [];
    
    results.forEach(res => {
      // Create a mock repo URL for DeepSeek results
      const repoUrl = res.repo || 'https://github.com/deepseek-ai/examples';
      
      // Extract variable name from the result
      const keyword = res.keyword || res.id || 'aiVariable';
      
      // Create variable entry
      const variable = {
        keyword: keyword,
        repoLink: repoUrl,
        repoLang: res.language || 'javascript',
        color: Tools.randomLabelColor()
      };
      
      // Update repo mapping for this variable
      this._updateVariableRepoMapping(keyword, {
        id: res.id,
        repo: repoUrl,
        language: res.language || 'javascript',
        lines: res.lines || {}
      });
      
      variable.repoList = this._getVariableRepoMapping(keyword);
      variables.push(variable);
    });
    
    return variables;
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

  get searchEngine() {
    return this._data.searchEngine || SessionStorage.getItem(SEARCH_ENGINE_KEY) || Configs.SEARCH_ENGINES.SEARCHCODE;
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

  /**
   * Set the current search engine
   * @param {string} engine - Search engine to use (from SEARCH_ENGINES constants)
   */
  setSearchEngine(engine) {
    this._data.searchEngine = engine;
    SessionStorage.setItem(SEARCH_ENGINE_KEY, engine);
    this.update({ searchEngine: engine });
  }
}

export default new SearchCodeModel();
