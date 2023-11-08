import React from 'react';
import './App.css';
import Hello from './components/hello';
import XOGame from './components/XOGame';

function App() {
  return (
    <div className="App">
      <Hello name = "Ammari Youssef"/>
      <h1>Tic-Tac-Toe</h1>
      <XOGame/>
     
    </div>
  );
}

export default App;
