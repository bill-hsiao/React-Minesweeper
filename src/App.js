import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoardView from './components/BoardView';
import Board from './logic/Board';

class App extends Component {
  constructor() {
    super()
    this.state = {
      game: new Board(10, 10, 10)
    }
  }
  reveal(id) {
    this.state.game.reveal.bind(this.state.game)
    this.state.game.reveal(id)
  }
  getDisplay = id => {
    let cell = this.state.game.getCellByIndex(id)
    // let state = {
    //   value: cell.display
    // }
    // console.log(state);
    // return state
    console.log(cell);
    this.reveal(id);
    console.log(cell.display);
  }
  handleClick = id => {
    this.setState(this.reveal(id))
    this.getDisplay(id)
  }

  render() {
    return (
      <div className="App">
        <BoardView clickHandler={this.handleClick} setDisplay={this.getDisplay} />
      </div>
    );
  }
}

export default App;
