import React from 'react';
import { connect } from 'react-redux';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

// className will be controlled by props
// B will also be controlled by state


const Wheel = (props) => {
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={props.position === 0 ? 'cog active' : 'cog'} style={{ "--i": 0 }}>{props.position === 0 ? 'B' : null}</div>
        <div className={props.position === 1 ? 'cog active' : 'cog'} style={{ "--i": 1 }}>{props.position === 1 ? 'B' : null}</div>
        <div className={props.position === 2 ? 'cog active' : 'cog'} style={{ "--i": 2 }}>{props.position === 2 ? 'B' : null}</div>
        <div className={props.position === 3 ? 'cog active' : 'cog'} style={{ "--i": 3 }}>{props.position === 3 ? 'B' : null}</div>
        <div className={props.position === 4 ? 'cog active' : 'cog'} style={{ "--i": 4 }}>{props.position === 4 ? 'B' : null}</div>
        <div className={props.position === 5 ? 'cog active' : 'cog'} style={{ "--i": 5 }}>{props.position === 5 ? 'B' : null}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={() => props.moveCounterClockwise(props.position)}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={() => props.moveClockwise(props.position)}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    position: state.wheel.position
  }
};


export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise })(Wheel);