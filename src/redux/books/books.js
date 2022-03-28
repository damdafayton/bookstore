import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'books/addbook';
const REMOVE_BOOK = 'books/removebook';
const SELECT_CATEGORY = 'books/select_category';

export const BOOK_CATEGORIES = [
  'Fantasy',
  'Sci-Fi',
  'Mystery',
  'Thriller',
  'Romance',
  'Westerns',
  'Dystopian',
  'Contemporary'];

export const addBook = ({ name, id, category = 'None' }) => ({
  type: ADD_BOOK, name, id, category,
});
export const removeBook = (id) => ({ type: REMOVE_BOOK, id });
export const filterBooks = (category) => ({ type: SELECT_CATEGORY, payload: category });

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, { name: action.name, id: action.id, category: action.category }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case SELECT_CATEGORY:
      return state.filter((book) => book.category === action.payload);
    default:
      return state;
  }
}

const id = uuidv4();
const id2 = uuidv4();

const initialState = [
  { name: 'My New Book', id, category: BOOK_CATEGORIES[1] },
];

const newState = [
  { name: 'My New Book', id, category: BOOK_CATEGORIES[1] },
  { name: 'My Second Book', id: id2, category: 'None' },
];

const filteredState = [
  { name: 'My Second Book', id: id2, category: 'None' },
];

export const bookTests = () => {
  test('if new book is being added', () => {
    expect(booksReducer(initialState, addBook({ name: 'My Second Book', id: id2 })))
      .toEqual(newState);
  });

  test('if book is being removed', () => {
    expect(booksReducer(newState, removeBook(id2))).toEqual(initialState);
  });

  test('to filter books without category', () => {
    expect(booksReducer(newState, filterBooks('None'))).toEqual(filteredState);
  });
};
