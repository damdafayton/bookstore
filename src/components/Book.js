import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './Book.module.scss';
import { asyncBookRemove } from '../redux/configureStore';

export default function Book({
  category, title, author, chapter, completed, id,
}) {
  const dispatch = useDispatch();

  return (
    <li className={`${styles.bookCard} row mb-2 d-flex justify-content-center`}>
      <div className="col-md-6 d-flex justify-content-center justify-content-md-start ">
        <div>
          <div>
            <p className={styles.category_text}>{category}</p>
            <h3>{title}</h3>
            <h4>{author}</h4>
          </div>
          <div>
            <ul className={`${styles.bookControl} d-flex`}>
              <li className={styles.controls}><span>Comments</span></li>
              <li className={styles.controls}>
                <span
                  tabIndex={id}
                  id={id}
                  role="button"
                  onKeyUp={(event) => dispatch(asyncBookRemove(event))}
                  onClick={(event) => dispatch(asyncBookRemove(event))}
                >
                  Remove
                </span>
              </li>
              <li className={styles.controls}><span>Edit</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${styles.percent_seperator} col-md-3 justify-content-center my-4 d-flex align-items-center`}>
        <span className={styles.oval} />
        <div>
          <span className={styles.percent_text}>{completed || '100%'}</span>
          <span className={styles.completed_text}>Completed</span>
        </div>
      </div>
      <div className="col-md-3 ps-md-5 d-flex justify-content-center">
        <div>
          <p className={styles.current_chapter}>CURRENT CHAPTER</p>
          <p className={styles.current_chapter_number}>{`Chapter: ${chapter || '1'}`}</p>
          <button type="button" className="btn_azure">UPDATE PROGRESS</button>
        </div>
      </div>
    </li>
  );
}

Book.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  chapter: PropTypes.string,
  completed: PropTypes.string,
  id: PropTypes.string,
};

Book.defaultProps = {
  category: '',
  title: '',
  author: '',
  chapter: '',
  completed: '',
  id: '',
};
