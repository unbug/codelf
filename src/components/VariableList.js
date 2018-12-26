import React from 'react';
import {Button, Label, Popup} from 'semantic-ui-react';
import * as Tools from '../utils/Tools';

const formatRepobUrl = url => {
  return url.replace('git://github.com', 'https://github.com');
}

class Variable extends React.Component {
  clipboardId = `clipboardId-${Tools.uuid()}`;
  clipboard = null;

  constructor(props) {
    super(props);
  }

  handlePopOnMount = () => {
    this.clipboard = new ClipboardJS(`#${this.clipboardId}`);
  }

  handlePopUnmount = () => {
    this.clipboard && this.clipboard.destroy();
  }

  render() {
    return (
      <Popup style={{padding: '0'}}
             position='top center'
             trigger={
               <Label circular color={this.props.color} className={this.props.className} style={this.props.style}>
                 {this.props.keyword}
               </Label>}
             onMount={this.handlePopOnMount}
             onUnmount={this.handlePopUnmount}
             hoverable={true}>
        <Button.Group vertical basic style={{border: 0}}>
          <Button compact as='a' href={`#${this.props.keyword}`}>Search</Button>
          <Button compact as='a' href={formatRepobUrl(this.props.repo.repo)} target='_blank'>Repo</Button>
          <Button compact data-clipboard-text={this.props.keyword} id={this.clipboardId}>Copy</Button>
          <Button compact>
            Codes <Label size='mini' circular color={this.props.color}>{this.props.repoLen}</Label>
          </Button>
        </Button.Group>
      </Popup>
    );
  }
}

export default class VariableList extends React.Component {

  lastPageLen = 0;
  animationName = Math.random() > 0.5 ? 'zoomInDown' : 'zoomInUp';

  constructor(props) {
    super(props);
    this.state = {}
  }

  renderPage() {
    let pages = [];
    const pageLen = this.props.variableList.length;
    this.props.variableList.forEach((list, i) => {
      const isLast = i === pageLen - 1 && this.lastPageLen != pageLen;
      const variables = list.map((variable, j) => {
        let style = {}, className = '', duration = (list.length - j) / list.length;
        if (isLast) {
          className = 'animated';
          style = {
            animationName: this.animationName,
            animationDelay: duration + 's',
            animationDuration: duration +  Math.random() + 's'
          };
        }
        return <Variable key={Tools.uuid()} {...variable} {...this.props} style={style} className={className}/>
      });
      if (variables && variables.length) {
        if (pages.length) {
          pages.unshift(<hr/>);
        }
        Array.prototype.unshift.apply(pages, variables)
      }
    });
    this.lastPageLen = pageLen;
    return pages;
  }

  render() {
    return (
      <div className='variable-list'>
        {this.renderPage()}
      </div>
    )
  }
}
