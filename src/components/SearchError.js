import React from 'react';
import { Label } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

export default function SearchError() {
  const { t } = useTranslation();
  
  return (
    <div className='search-error'>
      <div>
        Nothing found, please try <Label color='grey' size='mini'>{t('search.quickSearch')}</Label> or come back later :)
      </div>
      <div>
        {t('search.helpText')}
      </div>
    </div>
  );
}
