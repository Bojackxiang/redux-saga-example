import { combineReducers } from "redux";

import counterReducer from "./reducers/counter.reducer";
import userReducer from "./reducers/user.reducer";
import UIReducer from "./reducers/ui.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  ui: UIReducer,
});

export default rootReducer;
