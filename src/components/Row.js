import React from 'react';
import Cell from './Cell';

class Row extends React.Component {
  handleClick = (id) => {
    this.props.clickHandler(id)
  }

  render() {
    return (
      this.props.row.map((column, i) => {
        console.log(column, i);
        return (
          <div>{column}</div>
        )})

    )
  }
}
export default Row;

//
// renderCell(j) {
//
//     return (
//       <Cell
//         value={this.state.game.getCellByIndex(i).display}
//         onClick={() => this.handleClick(i)}
//       />
//     );
//   }
//   render(j) {
//     const id = this.props.key
//   }
