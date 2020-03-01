import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers";

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk, logger];

const store = createStore(
  reducers,
  composeEnhacers(applyMiddleware(...middlewares))
);

export default store;
