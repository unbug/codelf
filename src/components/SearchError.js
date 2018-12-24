import React from 'react';
import {Label} from 'semantic-ui-react';

export default class SearchError extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='search-error'>
        <div>Nothing found, please come back later, or try  <Label>Suggestions</Label> :)</div>
      </div>
    );
  }
}
