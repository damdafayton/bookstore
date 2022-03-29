import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export default function Categories() {
  const categories = useSelector((state) => state.categories);

  function statusHandler(e) {

    const targetCategory = Object.keys(categories).filter((category) => category === e.target.name);
    const { status } = categories[targetCategory[0]];

    e.target.nextElementSibling.innerText = status;
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
