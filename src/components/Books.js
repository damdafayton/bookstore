import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import FormBox from './Form';

export default function Books() {
  const books = [
    {
      type: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanna Collins',
      chapter: 'Chapter 17',
      completed: '64%',
    },
  ];

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
          />
        ))}
      </ul>
      <FormBox />
    </>
  );
}
