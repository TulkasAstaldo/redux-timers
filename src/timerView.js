import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleTimer } from "./actions";

class TimerView extends Component {
  render() {
    const { index, toggleTimer, timer } = this.props;
    return (
      <div>
        <h2>{timer.name}</h2>
        <h1>{timer.time}</h1>
        <button onClick={(e) => toggleTimer(index)}>
          {timer.isRunning ? "Stop" : "Start"}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = () => ({ toggleTimer });

export default connect(mapStateToProps, mapDispatchToProps())(TimerView);
