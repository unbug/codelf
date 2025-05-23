import React from 'react';
import MainContainer from './containers/MainContainer.jsx';
import NoticeContainer from './containers/NoticeContainer.jsx';
import NavBarContainer from './containers/NavBarContainer.jsx';

export default function App() {
  return (
    <>
      <NavBarContainer />
      <MainContainer />
      <NoticeContainer />
    </>
  );
}
