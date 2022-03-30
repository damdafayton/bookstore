import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { asyncBookAdd } from '../redux/configureStore';
import styles from './Form.module.scss';

import { BOOK_CATEGORIES } from '../redux/categories/categories';

export default function FormBox() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  function keyUpHandler(event) {
    switch (event.target.name) {
      case 'title':
        setTitle(event.target.value);
        break;
      case 'author':
        setAuthor(event.target.value);
        break;
      case 'category':
        setCategory(event.target.value);
        break;
      default:
        return 0;
    }
    return 0;
  }

  function formSubmit(e) {
    e.preventDefault();
    dispatch(asyncBookAdd({ title, author, category }));
    setTitle('');
    setCategory('');
  }

  return (
    <form className="my-4 row" onSubmit={formSubmit}>
      <div className="px-0">
        <h3 className={styles.title}>ADD NEW BOOK</h3>
      </div>
      <div className="px-0">
        <div className="row g-1 mt-3 gx-3">
          <div className="col-12 col-sm-6 col-md-6 d-inline-flex">
            <input
              name="title"
              onChange={(e) => keyUpHandler(e)}
              className={styles.control}
              type="text"
              placeholder="Book Title"
              value={title}
              required
            />
          </div>
          {/* <input name="author" onChange={(e) => keyUpHandler(e)}
        className="col-sm-6 col-md-3" type="text" placeholder="Author" value={author} /> */}
          <div className="col-12 col-sm-6 col-md-6 d-inline-flex">
            <select
              name="category"
              className={styles.control}
              onChange={(e) => keyUpHandler(e)}
              value={category}
              required
            >
              <option className={styles.placeholder_text} disabled="disabled" value="" required>Category</option>
              {Object.keys(BOOK_CATEGORIES).map((category) => (
                <option key={uuidv4()} className="text-black" value={category}>
                  {category}
                </option>
              ))}
            </select>
            <button
              className="btn_azure ms-3"
              type="submit"
            >
              ADD BOOK
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
