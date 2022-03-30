import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { underConstruction } from '../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();

  // MAKE STATE INTO UNDER CONSTRUCTION
  dispatch(underConstruction());

  const categories = useSelector((state) => state.categories);

  function statusHandler(e) {
    const targetCategory = Object.keys(categories).filter((category) => category === e.target.name);
    const { status } = categories[targetCategory[0]];

    e.target.nextElementSibling.innerText = status;
  }

  return (
    <section className="text-center">
      <ul>
        {Object.keys(categories).map((category) => (
          <li key={uuidv4()}>
            <h2>{category.replace('_', ' ')}</h2>
            <button className="btn_azure" name={category} onClick={statusHandler} type="button">Check Status</button>
            <div />
          </li>
        ))}
      </ul>
    </section>
  );
}
