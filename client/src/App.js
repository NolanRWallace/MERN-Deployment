import React from 'react';
import './App.css';
import {Router} from '@reach/router'
import AllPirates from './Components/AllPirates'
import AddPirate from './Components/AddPirate';
import OnePirate from './Components/OnePirate';

function App() {
  return (
    <div className="App">
      <Router>
        <AllPirates path="/"/>
        <AddPirate path="/new"/>
        <OnePirate path="/pirate/:id"/>
      </Router>
    </div>
  );
}

export default App;
