import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleTimer, deleteTimer, reset } from "./actions";
import { formatTime } from "./utils/index";

class TimerView extends Component {
  render() {
    const { index, toggleTimer, timer, deleteTimer, reset } = this.props;
    return (
      <div>
        <h2>{timer.name}</h2>
        <h1>{formatTime(timer.time)}</h1>
        <button onClick={(e) => toggleTimer(index)}>
          {timer.isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={(e) => reset(index)}>Reset</button>
        <button onClick={(e) => deleteTimer(index)}>Delete</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = () => ({ toggleTimer, deleteTimer, reset });

export default connect(mapStateToProps, mapDispatchToProps())(TimerView);
