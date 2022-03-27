import { combineReducers, createStore } from 'redux';

import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers(
  {
    books: booksReducer,
    categories: categoriesReducer,
  },
);

export default createStore((state, action) => rootReducer(state, action), {
  books: [],
  categories: [],
});
