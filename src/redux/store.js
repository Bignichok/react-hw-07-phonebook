import { createStore, combineReducers } from "redux";
import phoneBookReducers from "./phoneBookReducer";

const rootReducer = combineReducers({
  phoneBook: phoneBookReducers,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
