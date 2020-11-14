import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import phoneBookReducers from "./phoneBookReducer";

const rootReducer = combineReducers({
  phoneBook: phoneBookReducers,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
