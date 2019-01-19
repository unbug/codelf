import React from 'react';
import {Modal, Button, Dropdown, Label} from 'semantic-ui-react';
import * as Tools from '../utils/Tools';
import Loading from "./Loading";

export default class Copybook extends React.Component {
  code = React.createRef();
  editor = React.createRef();
  visible = false;
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.copybookFileContent != this.props.copybookFileContent
      || (!this.visiable && this.props.copybookVisible)) {
      this.renderPrettyPrint();
      this.visible = true;
    }
  }

  componentDidMount() {
    this.renderPrettyPrint();
  }

  handleClose = () => {
    this.visiable = false;
    this.props.onCloseCopybook();
  }

  renderPrettyPrint = () => {
    setTimeout(() => {
      if (this.editor.current) {
        this.editor.current.innerHTML = '';
      }
      if (this.code.current) {
        this.code.current.classList.remove('prettyprinted');
        setTimeout(() => PR.prettyPrint(), 100);
      }
    }, this.code.current ? 0 : 1000);
  }

  renderDropdownItem() {
    if (!this.props.copybookFileList) { return null; }
    return this.props.copybookFileList.map(file => {
      return (
        <Dropdown.Item key={Tools.uuid()} selected={this.props.copybookSelectedFile.url === file.url}
                       onClick={() => this.props.onRequestCopybookFile(file)}>
          {file.path.substr(4, file.path.length)}
        </Dropdown.Item>
      )
    });
  }

  render() {
    if (!this.props.copybookVisible
      || !this.props.copybookFileList
      || !this.props.copybookFileContent) {
      return (
        <Modal open={this.props.copybookVisible} onClose={this.handleClose}
               centered={false} closeIcon className='copybook fix-modal' size='large'>
          <Modal.Header>
            <div className='copybook__title'>Daily Algorithm</div>
          </Modal.Header>
          <Modal.Content>
            <Loading/>
            <pre><code className='prettyprint' ref={this.code}></code></pre>
          </Modal.Content>
        </Modal>
      );
    }
    const copybookFileList = this.props.copybookFileList;
    const copybookSelectedFile = this.props.copybookSelectedFile;
    const dropText = (
      <div>Algorithms <Label size='mini' circular>{copybookFileList.length}</Label></div>
    );
    return (
      <Modal open={this.props.copybookVisible} onClose={this.handleClose}
             centered={false} closeIcon className='copybook fix-modal' size='large'>
        <Modal.Header>
          <Dropdown floating labeled button blurring className='mini icon' style={{padding: '0.35rem 0'}}
                    text={dropText}>
            <Dropdown.Menu>
              <Dropdown.Menu scrolling className='fix-dropdown-menu'>
                {this.renderDropdownItem()}
              </Dropdown.Menu>
            </Dropdown.Menu>
          </Dropdown>
          <Button size='mini' as='a' href={this.props.copybookSelectedFile.link} target='_blank'>View In GitHub</Button>
          <div className='copybook__title'>
            Daily Algorithm: {copybookSelectedFile.path.substr(4, copybookSelectedFile.path.length)}
          </div>
        </Modal.Header>
        <Modal.Content>
          {this.props.requestingCopybook ? <Loading/> : ''}
          <pre>
            <code className='prettyprint' ref={this.code}>{this.props.copybookFileContent.content}</code>
            <div className='copybook__editor' contentEditable={true} ref={this.editor}></div>
          </pre>
        </Modal.Content>
      </Modal>
    )
  }
}
