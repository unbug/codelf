import React from 'react';
import {Dropdown, Icon, Input} from 'semantic-ui-react';

export default class SearchBar extends React.Component {
  input = React.createRef();
  select = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      type: 'title',
      prevProps: props
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // avoid calculating expensive derived data
    if (prevState.prevProps === nextProps) { return null}
    let newState = {
      prevProps: nextProps // prevProps memoization
    }
    // derived state from props
    if (prevState.prevProps.searchType != nextProps.searchType) {
      newState.type = nextProps.searchType;
    }
    return newState;
  }

  handleSearch = () => {
    this.props.onSearch({
      type: this.state.type,
      value: this.input.current.inputRef.value
    });
  }

  handleTypeChange = (e, { value }) => this.setState({ type: value });

  render() {
    return (
      <div className='search-bar'>
        <div className='search-bar__desc'>
          Search over GitHub, Bitbucket, GitLab to find real-world usage variable names
        </div>
        <Input className='search-bar__input'
               icon fluid placeholder={this.props.placeholder} size={document.body.offsetWidth > 800 ? 'huge' : ''}>
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
