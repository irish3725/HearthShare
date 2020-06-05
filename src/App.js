import React from 'react';

import Header from './components/Header';
import Firepad from './components/Firepad';
import Terminal from './components/Terminal';

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='hearthshare-page'>
        <Firepad />
        <Terminal />
      </div>
    </div>
  );
}

export default App;
