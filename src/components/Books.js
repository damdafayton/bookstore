import { v4 as uuidv4 } from 'uuid';
import Book from './Book';

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
      <form>
        <h3>ADD NEW BOOK</h3>
        <div className="row">
          <input className="col-sm-6" type="text" placeholder="Book Title" />
          <select className="col-6 col-sm-3">
            <option disabled="disabled" selected="selected">Category</option>
            <option>Action</option>
          </select>
          <button className="col-6 col-sm-3" type="submit">ADD BOOK</button>
        </div>
      </form>
    </>
  );
}
