import React, { Component } from "react";
import "./App.css";

import NewTimer from "./components/newTimer";
import ListTimers from "./components/listTimers";
import { store } from "./store";
import { update } from "./actions/index";

let lastUpdateTime = Date.now();
setInterval(() => {
  const now = Date.now();
  const deltaTime = now - lastUpdateTime;
  lastUpdateTime = now;
  store.dispatch(update(deltaTime));
}, 50);

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
