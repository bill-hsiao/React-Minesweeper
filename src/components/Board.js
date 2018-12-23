import React from 'react';
import PropTypes from 'prop-types';
import Game from './../logic/Game';
import Cell from './Cell';


class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: new Game(props.width, props.length, props.mineCount)
    }
  }
  reveal(id) {
    this.state.game.reveal(id)
    return {
      game: this.state.game
    }
  }
  handleClick (i) {
    this.setState(this.reveal(i))
  }
  renderRow(j) {
    return (
    this.state.game.cells.map((column, i) => {
      let id = j * this.props.width + i
      const cell = this.state.game.getCellByIndex(id)
      return (
        <span>
        <Cell key={id} name={cell.revealed ? 'myButton revealed' : 'myButton unrevealed'}
          value={cell.display}
          onClick={() => this.handleClick(id)}
          />
        </span>
      )})
    )
  }
  render() {
    return (
      <div className="board-view">
      <div>{this.renderRow(0)}</div>
      <div>{this.renderRow(1)}</div>
      <div>{this.renderRow(2)}</div>
      <div>{this.renderRow(3)}</div>
      <div>{this.renderRow(4)}</div>
      <div>{this.renderRow(5)}</div>
      <div>{this.renderRow(6)}</div>
      <div>{this.renderRow(7)}</div>
      <div>{this.renderRow(8)}</div>
      <div>{this.renderRow(9)}</div>
      </div>
    )
  }
}
Board.propTypes = {
  width: PropTypes.number,
  length: PropTypes.number,
  mineCount: PropTypes.number
}
export default Board;
