import React from 'react';
import { Container, Icon } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitch from '../components/LanguageSwitch';
// import CopybookModel from '../models/CopybookModel';

export default function NavBarContainer() {
  const { t } = useTranslation();

  return (
    <Container className='nav-bar-container'>
      <div className='bd'>
        {/* <Popup
          hoverable={true}
          trigger={
            <div className='copybook-btn animated fadeInDown' onClick={handleOpenCopybook}>
              <Icon name='clipboard' />
            </div>
          }>
          <Icon name='thumbs up outline' /> Daily algorithm copybook, learn algorithm easily!
        </Popup> 
        <Popup
          hoverable={true}
          trigger={
            <div className='bookmark-btn animated fadeInDown'>
              <Icon name='bookmark' />
            </div>
          }>
          Sorry, GitHub stars organize tool currently is not available, <a href="https://github.com/unbug/codelf/projects/2" target='_blank' rel='noopener noreferrer'>new version</a> is coming soon :)
        </Popup>
        */}
        <LanguageSwitch />
        <a href='https://unbug.github.io' className='bookmark-btn animated fadeInDown'
          title={t('navbar.bookmark')}
          target='_blank' rel='noopener noreferrer'>
          <Icon name='bookmark' />
        </a>
        <a href='https://github.com/unbug/codelf' className='github-corner animated fadeInDown'
          title={t('navbar.starMe')}
          target='_blank' rel='noopener noreferrer'>
          <Icon name='github square' />
        </a>
      </div>
    </Container>
  )
}
