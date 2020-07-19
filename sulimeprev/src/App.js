import React from 'react';
import Site from './site/page/index';
import AreaDaMamae from './area-da-mamae/areaDaMamae';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <Route component={Site} path="/" exact />
        <Route component={AreaDaMamae} path="/areaDaMamae" />
    </div>
  );
}

export default App;
