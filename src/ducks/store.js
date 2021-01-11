import { configureStore } from "@reduxjs/toolkit";
import todos from './todos'
import booklist from './booklist'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  todos, booklist
})

const middleware = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, undefined, middleware);

export default store
