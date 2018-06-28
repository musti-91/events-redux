import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import { eventReducer } from "./reducers/eventReducer";

const store = createStore(
  combineReducers({ events: eventReducer }),
  applyMiddleware(createLogger(), thunk, promise())
);
export default store;
