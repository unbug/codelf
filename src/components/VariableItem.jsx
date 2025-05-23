import React from 'react';
import { Button, Label, Popup } from 'semantic-ui-react';
import * as Tools from '../utils/Tools';

export default function VariableItem(props) {
  const clipboardId = `clipboardId-${Tools.uuid()}`;
  const variable = props.variable;
  let clipboard = null;

  function handlePopOnMount() {
    clipboard = new ClipboardJS(`#${clipboardId}`);
  }

  function handlePopUnmount() {
    clipboard && clipboard.destroy();
  }

  return (
    <Popup style={{ padding: '0' }}
      position='top center'
      trigger={
        <Label circular color={variable.color} className={props.className} style={props.style}>
          {variable.keyword}
        </Label>}
      onMount={handlePopOnMount}
      onUnmount={handlePopUnmount}
      hoverable={true}>
      <Button.Group vertical basic style={{ border: 0 }}>
        <Button compact as='a' href={`#${variable.keyword}`}>Search</Button>
        <Button compact as='a' href={variable.repoLink} target='_blank'>Repo</Button>
        <Button compact data-clipboard-text={variable.keyword} id={clipboardId}>Copy</Button>
        <Button compact onClick={() => props.onOpenSourceCode(variable)}>
          [{variable.repoLang}] Codes <Label size='mini' circular color={variable.color}>{variable.repoList.length}</Label>
        </Button>
      </Button.Group>
    </Popup>
  );
}
