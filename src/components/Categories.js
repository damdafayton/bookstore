import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  function statusHandler(e) {
    console.log(e.target.name);
    // const status = dispatch(checkStatus(e.target.name));
    // console.log(status);
    // e.target.nextElementSibling.innerText = status;
  }

  return (
    <section>
      <ul>
        {Object.keys(categories).map((category) => (
          <li key={uuidv4()}>
            <h2>{category}</h2>
            <button name={category} onClick={statusHandler} type="button">Check Status</button>
            <span />
          </li>
        ))}
      </ul>
    </section>
  );
}
