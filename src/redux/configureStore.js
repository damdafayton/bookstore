import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { v4 as uuidv4 } from 'uuid';
import booksReducer, { addBook, removeBook } from './books/books';
import categoriesReducer from './categories/categories';

import * as api from '../api';

const rootReducer = combineReducers(
  {
    books: booksReducer,
    categories: categoriesReducer,
  },
);

export default createStore(rootReducer, applyMiddleware(thunk));

export const fetchBooks = async (dispatch, getState) => {
  const books = await api.get();
  const keys = Object.keys(books);
  const booksInStore = getState().books;

  if (keys.length > booksInStore.length) { // Check to not re-populate
    keys.forEach((id) => {
      const { title, category, author } = books[id][0];
      dispatch(addBook({
        id, title, category, author,
      }));
    });
  }
};

export const asyncBookRemove = (event) => async (dispatch) => {
  const { id } = event.target;
  console.log('id = ', id);
  await api.deleter(id);
  dispatch(removeBook(id));
};

export const asyncBookAdd = ({ title, author, category }) => async (dispatch) => {
  const id = uuidv4();
  await api.post({
    title, author, id, category,
  });
  dispatch(addBook({
    title, author, id, category,
  }));
};
