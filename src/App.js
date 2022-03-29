import { Routes, Route, NavLink } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.scss';

function App() {
  return (
    <div className="px-4 px-sm-5 mx-sm-2">
      <div>
        <nav className="d-flex align-items-center panel-bg py-4 my-2">
          <h1 className="fw-bolder">Bookstore CMS</h1>
          <ul className="d-flex mb-2">
            <li><NavLink className="nav_link" to="/books">BOOKS</NavLink></li>
            <li><NavLink className="nav_link" to="/categories">CATEGORIES</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<Books />} />
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default App;
