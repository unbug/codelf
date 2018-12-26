import React from 'react';
import {Label} from 'semantic-ui-react';

export default class SearchError extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='search-error'>
        <div>Nothing found, please try  <Label color='grey' size='mini'>Quick Search</Label> or come back later :)</div>
      </div>
    );
  }
}
