import React, { Component } from "react";
import { connect } from "react-redux";

import { addTimer } from "../actions/index";

import "./newTimer.css";

class NewTimer extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  handleChange = (e) => this.setState({ name: e.target.value });
  handleClick = () => {
    this.props.addTimer(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <div className="new-timer">
        <input
          className="new-timer-input"
          type="text"
          placeholder="New Timer Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button className="new-timer-button" onClick={this.handleClick}>
          Save
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = () => ({ addTimer });

export default connect(null, mapDispatchToProps())(NewTimer);
