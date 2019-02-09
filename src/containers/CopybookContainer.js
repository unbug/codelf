import React from 'react';
import AppModel from '../models/AppModel';
import CopybookModel from '../models/CopybookModel';
import Copybook from '../components/Copybook';

export default class CopybookContainer extends React.Component {
  state = {
    copybookRequesting: false,
    copybookVisible: CopybookModel.visible,
    copybookFileList: CopybookModel.fileList,
    copybookSelectedFile: CopybookModel.selectedFile,
    copybookFileContent: CopybookModel.fileContent,
  }

  constructor(props) {
    super(props);
    CopybookModel.onUpdated(this.handleCopybookModelUpdate);
  }

  handleCopybookModelUpdate = (curr, prev, mutation) => {
    if (mutation.fileList) {
      this.setState({
        copybookFileList: CopybookModel.fileList
      });
    }
    if (mutation.fileContent) {
      this.setState({
        copybookRequesting: false,
        copybookSelectedFile: CopybookModel.selectedFile,
        copybookFileContent: CopybookModel.fileContent,
      });
    }
    if (mutation.visible) {
      this.setState({
        copybookVisible: CopybookModel.visible,
      });
      if (CopybookModel.visible) {
        AppModel.analytics('copybook&q=read');
      }
    }
  }

  handleCloseCopybook = () => {
    CopybookModel.update({ visible: false });
  }

  handleRequestCopybookFile = file => {
    this.setState({ copybookRequesting: true });
    CopybookModel.requestRepoFile(file);
    AppModel.analytics('copybook&q=read');
  }

  render() {
    return <Copybook {...this.state}
                className='copybook-container fix-modal'
                onRequestCopybookFile={this.handleRequestCopybookFile}
                onCloseCopybook={this.handleCloseCopybook}/>;
  }
}
