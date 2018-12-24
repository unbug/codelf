import React from 'react';

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='loading'>
        <div className='logo'><img className='spinner' src='images/codelf_logo.png'/></div>
      </div>
    )
  }
}
