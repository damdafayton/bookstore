import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import FormBox from './Form';
import * as api from '../api';
import { addBook } from '../redux/books/books';

export default function Books() {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();

  const populateBookStore = () => async (dispatch) => {
    const books = await api.get();
    const keys = Object.keys(books);

    if (keys.length > 0) {
      keys.forEach((id) => {
        const { title, category, author } = books[id][0];
        dispatch(addBook({
          id, title, category, author,
        }));
      });
    }
  };

  useEffect(() => {
    dispatch(populateBookStore());
  }, []);

  return (
    <>
      <ul>
        {books.map((book) => (
          <Book
            type={book.type}
            title={book.title}
            author={book.author}
            chapter={book.chapter}
            completed={book.completed}
            key={uuidv4()}
            id={book.id}
          />
        ))}
      </ul>
      <FormBox />
    </>
  );
}
