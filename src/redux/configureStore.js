import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers(
  {
    books: booksReducer,
    categories: categoriesReducer,
  },
);

export default createStore(rootReducer, applyMiddleware(thunk));
