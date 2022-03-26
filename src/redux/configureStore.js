import { combineReducers, createStoreHook } from 'react-redux'
import booksReducer from './books/books'
import categoriesReducer from './categories/categories'

const rootReducer = combineReducers(
  {
    books: booksReducer,
    categories: categoriesReducer
  })

export const store = createStoreHook(rootReducer)