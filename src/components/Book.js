import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './Book.module.scss';
import { asyncBookRemove } from '../redux/configureStore';
import Percentage from './Percentage';

export default function Book({
  category, title, author, chapter, id,
}) {
  const dispatch = useDispatch();

  const percent = Math.floor(Math.random() * 100);

  return (
    <li className={`${styles.bookCard} row mb-2 d-flex justify-content-center`}>
      <div className="col-md-6 d-flex justify-content-center justify-content-md-start ">
        <div className="d-flex flex-column justify-content-between">
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
      <div className={`${styles.percent_seperator} col-md-4 col-lg-3 justify-content-center my-4 d-flex align-items-center`}>
        <Percentage percent={percent} />
        <div>
          <span className={styles.percent_text}>{`${percent}%`}</span>
          <span className={styles.completed_text}>Completed</span>
        </div>
      </div>
      <div className="col-md-2 col-lg-3 ps-md-5 d-flex justify-content-center align-items-center">
        <div className={styles.button_container}>
          <p className={`${styles.current_chapter} mb-2`}>CURRENT CHAPTER</p>
          <p className={`${styles.current_chapter_number} mb-2`}>{`Chapter: ${chapter || '1'}`}</p>
          <button type="button" className="btn_azure mb-0">UPDATE PROGRESS</button>
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
  id: PropTypes.string,
};

Book.defaultProps = {
  category: '',
  title: '',
  author: '',
  chapter: '',
  id: '',
};
