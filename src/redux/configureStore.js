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

export const BOOK_CATEGORIES = {
  Fantasy: { status: '50%' },
  'Sci-Fi': { status: '10%' },
  Mystery: { status: '20%' },
  Thriller: { status: '6%' },
  Romance: { status: '60%' },
  Westerns: { status: '80%' },
  Dystopian: { status: '34%' },
  Contemporary: { status: '24%' },
};

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
