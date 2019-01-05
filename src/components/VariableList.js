import React from 'react';
import {Button, Label, Popup} from 'semantic-ui-react';
import * as Tools from '../utils/Tools';

const notFound = val => val && /59ce9297fba93aeb9d693a2f61922fb6|bfd876277827a33f49d363e8857977a0/g.test(Tools.MD5(val));
const notFoundImg = '//user-images.githubusercontent.com/799578/50722775-1a9a1d00-110f-11e9-9bcc-efe5465a4ad5.jpg';

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
    const variable = this.props.variable;
    return (
      <Popup style={{padding: '0'}}
             position='top center'
             trigger={
               <Label circular color={variable.color} className={this.props.className} style={this.props.style}>
                 {variable.keyword}
               </Label>}
             onMount={this.handlePopOnMount}
             onUnmount={this.handlePopUnmount}
             hoverable={true}>
        <Button.Group vertical basic style={{border: 0}}>
          <Button compact as='a' href={`#${variable.keyword}`}>Search</Button>
          <Button compact as='a' href={variable.repoLink} target='_blank'>Repo</Button>
          <Button compact data-clipboard-text={variable.keyword} id={this.clipboardId}>Copy</Button>
          <Button compact onClick={() => this.props.onOpenSourceCode(variable)}>
            [{variable.repoLang}] Codes <Label size='mini' circular color={variable.color}>{variable.repoList.length}</Label>
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
    if (notFound(this.props.searchValue)) {
      pages.push(<img style={{maxWidth: '100%'}} src={notFoundImg}/>);
    }
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
            animationDuration: Math.min(duration, 0.8) +  Math.random() + 's'
          };
        }
        return <Variable key={Tools.uuid()} variable={variable}
                         onOpenSourceCode={this.props.onOpenSourceCode} style={style} className={className}/>
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
