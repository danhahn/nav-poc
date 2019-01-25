import { createStore, combineReducers } from "redux";
import navigation from "./reducers";

const rootReducer = combineReducers({
  navigation
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
