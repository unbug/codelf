import React from 'react';
import {Popup, Label, Button} from 'semantic-ui-react';
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
              <Label circular color={this.props.color}>
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

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  renderPage() {
    let pages = [];
    this.props.variableList.forEach(list => {
      const variables = list.map((variable, i) => {
        return <Variable key={i} {...variable} {...this.props}/>
      });
      if (variables && variables.length) {
        if (pages.length) {
          pages.unshift(<hr/>);
        }
        Array.prototype.unshift.apply(pages, variables)
      }
    });
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
