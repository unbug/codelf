import BaseModel from './BaseModel';
import * as Tools from '../utils/Tools';

class SearchcodeModel extends BaseModel {
  constructor() {
    super();
    this._data = {
      searchValue: null,
      searchLang: null,
      page: 0,
      variableList: []
    };
    this._variableRepoMapping = {};
  }

  //search code by query
  requestVariable(val, page, lang) {
    if (val !== undefined && val !== null) {
      val = val.trim().replace(/\s+/ig, ' '); // filter spaces
    }
    if (val.length < 1) { return; }
    // multiple val separate with '+'
    const url = `//searchcode.com/api/codesearch_I/?q=${val.replace(' ', '+')}&p=${page}&per_page=42${lang ? ('&lan=' + lang) : ''}`;
    val && fetch(url)
      .then(res => res.json())
      .then(data => {
        this.update({
          searchValue: val,
          page: page,
          variableList: [...this._data.variableList, this._parseVariableList(data.results, val)],
          searchLang: lang
        });
    }).catch(err => {
      this.update({
        searchValue: val,
        page: page,
        variableList: [...this.variableList, []],
        searchLang: lang
      });
    });
  }

  getKeyWordReg(key) {
    return new RegExp('([\\-_\\w\\d\\/\\$]{0,}){0,1}' + key + '([\\-_\\w\\d\\$]{0,}){0,1}', 'gi');
  }

  getKeyWroddRegs(vals) {
    return vals.split(' ').reduce((accumulator, curr) => {
      if (curr.length && curr.length > 1) {
        return accumulator.concat(this.getKeyWordReg(curr));
      }
    }, []);
  }

  _parseVariableList(results, keywords) {
    let vals = [], variables = [];
    results.forEach(res => {
      //filter codes
      const lineStr = Object.keys(res.lines).reduce((accu, line) => {
        let lstr = res.lines[line];
        //no base64
        if (!(/;base64,/g.test(lstr) && lstr.length > 256)) {
          return accu.concat(lstr);
        }
      }, []).join('').replace(/\r\n/g, ' '); // remove \r\n
      //match variables
      this.getKeyWroddRegs(keywords).forEach(reg => {
        (lineStr.match(reg) || []).forEach(val => {
          //remove "-" and "/" from the start and the end
          val = val.replace(/^(-|\/)*/, '').replace(/(-|\/)*$/, '');
          if (
            !/\//g.test(val) /*exclude links*/
            && vals.indexOf(val) === -1
            && vals.indexOf(val.toLowerCase()) === -1
            && vals.indexOf(val.toUpperCase()) === -1
            && val.length < 64 /*too long*/
          ) {
            vals.push(val);
            this._updateVariableRepoMapping(val, res);
            //render variable labels
            variables.push({
              keyword: val,
              repo: res,
              repoLen: this._variableRepoMapping[val].length,
              color: Tools.randomLabelColor()
            });
          }
        });
      });
    });
    return variables;
  }

  _updateVariableRepoMapping(val, repo) {
    this._variableRepoMapping[val] = this._variableRepoMapping[val] || [];
    if (!this._variableRepoMapping[val].find(key => key.id === repo.id)) {
      this._variableRepoMapping[val].push(repo);
    }
  }

  get searchValue() {
    return this._data.searchValue;
  }

  get searchLang() {
    return this._data.searchLang;
  }

  get page() {
    return this._data.page;
  }

  get variableList() {
    return this._data.variableList;
  }
}

export default new SearchcodeModel();
