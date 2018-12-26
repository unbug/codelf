import React from 'react';
import {Label} from 'semantic-ui-react';

export default class Suggestion extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.suggestion || !this.props.suggestion.length) { return null; }
    const list = this.props.suggestion.map((item, i) => {
      return <Label key={i} circular size='mini' color='grey' as='a' href={`#${item}`}>{item}</Label>
    });
    return (
      <div className='suggestion'>
        <Label color='grey' size='mini'>Quick Search:</Label> {list}
      </div>
    )
  }
}
