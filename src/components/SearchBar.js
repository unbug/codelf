import React from 'react';
import {Dropdown, Icon, Input, Checkbox} from 'semantic-ui-react';

// http://githut.info/
const topProgramLan = [
  {id: '22,106', language: 'JavaScript, CoffeeScript'},
  {id: '133,135', language: 'CSS'},
  {id: '3,39', language: 'HTML'},
  {id: 137, language: 'Swift'},
  {id: 35, language: 'Objective-C'},
  {id: 23, language: 'Java'},
  {id: 19, language: 'Python'},
  {id: 24, language: 'PHP'},
  {id: 32, language: 'Ruby'},
  {id: 28, language: 'C'},
  {id: 16, language: 'C++'},
  {id: 6, language: 'C#'},
  {id: 55, language: 'Go'},
  {id: 51, language: 'Perl'},
  {id: '104,109', language: 'Clojure, ClojureScript'},
  {id: 40, language: 'Haskell'},
  {id: 54, language: 'Lua'},
  {id: 20, language: 'Matlab'},
  {id: 144, language: 'R'},
  {id: 47, language: 'Scala'},
  {id: '69,78,146', language: 'Shell'},
  {id: 29, language: 'Lisp'},
  {id: 42, language: 'ActionScript'}
];



export default class SearchBar extends React.Component {
  input = React.createRef();
  select = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      lang: [],
      prevProps: props,
      inputSize: 'huge'
    }
    window.addEventListener('resize', this.resizeInput, false)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // avoid calculating expensive derived data
    if (prevState.prevProps === nextProps) {
      return null
    }
    let newState = {
      prevProps: nextProps // prevProps memoization
    }
    // derived state from props
    if (prevState.prevProps.searchLang != nextProps.searchLang) {
      newState.lang = nextProps.searchLang;
    }
    return newState;
  }

  componentDidMount() {
    this.resizeInput();
  }

  resizeInput = () => {
    this.setState({inputSize: document.body.offsetWidth < 800 ? '' : 'huge'})
  }

  handleSearch = () => {
    this.props.onSearch(this.input.current.inputRef.value, this.state.lang);
  }

  handleRestLang = () => {
    this.setState({lang: []})
  }

  handleSelectLang = id => {
    this.setState({lang: this.state.lang.concat(id)})
  }

  handleDeselectLang = id => {
    let lang = this.state.lang;
    lang.splice(this.state.lang.indexOf(id), 1);
    this.setState({lang: lang})
  }

  handleToggleSelectLang = id => {
    this.state.lang.indexOf(id) === -1 ? this.handleSelectLang(id) : this.handleDeselectLang(id);
  }

  renderItems() {
    return topProgramLan.map(key => {
      const active = this.state.lang.indexOf(key.id) !== -1;
      return <Dropdown.Item key={key.id}
                            active={active}
                            onClick={() => this.handleToggleSelectLang(key.id)}>
        <Icon name={active ? 'check circle outline' : 'circle outline'}/>{key.language}
      </Dropdown.Item>;
    })
  }

  render() {
    return (
      <div className='search-bar'>
        <div className='search-bar__desc'>
          Search over GitHub, Bitbucket, GitLab to find real-world usage variable names
        </div>
        <Input ref={this.input}
               className={`search-bar__input${this.props.variableList.length ? ' search-bar__input--dark' : ''}`}
               icon fluid placeholder={this.props.placeholder} size={this.state.inputSize}>
          <Dropdown text='' icon='filter' className='search-bar__dropdown'>
            <Dropdown.Menu>
              <Dropdown.Item icon='undo' text='All 90 Languages (Reset)' onClick={this.handleRestLang}/>
              <Dropdown.Menu scrolling>
                {this.renderItems()}
              </Dropdown.Menu>
            </Dropdown.Menu>
          </Dropdown>
          <input defaultValue={this.props.searchValue}
                 onKeyPress={e => {
                   e.key === 'Enter' && this.handleSearch()
                 }}/>
          <Icon name={this.props.variableList.length ? 'search plus' : 'search'}
                link onClick={() => this.handleSearch()}/>
        </Input>
        <div className='search-bar__helper'>
        </div>
      </div>
    )
  }
}
