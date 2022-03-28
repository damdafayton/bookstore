import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import FormBox from './Form';

export default function Books() {
  const books = useSelector((state) => state.books);

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
