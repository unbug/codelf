import React, { useEffect, useRef, useState } from 'react';
import { Dropdown, Icon, Input, Modal, Button, Form } from 'semantic-ui-react';
import * as Configs from '../constants/Configs';

// http://githut.info/
const topProgramLan = [
  { id: '22,106', language: 'JavaScript, CoffeeScript' },
  { id: '133,135', language: 'CSS' },
  { id: '3,39', language: 'HTML' },
  { id: 137, language: 'Swift' },
  { id: 35, language: 'Objective-C' },
  { id: 23, language: 'Java' },
  { id: 19, language: 'Python' },
  { id: 24, language: 'PHP' },
  { id: 32, language: 'Ruby' },
  { id: 28, language: 'C' },
  { id: 16, language: 'C++' },
  { id: 6, language: 'C#' },
  { id: 55, language: 'Go' },
  { id: 51, language: 'Perl' },
  { id: '104,109', language: 'Clojure, ClojureScript' },
  { id: 40, language: 'Haskell' },
  { id: 54, language: 'Lua' },
  { id: 20, language: 'Matlab' },
  { id: 144, language: 'R' },
  { id: 47, language: 'Scala' },
  { id: '69,78,146', language: 'Shell' },
  { id: 29, language: 'Lisp' },
  { id: 42, language: 'ActionScript' }
];

// Search source options
const searchSources = [
  { key: Configs.SEARCH_SOURCES.SEARCHCODE, text: 'SearchCode', value: Configs.SEARCH_SOURCES.SEARCHCODE },
  { key: Configs.SEARCH_SOURCES.DEEPSEEK, text: 'DeepSeek AI', value: Configs.SEARCH_SOURCES.DEEPSEEK }
];

export default function SearchBar(props) {
  const inputEl = useRef(null);
  const inputSize = useInputSize('huge');
  const [state, setState] = useState({
    lang: props.searchLang || [],
    searchSource: props.searchSource || Configs.SEARCH_SOURCES.SEARCHCODE,
    valChanged: false,
    showDeepSeekModal: false,
    deepSeekApiKey: props.deepSeekApiKey || ''
  });

  function updateState(vals) {
    setState(prevState => {
      return { ...prevState, ...vals };
    });
  }

  function handleSearch() {
    props.onSearch(inputEl.current.inputRef.current.value, state.lang, state.searchSource);
    inputEl.current.inputRef.current.blur();
    updateState({ valChanged: false });
  }

  function handleRestLang() {
    updateState({ lang: [], valChanged: true });
  }

  function handleSelectLang(id) {
    updateState({ lang: state.lang.concat(id).sort(), valChanged: true });
  }

  function handleDeselectLang(id) {
    let lang = state.lang;
    lang.splice(state.lang.indexOf(id), 1);
    updateState({ lang: lang.sort(), valChanged: true });
  }

  function handleToggleSelectLang(id) {
    state.lang.indexOf(id) === -1 ? handleSelectLang(id) : handleDeselectLang(id);
  }

  function handleSearchSourceChange(e, { value }) {
    if (value === Configs.SEARCH_SOURCES.DEEPSEEK && !props.isDeepSeekConfigured) {
      updateState({ showDeepSeekModal: true });
      return;
    }
    updateState({ searchSource: value, valChanged: true });
    props.onSearchSourceChange && props.onSearchSourceChange(value);
  }

  function handleDeepSeekApiKeySubmit() {
    if (state.deepSeekApiKey.trim()) {
      props.onDeepSeekApiKeyChange && props.onDeepSeekApiKeyChange(state.deepSeekApiKey.trim());
      updateState({ 
        showDeepSeekModal: false, 
        searchSource: Configs.SEARCH_SOURCES.DEEPSEEK,
        valChanged: true 
      });
      props.onSearchSourceChange && props.onSearchSourceChange(Configs.SEARCH_SOURCES.DEEPSEEK);
    }
  }

  const langItems = topProgramLan.map(key => {
    const active = state.lang.indexOf(key.id) !== -1;
    return <Dropdown.Item key={key.id}
      active={active}
      onClick={() => handleToggleSelectLang(key.id)}>
      <Icon name={active ? 'check circle outline' : 'circle outline'} />{key.language}
    </Dropdown.Item>;
  });

  return (
    <div className='search-bar'>
      <div className='search-bar__desc'>
        Search over GitHub, Bitbucket, GitLab to find real-world usage variable names
      </div>
      <div className='search-bar__controls'>
        <Dropdown
          placeholder='Search Source'
          fluid
          selection
          options={searchSources}
          value={state.searchSource}
          onChange={handleSearchSourceChange}
          style={{ marginBottom: '10px', maxWidth: '200px' }}
        />
      </div>
      <form action="javascript:void(0);">
        <Input ref={inputEl}
          onChange={() => updateState({ valChanged: true })}
          className='search-bar__input'
          icon fluid placeholder={props.placeholder} size={inputSize}>
          <Dropdown floating text='' icon='filter' className='search-bar__dropdown'>
            <Dropdown.Menu>
              <Dropdown.Item icon='undo' text='All 90 Languages (Reset)' onClick={handleRestLang} />
              <Dropdown.Menu scrolling className='fix-dropdown-menu'>
                {langItems}
              </Dropdown.Menu>
            </Dropdown.Menu>
          </Dropdown>

          <input type='search' name='search' defaultValue={props.searchValue} list='search-data-list'
            onKeyPress={e => {
              e.key === 'Enter' && handleSearch()
            }} />
          <Icon name={(props.variableList.length && !state.valChanged) ? 'search plus' : 'search'}
            link onClick={handleSearch} />
          <datalist id='search-data-list'>
            {props.luckyKeyWords.map((item, i) => <option value={item} key={i} />)}
          </datalist>
        </Input>
      </form>
      <div className='search-bar__plugins'>
        Extensions:&nbsp;
        <a href='https://github.com/unbug/codelf#codelf-for-vs-code'
          target='_blank' rel='noopener noreferrer'>VS Code</a>,&nbsp;
        <a className='text-muted' href='https://atom.io/packages/codelf'
          target='_blank' rel='noopener noreferrer'>Atom</a>,&nbsp;
        <a className='text-muted' href='https://github.com/unbug/codelf#codelf-for-sublime-text'
          target='_blank' rel='noopener noreferrer'>Sublime</a>,&nbsp;
        <a href='https://github.com/unbug/codelf/issues/24'
          target='_blank' rel='noopener noreferrer'>WebStorm</a>,&nbsp;
        <a href='https://github.com/unbug/codelf/issues/63'
          target='_blank' rel='noopener noreferrer'>Alfred</a>
      </div>

      {/* DeepSeek API Key Configuration Modal */}
      <Modal
        open={state.showDeepSeekModal}
        onClose={() => updateState({ showDeepSeekModal: false })}
        size='small'
      >
        <Modal.Header>Configure DeepSeek API</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>DeepSeek API Key</label>
              <input
                type='password'
                placeholder='Enter your DeepSeek API key'
                value={state.deepSeekApiKey}
                onChange={(e) => updateState({ deepSeekApiKey: e.target.value })}
              />
            </Form.Field>
            <p>
              <small>
                You need a DeepSeek API key to use DeepSeek search. 
                Get your API key from <a href="https://platform.deepseek.com/api_keys" target="_blank" rel="noopener noreferrer">DeepSeek Platform</a>.
              </small>
            </p>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => updateState({ showDeepSeekModal: false })}>
            Cancel
          </Button>
          <Button 
            primary 
            onClick={handleDeepSeekApiKeySubmit}
            disabled={!state.deepSeekApiKey.trim()}
          >
            Save & Use DeepSeek
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}

function useInputSize(val) {
  const [size, setSize] = useState(val);

  useEffect(() => {
    resizeInput();
    window.addEventListener('resize', resizeInput, false);
    return () => window.removeEventListener('resize', resizeInput, false);
  }, []);// run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([])

  function resizeInput() {
    setSize(document.body.offsetWidth < 800 ? '' : val);
  }

  return size;
}
