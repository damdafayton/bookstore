import { combineReducers, createStore } from 'redux';

import { v4 as uuidv4 } from 'uuid';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const bookList = [
  {
    type: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanna Collins',
    chapter: 'Chapter 17',
    completed: '64%',
    id: uuidv4(),
  },
];

export const BOOK_CATEGORIES = [
  'Fantasy',
  'Sci-Fi',
  'Mystery',
  'Thriller',
  'Romance',
  'Westerns',
  'Dystopian',
  'Contemporary'];

const rootReducer = combineReducers(
  {
    books: booksReducer,
    categories: categoriesReducer,
  },
);

export default createStore((state, action) => rootReducer(state, action), {
  books: bookList,
  categories: BOOK_CATEGORIES,
});
