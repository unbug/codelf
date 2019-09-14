import React from 'react';
import { Label } from 'semantic-ui-react';

export default function Suggestion(props) {
  if (!props.suggestion || !props.suggestion.length) { return null; }
  const list = props.suggestion.map((item, i) => {
    return <Label key={i} circular size='mini' color='grey' as='a' href={`#${item}`}>{item}</Label>
  });
  return (
    <div className='suggestion'>
      <Label color='grey' size='mini'>Quick Search:</Label> {list}
    </div>
  )
}
