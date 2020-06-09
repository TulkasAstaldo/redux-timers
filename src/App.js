import React, { Component } from "react";
import "./App.css";

import NewTimer from "./components/newTimer";
import ListTimers from "./components/listTimers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Learn React
          <NewTimer />
          <ListTimers />
        </header>
      </div>
    );
  }
}
export default App;
