import React from 'react';
import CellView from './CellView';

class BoardView extends React.Component {

  // handleClick = buttonName => {
  //   this.setState(reveal(buttonName));
  // };
  // flatten = () => {
  //
  //   this.props.gameState()
  // }
  handleClick = cellId => {
    this.props.clickHandler(cellId)
  }
  // getState = () => {
  //   console.log(this.props.gameState)
  // }
  // getDisplay = id => {
  //   this.props.setDisplay(id)
  // }
  // renderButton(id) {
  //   return (
  //     <CellView key
  //     onClick={} >
  //     >
  //   )
  // }
  // renderCellView(i) {
  //   return (
  //     <CellView
  //       value={this.state.squares[i]}
  //       onClick={() => this.handleClick(i)}
  //     />
  //   );
  // }
  setDisplay = (id) => {
    this.props.game.getCellByIndex.bind(this.props.game)
    let cell = this.props.game.getCellByColRow(id)
    return cell.display

  }
  getDisplay = (r, w) => {
    this.props.game.getCellByColRow.bind(this.props.game)
    let cell = this.props.game.getCellByColRow(r, w)
    return cell.display
  }
  updateValue = id => {
    this.props.updateMethod(id)
  }
  // renderCellView(i) {
  //
  //     return (
  //       <CellView
  //         value={this.props.game.game.getCellByIndex(i).display}
  //         onClick={() => this.handleClick(i)}
  //       />
  //     );
  //   }
    renderRow(j) {
      let id = parseInt(`${j}${0}`)
      let row = [];
      for (let i = 0; i < 10; i++) {
        // let temp = this.renderCellView(id)
        let temp = (
          <CellView
            value={this.props.game.game.getCellByIndex(id).display}
            onClick={() => this.handleClick(id)}
          />
        )
        row.push(temp)
        id ++;
        return row
    }
  }

  render() {
    // let rows = [];
    // let id = 0;
    // for (let j = 0; j < 10; j++) {
    //   rows[j] = [];

      //  rows[j].push(<CellView key={`${j}${i}`} clickHandler={this.handleClick} value={this.getDisplay(j, i)} updateMethod={this.updateValue}  />);
    // }/
    // }
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
export default BoardView;
