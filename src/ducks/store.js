import { configureStore } from "@reduxjs/toolkit";
import todos from './Todos'
import booklist from './booklist'
import cart from './Cart'
import checkout from './Checkout'
import number from './Number'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  todos, booklist, cart, checkout, number
})

const middleware = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, undefined, middleware);

export default store
