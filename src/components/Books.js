import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import FormBox from './Form';
import { fetchBooks } from '../redux/configureStore';

export default function Books() {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks);
  }, []);

  return (
    <>
      <ul>
        {books.map((book) => (
          <Book
            category={book.category}
            title={book.title}
            author={book.author}
            chapter={book.chapter}
            completed={book.completed}
            key={uuidv4()}
            id={book.id}
          />
        ))}
      </ul>
      <div className="seperator row d-none d-md-inline" />
      <FormBox />
    </>
  );
}
