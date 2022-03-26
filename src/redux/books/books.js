import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'books/addbook'
const REMOVE_BOOK = 'books/removebook'

export const addBook = name => ({ type: ADD_BOOK, name, id })
export const removeBook = id => ({ type: REMOVE_BOOK, id })

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      var { name, id } = action
      return [...state, { name, id }]
    case REMOVE_BOOK:
      var { id } = action
      return state.filter(book => book.id !== id)
    default:
      return state
  }
}

const prevState = []
const id = uuidv4()
const newState = [{ name: 'My New Book', id }]
const stateAfterRemoval = []

test('if new book is being added', () => {
  expect(booksReducer(prevState, addBook('My New Book'))).toEqual(newState)
})

test('if book is being removed', () => {
  expect(booksReducer(prevState, removeBook(id))).toEqual(stateAfterRemoval)
})