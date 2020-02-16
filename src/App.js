import 'whatwg-fetch';
import ReactDOM from 'react-dom';
import MainContainer from './containers/MainContainer';
// import CopybookContainer from './containers/CopybookContainer';
import NoticeContainer from './containers/NoticeContainer';
import NavBarContainer from './containers/NavBarContainer';

function App() {
  return (
    <>
      <NavBarContainer />
      <MainContainer />
      {/* <CopybookContainer /> */}
      <NoticeContainer />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector('.app'));
