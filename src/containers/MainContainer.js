import React from 'react';
import {Container} from 'semantic-ui-react';
import SearchBar from '../components/SearchBar';
import TitleLogo from '../components/TitleLogo';
import SearchCodeModel from '../models/SearchCodeModel';
import HashHandler from '../utils/HashHandler';
import VariableList from '../components/VariableList';
import SearchError from '../components/SearchError';
import Loading from '../components/Loading';
import Donate from '../components/Donate';
import Suggestion from '../components/Suggestion';
import SourceCode from '../components/SourceCode';
import AppModel from '../models/AppModel';
import DDMSModel from '../models/DDMSModel';

export default class MainContainer extends React.Component {
  state = {
    isZH: false,
    isError: false,
    variableRequesting: false,
    searchValue: SearchCodeModel.searchValue,
    searchLang: SearchCodeModel.searchLang,
    page: SearchCodeModel.page,
    variableList: SearchCodeModel.variableList,
    suggestion: SearchCodeModel.suggestion,
    sourceCodeRequesting: false,
    sourceCodeVisible: false,
    sourceCodeVariable: null,
    sourceCodeRepo: null,
  }

  repoList = null;

  constructor(props) {
    super(props);
    SearchCodeModel.onUpdated(this.handleSearchCodeModelUpdate);
    window.addEventListener('hashchange', this.handleLocationHashChanged, false);
    AppModel.analytics();
  }

  componentDidUpdate(prevProps) {
    this.state.variableList.length && document.body.classList.add('dark');
  }

  componentDidMount() {
    this.handleLocationHashChanged();
  }

  checkError(data) {
    if (this.state.variableRequesting) {
      // no search result
      if (data.variableList.length < 1 || data.variableList[data.variableList.length - 1].length < 1)  {
        return true;
      }
    }
    return false;
  }

  requestVariable = (val, lang) => {
    const langChanged = lang ? (lang.join(',') != this.state.searchLang.join(',')) : !!this.state.searchLang;
    val = decodeURIComponent(val);
    let page = this.state.page;
    if (val == this.state.searchValue && !langChanged) {
      page += 1;
    } else {
      page = 0;
    }
    this.setState({searchValue: val, variableRequesting: true});
    SearchCodeModel.requestVariable(val, page,  lang || this.state.searchLang);
    AppModel.analytics('q=' + val);
    DDMSModel.postKeyWords(val);
    this.updateDocTitle(val);
  }

  requestSourceCode = repo => {
    this.setState({
      sourceCodeVisible: true,
      sourceCodeRequesting: true,
      sourceCodeRepo: repo
    });
    SearchCodeModel.requestSourceCode(repo.id);
    AppModel.analytics('sourcecode&q=' + this.state.sourceCodeVariable.keyword);
  }

  updateDocTitle = title => {
    document.title = `${title? (title + ' - ') : ''}CODELF`;
  }

  handleLocationHashChanged = e => {
    e && e.preventDefault();
    const hash = HashHandler.get();
    hash && this.requestVariable(hash.replace(/(\?.*)/, ''));
  }

  handleSearchCodeModelUpdate = (curr, prev, mutation) => {
    if (mutation.variableList) {
      this.setState({
        isZH: SearchCodeModel.isZH || this.state.isZH,
        isError: this.checkError(curr),
        variableRequesting: !mutation.variableList,
        searchValue: SearchCodeModel.searchValue,
        searchLang: SearchCodeModel.searchLang,
        page: SearchCodeModel.page,
        variableList: SearchCodeModel.variableList,
        suggestion: SearchCodeModel.suggestion
      });
    }
    if (mutation.sourceCode) {
      this.setState({
        sourceCodeRequesting: false,
        sourceCode: SearchCodeModel.sourceCode
      });
    }
  }

  handleSearch = (val, lang) => {
    if (val === null || val === undefined || this.state.variableRequesting) { return; }
    val = val.trim().replace(/\s+/ig, ' '); // filter spaces
    if (val.length < 1) { return; }
    if (val == this.state.searchValue) {
      this.requestVariable(val, lang);
    } else  {
      this.setState({searchLang: lang});
      setTimeout(() => HashHandler.set(val)); // update window.location.hash
    }
  }

  handleOpenSourceCode = variable => {
    this.setState({sourceCodeVariable: variable});
    setTimeout(() => this.requestSourceCode(variable.repoList[0]), 0);
  }

  handleCloseSourceCode = () => {
    this.setState({sourceCodeVisible: false});
  }

  handleRequestSourceCode = repo => {
    this.requestSourceCode(repo);
  }

  renderSloganImage() {
    if (this.state.page > 0 || this.state.variableList.length) { return ''; }
    return <div className='slogan-image'><img src='images/twohardtings.jpg'/></div>;
  }

  render() {
    return (
      <Container className='main-container'>
        <TitleLogo/>
        <SearchBar placeholder='AI 人工智能' {...this.state} onSearch={this.handleSearch}/>
        <Suggestion {...this.state}/>
        {this.state.variableRequesting ? <Loading/> : (this.state.isError ? <SearchError/> : '')}
        {this.renderSloganImage()}
        <VariableList {...this.state} onOpenSourceCode={this.handleOpenSourceCode}/>
        {this.state.variableList.length ? <Donate {...this.state}/> : ''}
        <SourceCode {...this.state}
                    onRequestSourceCode={this.handleRequestSourceCode}
                    onCloseSourceCode={this.handleCloseSourceCode}/>
      </Container>
    )
  }
}
