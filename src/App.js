import { Routes, Route, NavLink } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.scss';
import profileIcon from './profile.png';

function App() {
  return (
    <>
      <div className="nav_container px-4 px-sm-5 py-2 mb-4">
        <nav className="d-flex align-items-center panel-bg py-4">
          <h1 className="fw-bolder">Bookstore CMS</h1>
          <ul className="d-flex mb-2">
            <li><NavLink className="nav_link" to="/">BOOKS</NavLink></li>
            <li><NavLink className="nav_link" to="/categories">CATEGORIES</NavLink></li>
          </ul>
          <img alt="profile icon" className="ms-auto" src={profileIcon} />
        </nav>
      </div>
      <div className="px-4 px-sm-5 mx-sm-2">
        <Routes className="">
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<Books />} />
          <Route />
        </Routes>
      </div>
    </>
  );
}

export default App;
