import { combineReducers } from "redux";

import timerReducer from "./timersReducer";
import selectTimerReducer from "./selectTimerReducer";

export default combineReducers({
  timers: timerReducer,
  selectedTimer: selectTimerReducer,
});
