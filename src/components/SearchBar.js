import React from 'react';
import {Dropdown, Icon, Input} from 'semantic-ui-react';

export default class SearchBar extends React.Component {
  input = React.createRef();
  select = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      lang: null,
      prevProps: props,
      inputSize: 'huge'
    }
    window.addEventListener('resize', this.resizeInput, false)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // avoid calculating expensive derived data
    if (prevState.prevProps === nextProps) { return null}
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

  handleTypeChange = (e, { value }) => this.setState({ type: value });

  render() {
    return (
      <div className='search-bar'>
        <div className='search-bar__desc'>
          Search over GitHub, Bitbucket, GitLab to find real-world usage variable names
        </div>
        <Input ref={this.input}
               className={`search-bar__input${this.props.variableList.length ? ' search-bar__input--dark' :''}`}
               icon fluid placeholder={this.props.placeholder} size={this.state.inputSize}>
          <Dropdown text='' icon='filter' className='search-bar__dropdown'>
            <Dropdown.Menu>
              <Dropdown.Item icon='undo' text='All 90 Languages (Reset)' />
              <Dropdown.Menu scrolling>
                <Dropdown.Item text='Open...' description='ctrl + o' />
                <Dropdown.Item text='Save as...' description='ctrl + s' />
                <Dropdown.Item text='Rename' description='ctrl + r' />
                <Dropdown.Item text='Make a copy' />
                <Dropdown.Item icon='folder' text='Move to folder' />
                <Dropdown.Item icon='trash' text='Move to trash' />
                <Dropdown.Item icon='trash' text='Move to trash' />
                <Dropdown.Item icon='trash' text='Move to trash' />
                <Dropdown.Item icon='trash' text='Move to trash' />
                <Dropdown.Item icon='trash' text='Move to trash' />
                <Dropdown.Item icon='trash' text='Move to trash' />
                <Dropdown.Item icon='trash' text='Move to trash' />
              </Dropdown.Menu>
            </Dropdown.Menu>
          </Dropdown>
          <input defaultValue={this.props.searchValue}
                 onKeyPress={e => {e.key === 'Enter' && this.handleSearch()}}/>
          <Icon name='search' link onClick={() => this.handleSearch()}/>
        </Input>
        <div className='search-bar__helper'>
        </div>
      </div>
    )
  }
}
