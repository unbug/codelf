import React from 'react';
import {Container} from 'semantic-ui-react';
import SearchBar from '../components/SearchBar';
import Title from '../components/Title';
import SearchcodeModel from '../models/SearchcodeModel';
import HashHandler from '../utils/HashHandler';
import VariableList from '../components/VariableList';

export default class MainContainer extends React.Component {
  state = {
    isSearchingVariable: false,
    searchValue: SearchcodeModel.searchValue,
    searchLang: SearchcodeModel.searchLang,
    page: SearchcodeModel.page,
    variableList: SearchcodeModel.variableList
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
      isSearchingVariable: !mutation.variableList,
      searchValue: SearchcodeModel.searchValue,
      searchLang: SearchcodeModel.searchLang,
      page: SearchcodeModel.page,
      variableList: SearchcodeModel.variableList
    });
  }

  handleSearch = (val, lang) => {
    this.setState({searchLang: lang});
    if (val === null || val === undefined || this.state.isSearchingVariable) { return; }
    val = val.trim().replace(/\s+/ig, ' '); // filter spaces
    if (val.length < 1) { return; }
    if (val == this.state.searchValue) {
      this.requestVariable(val);
    } else  {
      HashHandler.set(val); // update window.location.hash
    }
  }

  requestVariable = val => {
    val = decodeURIComponent(val);
    let page = this.state.page;
    if (val === this.state.searchValue) {
      page += 1;
    }
    this.setState({searchValue: val, isSearchingVariable: true});
    SearchcodeModel.requestVariable(val, page,  this.state.searchLang);
  }

  render() {
    return (
      <Container className='main'>
        <Title {...this.state}/>
        <SearchBar placeholder='AI 人工智能' {...this.state} onSearch={this.handleSearch}/>
        <VariableList {...this.state}/>
      </Container>
    )
  }
}
