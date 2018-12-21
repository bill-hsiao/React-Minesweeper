import React from 'react';
import CellView from './CellView';

class BoardView extends React.Component {

  // handleClick = buttonName => {
  //   this.setState(reveal(buttonName));
  // };
  handleClick = cellId => {
    this.props.clickHandler(cellId)
  }
  getDisplay = id => {
    this.props.setDisplay(id)
  }


  render() {
    let rows = [];
    for (let j = 0; j < 10; j++) {
      rows[j] = [];
      for (let i = 0; i < 10; i++) {
        rows[j].push(<CellView key={`${j}${i}`} setDisplay={this.getDisplay} clickHandler={this.handleClick} value={`${j}${i}`}  />);
      }
    }
    return (
      <div className="board-view">
      <div>{rows[0]}</div>
      <div>{rows[1]}</div>
      <div>{rows[2]}</div>
      <div>{rows[3]}</div>
      <div>{rows[4]}</div>
      <div>{rows[5]}</div>
      <div>{rows[6]}</div>
      <div>{rows[7]}</div>
      <div>{rows[8]}</div>
      <div>{rows[9]}</div>

      </div>
    )
}
}
export default BoardView;
