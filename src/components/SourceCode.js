import React, {useEffect} from 'react';
import {Modal, Button, Dropdown, Label} from 'semantic-ui-react';
import * as Tools from '../utils/Tools';
import Loading from "./Loading";

export default function SourceCode(props) {
  const codeEl = React.createRef();
  let mark = null;

  useEffect(() => {
    renderPrettyPrint();
  }, [props.sourceCode, props.sourceCodeVisible]);

  function handleClose() {
    props.onCloseSourceCode();
  }

  function renderPrettyPrint() {
    setTimeout(() => {
      if (codeEl.current) {
        codeEl.current.classList.remove('prettyprinted');
        setTimeout(() => PR.prettyPrint(
          () => setTimeout(() =>renderHighLight(), 1000)
        ), 100);
      }
    }, codeEl.current ? 0 : 1000);
  }

  function renderHighLight() {
    if (mark) {mark.unmark()}
    mark = new Mark(codeEl.current);
    let idx = 0;
    mark.mark(props.sourceCodeVariable.keyword, {each: el => {
        el.setAttribute('tabindex',idx++);
      }});
  }

  if (!props.sourceCodeVariable || !props.sourceCodeRepo) { return null; }
  const sourceCodeVariable = props.sourceCodeVariable;
  const dropText = (
    <div>All Codes <Label size='mini' circular color={sourceCodeVariable.color}>
      {sourceCodeVariable.repoList.length}
    </Label></div>
  );
  const dropdownItems = props.sourceCodeVariable && props.sourceCodeVariable.repoList.map(repo => {
    return (
      <Dropdown.Item key={Tools.uuid()}>
        <Button size='mini' onClick={() => props.onRequestSourceCode(repo)}>Codes</Button>
        <Button size='mini' as='a' href={repo.repo} target='_blank'>Repo</Button>
        <Label size='mini' circular color={Tools.randomLabelColor()}>{repo.language}</Label>
      </Dropdown.Item>
    )
  });
  return (
    <Modal open={props.sourceCodeVisible} onClose={handleClose}
           centered={false} closeIcon className='source-code fix-modal' size='large'>
      <Modal.Header>
        <Dropdown floating labeled button blurring className='mini icon' style={{padding: '0.35rem 0'}}
                  text={dropText}>
          <Dropdown.Menu>
            <Dropdown.Menu scrolling className='fix-dropdown-menu'>
              {dropdownItems}
            </Dropdown.Menu>
          </Dropdown.Menu>
        </Dropdown>
        <Button size='mini' as='a' href={props.sourceCodeRepo.repo} target='_blank'>Repo</Button>
      </Modal.Header>
      <Modal.Content>
        {props.sourceCodeRequesting ? <Loading/> : ''}
        <pre><code className='prettyprint linenums' ref={codeEl}>{props.sourceCode}</code></pre>
      </Modal.Content>
    </Modal>
  )
}
