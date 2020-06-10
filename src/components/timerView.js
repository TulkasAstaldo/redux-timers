import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleTimer, deleteTimer, reset } from "../actions";
import { formatTime } from "../utils/index";

import "./timerView.css";

class TimerView extends Component {
  render() {
    const { index, toggleTimer, timer, deleteTimer, reset } = this.props;
    return (
      <div className="timer-view">
        <h2>{timer.name}</h2>
        <h1>{formatTime(timer.time)}</h1>
        <button
          className="timer-view-button"
          onClick={(e) => toggleTimer(index)}
        >
          {timer.isRunning ? "Stop" : "Start"}
        </button>
        <button className="timer-view-button" onClick={(e) => reset(index)}>
          Reset
        </button>
        <button
          className="timer-view-button"
          onClick={(e) => deleteTimer(index)}
        >
          Delete
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = () => ({ toggleTimer, deleteTimer, reset });

export default connect(null, mapDispatchToProps())(TimerView);
