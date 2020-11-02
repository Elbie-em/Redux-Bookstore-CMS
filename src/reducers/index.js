import { combineReducers } from 'redux';
import booksReducer from './book';
import filterReducer from './filter';

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer
});

export default rootReducer;
