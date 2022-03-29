import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { asyncBookAdd } from '../redux/configureStore';


export default function FormBox() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  function keyUpHandler(event) {
    switch (event.target.name) {
      case 'title':
        setTitle(event.target.value);
        break;
      case 'author':
        setAuthor(event.target.value);
        break;
      default:
        return 0;
    }
    return 0;
  }

  return (
    <form>
      <h3>ADD NEW BOOK</h3>
      <div className="row g-1">
        <input name="title" onChange={(e) => keyUpHandler(e)}
          className="col-12 col-sm-6 col-md-6" type="text" placeholder="Book Title" value={title} />
        {/* <input name="author" onChange={(e) => keyUpHandler(e)} className="col-sm-6 col-md-3" type="text" placeholder="Author" value={author} /> */}
        <select className="col-8 col-sm-4 col-md-4" defaultValue="cate">
          <option disabled="disabled" value="cate">Category</option>
          <option>Action</option>
        </select>
        <button
          onClick={() => dispatch(asyncBookAdd({ title, author }))}
          className="col-4 col-sm-2 col-md-2"
          type="button"
        >
          ADD BOOK
        </button>
      </div>
    </form>
  );
}
