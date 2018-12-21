import React from "react";

class CellView extends React.Component {


  handleClick = () => {
    console.log(this.props.value);
    this.props.clickHandler(this.props.value);
  };
  getDisplay = () => {
    this.props.setDisplay(this.props.value)
  }



  render() {

    return (
        <button onClick={(e) => {this.handleClick(e)}}></button>
    );
  }
}

// function CellView(props) {
//   return (
//     <button onClick={this.handleClick}></button>
//   )
// }

export default CellView;
