import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoardView from './components/BoardView';
import Board from './logic/Board';

class App extends Component {
  constructor() {
    super()
    this.state = {
      game: new Board(10, 10, 10),
      justRevealed: null,
      cellContents: null
    }
  }

  reveal(id) {
    // console.log(this.state.game.reveal);
    const cell = this.state.game.reveal(id)
    // console.log(cell);
    const game = this.state.game;
    return {
      game: this.state.game,
      justRevealed: id,
      cellContents: cell.display
    }
  }
  

  setDisplay = (id) => {
      this.state.game.getCellByIndex.bind(this.state.game)
      let cell = this.state.game.getCellByColRow(id)
      return {
        game: this.state.game,
        justRevealed: id,
        cellContents: cell.display
        }

    }
  handleClick = id => {
    this.setState(this.reveal(id))
    // this.getDisplay(id)
  }

  render() {
    return (
      <div className="App">
        <BoardView clickHandler={this.handleClick} updateMethod={this.setDisplay} game={this.state} />
      </div>
    );
  }
}

export default App;
