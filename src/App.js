import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
// import Game from './logic/Board';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Board width={10} length={10} mineCount={10}/>
      </div>
    );
  }
}

export default App;
