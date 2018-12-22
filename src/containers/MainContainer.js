import React from 'react';
import {Container} from 'semantic-ui-react';
import SearchBar from '../components/SearchBar';
import Title from '../components/Title';

export default class MainContainer extends React.Component {
  state = {
    searchValue: null,
  }

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
    }
  }

  componentDidMount() {
    document.body.classList.add('dark')
  }

  render() {
    return (
      <Container className='main'>
        <Title {...this.state}/>
        <SearchBar placeholder='AI 人工智能' {...this.state}/>
      </Container>
    )
  }
}
