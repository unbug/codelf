import React, { useEffect, useReducer } from 'react';
import AppModel from '../models/AppModel';
import CopybookModel from '../models/CopybookModel';
import Copybook from '../components/Copybook';

const actionTypes = {
  UPDATE: 'update',
};

const initState = {
  copybookRequesting: false,
  copybookVisible: CopybookModel.visible,
  copybookFileList: CopybookModel.fileList,
  copybookSelectedFile: CopybookModel.selectedFile,
  copybookFileContent: CopybookModel.fileContent,
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.UPDATE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export default function CopybookContainer(props) {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    CopybookModel.onUpdated(handleCopybookModelUpdate);
    return () => CopybookModel.offUpdated(handleCopybookModelUpdate);
  });

  function setState(payload) {
    dispatch({ type: actionTypes.UPDATE, payload: payload });
  }

  function handleCopybookModelUpdate(curr, prev, mutation) {
    if (mutation.fileList) {
      setState({
        copybookFileList: CopybookModel.fileList
      });
    }
    if (mutation.fileContent) {
      setState({
        copybookRequesting: false,
        copybookSelectedFile: CopybookModel.selectedFile,
        copybookFileContent: CopybookModel.fileContent,
      });
    }
    if (mutation.visible) {
      setState({
        copybookVisible: CopybookModel.visible,
      });
      if (CopybookModel.visible) {
        AppModel.analytics('copybook&q=read');
      }
    }
  }

  function handleCloseCopybook() {
    CopybookModel.update({ visible: false });
  }

  function handleRequestCopybookFile(file) {
    setState({ copybookRequesting: true });
    CopybookModel.requestRepoFile(file);
    AppModel.analytics('copybook&q=read');
  }

  return <Copybook {...state}
    className='copybook-container fix-modal'
    onRequestCopybookFile={handleRequestCopybookFile}
    onCloseCopybook={handleCloseCopybook} />;
}
