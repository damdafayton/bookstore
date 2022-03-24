import PropTypes from 'prop-types';
import styles from './Book.module.scss';

export default function Book({
  type, title, author, chapter, completed, key,
}) {
  return (
    <li key={key} className={`${styles.bookCard} row`}>
      <div className="col-sm-6">
        <div>
          <p>{type}</p>
          <h3>{title}</h3>
          <h4>{author}</h4>
        </div>
        <div>
          <ul className={`${styles.bookControl} d-flex`}>
            <li>Comments</li>
            <li>Remove</li>
            <li>Edit</li>
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
  key: PropTypes.string,
};

Book.defaultProps = {
  type: '',
  title: '',
  author: '',
  chapter: '',
  completed: '',
  key: '',
};
