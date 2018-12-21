import React from 'react';
export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  onClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return <button onClick={() => this.onClick()}>{this.props.name + ' ' + this.state.count}</button>
  }
}
