import React from 'react';
import { Label } from 'semantic-ui-react';

export default function SearchError() {
  return (
    <div className='search-error'>
      <div>Nothing found, please try  <Label color='grey' size='mini'>Quick Search</Label> or come back later :)</div>
      <div>You can also get help from <a href='https://github.com/unbug/codelf/issues'
        target='_blank'
        rel="noopener noreferrer" >https://github.com/unbug/codelf/issues</a>.
      </div>
    </div>
  );
}
