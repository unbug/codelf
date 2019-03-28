import React, {useEffect, useReducer} from 'react';
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

const actionTypes = {
  UPDATE: 'update',
};

const initState = {
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
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.UPDATE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}


export default function MainContainer(props) {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    AppModel.analytics();
    setTimeout(handleLocationHashChanged, 100);
    window.addEventListener('hashchange', handleLocationHashChanged, false);
    return () => window.removeEventListener('hashchange', handleLocationHashChanged);
  }, []);

  useEffect(() => {
    state.variableList.length && document.body.classList.add('dark');
  }, [state.variableList]);

  useEffect(() => {
    SearchCodeModel.onUpdated(handleSearchCodeModelUpdate);
    return () => SearchCodeModel.offUpdated(handleSearchCodeModelUpdate);
  });

  function setState(payload) {
    dispatch({type: actionTypes.UPDATE, payload: payload});
  }


  function checkError(data) {
    if (state.variableRequesting) {
      // no search result
      if (data.variableList.length < 1 || data.variableList[data.variableList.length - 1].length < 1) {
        return true;
      }
    }
    return false;
  }

  function requestVariable(val, lang) {
    const langChanged = lang ? (lang.join(',') != state.searchLang.join(',')) : !!state.searchLang;
    val = decodeURIComponent(val);
    let page = state.page;
    if (val == state.searchValue && !langChanged) {
      page += 1;
    } else {
      page = 0;
    }
    setState({searchValue: val, variableRequesting: true});
    SearchCodeModel.requestVariable(val, page, lang || state.searchLang);
    AppModel.analytics('q=' + val);
    DDMSModel.postKeyWords(val);
    updateDocTitle(val);
  }

  function requestSourceCode(repo) {
    setState({
      sourceCodeVisible: true,
      sourceCodeRequesting: true,
      sourceCodeRepo: repo
    });
    SearchCodeModel.requestSourceCode(repo.id);
    AppModel.analytics('sourcecode&q=' + state.sourceCodeVariable.keyword);
  }

  function updateDocTitle(title) {
    document.title = `${title ? (title + ' - ') : ''}CODELF`;
  }

  function handleLocationHashChanged(e) {
    e && e.preventDefault();
    const hash = HashHandler.get();
    hash && requestVariable(hash.replace(/(\?.*)/, ''));
  }

  function handleSearchCodeModelUpdate(curr, prev, mutation) {
    if (mutation.variableList) {
      setState({
        isZH: SearchCodeModel.isZH || state.isZH,
        isError: checkError(curr),
        variableRequesting: !mutation.variableList,
        searchValue: SearchCodeModel.searchValue,
        searchLang: SearchCodeModel.searchLang,
        page: SearchCodeModel.page,
        variableList: SearchCodeModel.variableList,
        suggestion: SearchCodeModel.suggestion
      });
    }
    if (mutation.sourceCode) {
      setState({
        sourceCodeRequesting: false,
        sourceCode: SearchCodeModel.sourceCode
      });
    }
  }

  function handleSearch(val, lang) {
    if (val === null || val === undefined || state.variableRequesting) {
      return;
    }
    val = val.trim().replace(/\s+/ig, ' '); // filter spaces
    if (val.length < 1) {
      return;
    }
    if (val == state.searchValue) {
      requestVariable(val, lang);
    } else {
      setState({searchLang: lang});
      setTimeout(() => HashHandler.set(val)); // update window.location.hash
    }
  }

  function handleOpenSourceCode(variable) {
    setState({sourceCodeVariable: variable});
    setTimeout(() => requestSourceCode(variable.repoList[0]), 0);
  }

  function handleCloseSourceCode() {
    setState({sourceCodeVisible: false});
  }

  function handleRequestSourceCode(repo) {
    requestSourceCode(repo);
  }

  function renderSloganImage() {
    if (state.page > 0 || state.variableList.length) {
      return '';
    }
    return <div className='slogan-image'><img src='images/twohardtings.jpg'/></div>;
  }

  return (
    <Container className='main-container'>
      <TitleLogo/>
      <SearchBar placeholder='AI 人工智能' {...state} onSearch={handleSearch}/>
      <Suggestion {...state}/>
      {state.variableRequesting ? <Loading/> : (state.isError ? <SearchError/> : '')}
      {renderSloganImage()}
      <VariableList {...state} onOpenSourceCode={handleOpenSourceCode}/>
      {state.variableList.length ? <Donate {...state}/> : ''}
      <SourceCode {...state}
                  onRequestSourceCode={handleRequestSourceCode}
                  onCloseSourceCode={handleCloseSourceCode}/>
    </Container>
  )
}
