import React, { Component } from "react";
import { connect } from "react-redux";
import { selectTimer } from "../actions";
import TimerView from "../timerView";

class ListTimers extends Component {
  render() {
    return (
      <div>
        {this.props.timers.map((timer, i) => (
          <TimerView key={i} timer={timer} index={i} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ timers: state.timers });
const mapDispatchToProps = () => ({ selectTimer });

export default connect(mapStateToProps, mapDispatchToProps())(ListTimers);
