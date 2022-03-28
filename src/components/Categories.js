import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export default function Categories() {
  const categories = useSelector((state) => state.categories);

  return (
    <section>
      <ul>
        {categories.map((category) => (
          <li key={uuidv4()}><h2>{category}</h2></li>
        ))}
      </ul>
    </section>
  );
}
