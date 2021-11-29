import React, { Fragment } from 'react'

import { GlobalStyle } from './App.styled';
import LandingPage from './LandingPage/LandingPage';

function App() {
  return (
    <Fragment>
      <GlobalStyle />

      <LandingPage />
    </Fragment>


  );
}

export default App;
