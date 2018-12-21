import React from 'react';
import Game from './../logic/Game';
import Cell from './Cell';

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: new Game(10, 10, 10)
    }
  }
  reveal(id) {
    const cell = this.state.game.reveal(id)
    return {
      game: this.state.game
    }
  }
  handleClick (i) {
    this.setState(this.reveal(i))
  }
  renderCell(i) {
      return (
        <Cell
          value={this.state.game.getCellByIndex(i).display}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  render() {
    return (
      <div className="board-view">
      <div>{this.renderCell(0)}{this.renderCell(1)}{this.renderCell(2)}{this.renderCell(3)}{this.renderCell(4)}{this.renderCell(5)}{this.renderCell(6)}{this.renderCell(7)}{this.renderCell(8)}{this.renderCell(9)}</div>
      <div>{this.renderCell(10)}{this.renderCell(11)}{this.renderCell(12)}{this.renderCell(13)}{this.renderCell(14)}{this.renderCell(15)}{this.renderCell(16)}{this.renderCell(17)}{this.renderCell(18)}{this.renderCell(19)}</div>
      <div>{this.renderCell(20)}{this.renderCell(21)}{this.renderCell(22)}{this.renderCell(23)}{this.renderCell(24)}{this.renderCell(25)}{this.renderCell(26)}{this.renderCell(27)}{this.renderCell(28)}{this.renderCell(29)}</div>
      <div>{this.renderCell(30)}{this.renderCell(31)}{this.renderCell(32)}{this.renderCell(33)}{this.renderCell(34)}{this.renderCell(35)}{this.renderCell(36)}{this.renderCell(37)}{this.renderCell(38)}{this.renderCell(39)}</div>
      <div>{this.renderCell(40)}{this.renderCell(41)}{this.renderCell(42)}{this.renderCell(43)}{this.renderCell(44)}{this.renderCell(45)}{this.renderCell(46)}{this.renderCell(47)}{this.renderCell(48)}{this.renderCell(49)}</div>
      <div>{this.renderCell(50)}{this.renderCell(51)}{this.renderCell(52)}{this.renderCell(53)}{this.renderCell(54)}{this.renderCell(55)}{this.renderCell(56)}{this.renderCell(57)}{this.renderCell(58)}{this.renderCell(59)}</div>
      <div>{this.renderCell(60)}{this.renderCell(61)}{this.renderCell(62)}{this.renderCell(63)}{this.renderCell(64)}{this.renderCell(65)}{this.renderCell(66)}{this.renderCell(67)}{this.renderCell(68)}{this.renderCell(69)}</div>
      <div>{this.renderCell(70)}{this.renderCell(71)}{this.renderCell(72)}{this.renderCell(73)}{this.renderCell(74)}{this.renderCell(75)}{this.renderCell(76)}{this.renderCell(77)}{this.renderCell(78)}{this.renderCell(79)}</div>
      <div>{this.renderCell(80)}{this.renderCell(81)}{this.renderCell(82)}{this.renderCell(83)}{this.renderCell(84)}{this.renderCell(85)}{this.renderCell(86)}{this.renderCell(87)}{this.renderCell(88)}{this.renderCell(89)}</div>
      <div>{this.renderCell(90)}{this.renderCell(91)}{this.renderCell(92)}{this.renderCell(93)}{this.renderCell(94)}{this.renderCell(95)}{this.renderCell(96)}{this.renderCell(97)}{this.renderCell(98)}{this.renderCell(99)}</div>

      </div>
    )
  }
}
export default Board;
