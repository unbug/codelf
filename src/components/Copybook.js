import {useEffect, useRef} from 'react';
import {Button, Dropdown, Modal} from 'semantic-ui-react';
import Loading from "./Loading";

export default function Copybook(props) {
  const codeEl = useRef(null);
  const editorEl = useRef(null);

  useEffect(() => {
    renderPrettyPrint();
  }, [props.copybookFileContent, props.copybookVisible]);

  function handleClose() {
    props.onCloseCopybook();
  }

  function handleDropdownChange(e, { searchQuery, value }) {
    if (value != props.copybookSelectedFile.path) {
      props.onRequestCopybookFile(
        props.copybookFileList.find(f => f.path === value)
      );
    }
  }

  function renderPrettyPrint() {
    setTimeout(() => {
      if (editorEl.current) {
        editorEl.current.innerHTML = '';
      }
      if (codeEl.current) {
        codeEl.current.classList.remove('prettyprinted');
        setTimeout(() => PR.prettyPrint(), 100);
      }
    }, codeEl.current ? 0 : 1000);
  }

  function renderDropdownItem() {
    if (!props.copybookFileList) {
      return null;
    }
    return props.copybookFileList.map((file, idx) => {
      return {
        key: file.path,
        value: file.path,
        text: (idx + 1) + '. ' + file.path
      }
    });
  }

  if (!props.copybookVisible || !props.copybookFileList || !props.copybookFileContent) {
    return (
      <Modal open={props.copybookVisible} onClose={handleClose}
             centered={false} closeIcon className={props.className} size='large'>
        <Modal.Header>
          <div className='title'>Daily Algorithm Copybook</div>
        </Modal.Header>
        <Modal.Content>
          <Loading/>
          <pre><code className='prettyprint' ref={codeEl}></code></pre>
        </Modal.Content>
      </Modal>
    );
  }

  return (
    <Modal open={props.copybookVisible} onClose={handleClose}
           centered={false} closeIcon className={props.className} size='large'>
      <Modal.Header>
        <div className='title'>Daily Algorithm Copybook</div>
        <Button size='tiny' as='a' basic
                href={props.copybookSelectedFile.link}
                target='_blank'>View In GitHub</Button>
        <Dropdown
          search
          selection
          onChange={handleDropdownChange}
          value={props.copybookSelectedFile.path}
          options={renderDropdownItem()}/>
      </Modal.Header>
      <Modal.Content>
        {props.copybookRequesting ? <Loading/> : ''}
        <pre>
          <code className='prettyprint' ref={codeEl}>{props.copybookFileContent.content}</code>
          <div className='editor' contentEditable={true} ref={editorEl}></div>
        </pre>
      </Modal.Content>
    </Modal>
  )
}
