import 'whatwg-fetch';
import ReactDOM from 'react-dom';
import MainContainer from './containers/MainContainer';
// import CopybookContainer from './containers/CopybookContainer';
import NoticeContainer from './containers/NoticeContainer';
import NavBarContainer from './containers/NavBarContainer';
import { ThemeProvider } from './hooks/useTheme';

function App() {
  return (
    <ThemeProvider>
      <NavBarContainer />
      <MainContainer />
      {/* <CopybookContainer /> */}
      <NoticeContainer />
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('.app'));
