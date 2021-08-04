import { configureStore } from "@reduxjs/toolkit";
import booklist from "./booklist";
import cart from "./cart";
import checkout from "./checkout";
import number from "./number";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  booklist,
  cart,
  checkout,
  number,
});

const middleware = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, undefined, middleware);

export default store;
