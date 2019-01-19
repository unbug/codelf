import React from 'react';
import {Modal, Button, Dropdown, Label} from 'semantic-ui-react';
import * as Tools from '../utils/Tools';
import Loading from "./Loading";

export default class Bookmark extends React.Component {
  code = React.createRef();
  mark = null;
  visible = false;
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!this.visiable) {
      this.visible = true;
    }
  }

  componentDidMount() {
  }

  handleClose = () => {
    this.visiable = false;
    this.props.onCloseBookmark();
  }


  renderDropdownItem() {
    if (!this.props.sourceCodeVariable) { return null; }
    return this.props.sourceCodeVariable.repoList.map(repo => {
      return (
        <Dropdown.Item key={Tools.uuid()}>
          <Button size='mini' onClick={() => this.props.onRequestSourceCode(repo)}>Codes</Button>
          <Button size='mini' as='a' href={repo.repo} target='_blank'>Repo</Button>
          <Label size='mini' circular color={Tools.randomLabelColor()}>{repo.language}</Label>
        </Dropdown.Item>
      )
    });
  }

  render() {
    const dropText = (
      <div>All Codes <Label size='mini' circular>
      </Label></div>
    );
    return (
      <Modal open={this.props.sourceCodeVisible} onClose={this.handleClose}
             centered={false} closeIcon className='source-code fix-modal' size='large'>
        <Modal.Header>
          <Dropdown floating labeled button blurring className='mini icon' style={{padding: '0.35rem 0'}}
                    text={dropText}>
            <Dropdown.Menu>
              <Dropdown.Menu scrolling className='fix-dropdown-menu'>
                {this.renderDropdownItem()}
              </Dropdown.Menu>
            </Dropdown.Menu>
          </Dropdown>
          <Button size='mini' as='a' href={this.props.sourceCodeRepo.repo} target='_blank'>Repo</Button>
        </Modal.Header>
        <Modal.Content>
          {this.props.requestingSourceCode ? <Loading/> : ''}
          <pre><code className='prettyprint linenums' ref={this.code}>{this.props.sourceCode}</code></pre>
        </Modal.Content>
      </Modal>
    )
  }
}
