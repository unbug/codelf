import {Icon, Popup} from 'semantic-ui-react';

export default function NavBar (props) {
  return (
    <div className='nav-bar'>
      <Popup
        hoverable={true}
        trigger={
          <div className='copybook-btn animated fadeInDown' onClick={props.onOpenCopybook}>
            <Icon name='clipboard'/>
          </div>
        }>
        <Icon name='thumbs up outline'/> Daily algorithm copybook, learn algorithm easily!
      </Popup>
      <Popup
        hoverable={true}
        trigger={
          <div className='bookmark-btn animated fadeInDown'>
            <Icon name='bookmark'/>
          </div>
        }>
        Sorry, GitHub stars organize tool currently is not available, <a href="https://github.com/unbug/codelf/projects/2" target='_blank' rel='noopener noreferrer'>new version</a> is coming soon :)
      </Popup>
      <a href='https://github.com/unbug/codelf' className='github-corner animated fadeInDown'
         title='Star me on GitHub'
         target='_blank' rel='noopener noreferrer'>
        <Icon name='github square'/>
      </a>
    </div>
  )
}
