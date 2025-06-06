import React from 'react';
import { Label } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

export default function Suggestion(props) {
  const { t } = useTranslation();
  
  if (!props.suggestion || !props.suggestion.length) { return null; }
  const list = props.suggestion.map((item, i) => {
    return <Label key={i} circular size='mini' color='grey' as='a' href={`#${item}`}>{item}</Label>
  });
  return (
    <div className='suggestion'>
      <Label color='grey' size='mini'>{t('search.quickSearch')}:</Label> {list}
    </div>
  )
}
