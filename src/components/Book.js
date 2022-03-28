import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './Book.module.scss';

import { removeBook } from '../redux/books/books';

export default function Book({
  type, title, author, chapter, completed, id,
}) {
  const dispatch = useDispatch();

  return (
    <li className={`${styles.bookCard} row`}>
      <div className="col-sm-6">
        <div>
          <p>{type}</p>
          <h3>{title}</h3>
          <h4>{author}</h4>
        </div>
        <div>
          <ul className={`${styles.bookControl} d-flex`}>
            <li><span>Comments</span></li>
            <li>
              <span
                tabIndex={id}
                id={id}
                role="button"
                onKeyUp={(e) => { dispatch(removeBook(e.target.id)); }}
                onClick={(e) => { dispatch(removeBook(e.target.id)); }}
              >
                Remove
              </span>
            </li>
            <li><span>Edit</span></li>
          </ul>
        </div>
      </div>
      <div className="col-sm-3 align-self-center">
        {completed}
        {' '}
        Completed
      </div>
      <div className="col-sm-3">
        <p>CURRENT CHAPTER</p>
        <p>{chapter}</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
}

Book.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  chapter: PropTypes.string,
  completed: PropTypes.string,
  id: PropTypes.string,
};

Book.defaultProps = {
  type: '',
  title: '',
  author: '',
  chapter: '',
  completed: '',
  id: '',
};
