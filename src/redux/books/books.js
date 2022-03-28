import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'books/addbook';
const REMOVE_BOOK = 'books/removebook';
const SELECT_CATEGORY = 'books/select_category';

export const addBook = ({
  title, author, id, category = 'None',
}) => ({
  type: ADD_BOOK, title, author, id, category,
});
export const removeBook = (id) => ({ type: REMOVE_BOOK, id });
export const filterBooks = (category) => ({ type: SELECT_CATEGORY, payload: category });

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        title: action.title,
        id: action.id,
        category: action.category,
        author: action.author,
      }];
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
  {
    title: 'My New Book', author: 'Jake', id, category: 'Fantasy',
  },
];

const newState = [
  {
    title: 'My New Book', author: 'Jake', id, category: 'Fantasy',
  },
  {
    title: 'My Second Book', author: 'Human', id: id2, category: 'None',
  },
];

const filteredState = [
  {
    title: 'My Second Book', author: 'Human', id: id2, category: 'None',
  },
];

export const bookTests = () => {
  test('if new book is being added', () => {
    expect(booksReducer(initialState, addBook({ title: 'My Second Book', author: 'Human', id: id2 })))
      .toEqual(newState);
  });

  test('if book is being removed', () => {
    expect(booksReducer(newState, removeBook(id2))).toEqual(initialState);
  });

  test('to filter books without category', () => {
    expect(booksReducer(newState, filterBooks('None'))).toEqual(filteredState);
  });
};
