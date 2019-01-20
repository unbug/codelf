import React from 'react';
import {Button, Dropdown, Modal} from 'semantic-ui-react';
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

  handleDropdownChange = (e, { searchQuery, value }) => {
    if (value != this.props.copybookSelectedFile.path) {
      this.props.onRequestCopybookFile(
        this.props.copybookFileList.find(f => f.path === value)
      );
    }
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
    if (!this.props.copybookFileList) {
      return null;
    }
    return this.props.copybookFileList.map((file, idx) => {
      return {
        key: file.path,
        value: file.path,
        text: (idx + 1) + '. ' + file.path
      }
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
            <div className='copybook__title'>Daily Algorithm Copybook</div>
          </Modal.Header>
          <Modal.Content>
            <Loading/>
            <pre><code className='prettyprint' ref={this.code}></code></pre>
          </Modal.Content>
        </Modal>
      );
    }
    const copybookSelectedFile = this.props.copybookSelectedFile;
    return (
      <Modal open={this.props.copybookVisible} onClose={this.handleClose}
             centered={false} closeIcon className='copybook fix-modal' size='large'>
        <Modal.Header>
          <div className='copybook__title'>Daily Algorithm Copybook</div>
          <Button size='tiny' as='a' basic
                  href={this.props.copybookSelectedFile.link}
                  target='_blank'>View In GitHub</Button>
          <Dropdown
            search
            selection
            onChange={this.handleDropdownChange}
            value={copybookSelectedFile.path}
            options={this.renderDropdownItem()}/>
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
