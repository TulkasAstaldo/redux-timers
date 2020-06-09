import React, { Component } from "react";
import { connect } from "react-redux";

import { addTimer } from "../actions/index";

class NewTimer extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  handleChange = (e) => this.setState({ name: e.target.value });
  handleClick = (e) => this.props.addTimer(this.state.name);

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="New Timer Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Save</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = () => ({ addTimer });

export default connect(mapStateToProps, mapDispatchToProps())(NewTimer);
