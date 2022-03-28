import { useState } from 'react';

export default function FormBox() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

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
        <input name="title" onChange={(e) => keyUpHandler(e)} className="col-sm-6 col-md-4" type="text" placeholder="Book Title" value={title} />
        <input name="author" onChange={(e) => keyUpHandler(e)} className="col-sm-6 col-md-3" type="text" placeholder="Author" value={author} />
        <select className="col-6 col-md-3" defaultValue="cate">
          <option disabled="disabled" value="cate">Category</option>
          <option>Action</option>
        </select>
        <button className="col-6 col-md-2" type="submit">ADD BOOK</button>
      </div>
    </form>
  );
}
