import React from 'react';
import {Container} from 'semantic-ui-react';
import SearchBar from '../components/SearchBar';
import Title from '../components/Title';
import SearchcodeModel from '../models/SearchcodeModel';
import HashHandler from '../utils/HashHandler';
import VariableList from '../components/VariableList';
import SearchError from '../components/SearchError';
import Loading from '../components/Loading';
import Donate from '../components/Donate';
import NoticeLinks from '../components/NoticeLinks';
import Suggestion from '../components/Suggestion';
import NavBar from '../components/NavBar';

export default class MainContainer extends React.Component {
  state = {
    isZH: false,
    isError: false,
    isSearchingVariable: false,
    searchValue: SearchcodeModel.searchValue,
    searchLang: SearchcodeModel.searchLang,
    page: SearchcodeModel.page,
    variableList: SearchcodeModel.variableList,
    suggestion: SearchcodeModel.suggestion
  }

  constructor(props) {
    super(props);
    SearchcodeModel.onUpdated(this.handleSearchcodeModelUpdate);
    window.addEventListener('hashchange', this.handleLocationHashChanged, false);
  }

  componentDidUpdate(prevProps) {
    this.state.variableList.length && document.body.classList.add('dark');
  }

  componentDidMount() {
    this.handleLocationHashChanged();
  }

  handleLocationHashChanged = e => {
    e && e.preventDefault();
    const hash = HashHandler.get();
    hash && this.requestVariable(hash.replace(/(\?.*)/, ''));
  }

  handleSearchcodeModelUpdate = (curr, prev, mutation) => {
    this.setState({
      isZH: SearchcodeModel.isZH || this.state.isZH,
      isError: this.checkError(curr),
      isSearchingVariable: !mutation.variableList,
      searchValue: SearchcodeModel.searchValue,
      searchLang: SearchcodeModel.searchLang,
      page: SearchcodeModel.page,
      variableList: SearchcodeModel.variableList,
      suggestion: SearchcodeModel.suggestion
    });
  }

  handleSearch = (val, lang) => {
    this.setState({searchLang: lang});
    if (val === null || val === undefined || this.state.isSearchingVariable) { return; }
    val = val.trim().replace(/\s+/ig, ' '); // filter spaces
    if (val.length < 1) { return; }
    if (val == this.state.searchValue) {
      this.requestVariable(val, lang);
    } else  {
      HashHandler.set(val); // update window.location.hash
    }
  }

  checkError(data) {
    if (this.state.isSearchingVariable) {
      // no search result
      if (data.variableList.length < 1 || data.variableList[data.variableList.length - 1].length < 1)  {
        return true;
      }
    }
    return false;
  }

  requestVariable = (val, lang) => {
    val = decodeURIComponent(val);
    let page = this.state.page;
    if (val === this.state.searchValue) {
      page += 1;
    } else {
      page = 0;
    }
    this.setState({searchValue: val, isSearchingVariable: true});
    SearchcodeModel.requestVariable(val, page,  lang || this.state.searchLang);
  }

  renderSloganImage() {
    if (this.state.page > 0 || this.state.variableList.length) { return ''; }
    return <div className='slogan-image'><img src='images/twohardtings.jpg'/></div>;
  }

  render() {
    return (
      <Container className='main'>
        <Title {...this.state}/>
        <SearchBar placeholder='AI 人工智能' {...this.state} onSearch={this.handleSearch}/>
        <Suggestion {...this.state}/>
        {this.state.isSearchingVariable ? <Loading/> : (this.state.isError ? <SearchError/> : '')}
        {this.renderSloganImage()}
        <VariableList {...this.state}/>
        {this.state.variableList.length ? <Donate {...this.state}/> : ''}
        <NoticeLinks/>
        <NavBar/>
      </Container>
    )
  }
}
