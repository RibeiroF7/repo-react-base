// src/modules/rootReducer.js
import { combineReducers } from 'redux';
import exampleReducer from './example/slice';

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
