import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

const languages = [
  { key: 'en', text: 'English', value: 'en', flag: 'us' },
  { key: 'zh', text: '中文', value: 'zh', flag: 'cn' },
  { key: 'de', text: 'Deutsch', value: 'de', flag: 'de' },
  { key: 'fr', text: 'Français', value: 'fr', flag: 'fr' }
];

export default function LanguageSwitch() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e, { value }) => {
    i18n.changeLanguage(value);
  };

  const currentLanguage = languages.find(lang => lang.value === i18n.language) || languages[0];

  return (
    <Dropdown
      trigger={
        <span className="language-switch">
          <Icon name="world" />
          {currentLanguage.text}
        </span>
      }
      options={languages}
      pointing="top right"
      icon={null}
      value={i18n.language}
      onChange={handleLanguageChange}
      selectOnBlur={false}
    />
  );
}