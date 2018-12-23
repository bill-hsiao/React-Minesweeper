import React from "react";
import PropTypes from 'prop-types';
import './Cell.css';

function Cell(props) {
  return (
    <button className={props.name} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

Cell.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func
}
export default Cell;
