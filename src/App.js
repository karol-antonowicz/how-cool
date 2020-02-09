import React from 'react';
import './App.scss';
import {HeaderNav} from './components/HeaderNav/HeaderNav';
import {Main} from './components/Main/Main';
import {Footer} from './components/Footer/Footer';

function App() {
  return (
<React.Fragment>
  <HeaderNav/>
  <Main/>
  <Footer/>
</React.Fragment>
  );
}

export default App;
