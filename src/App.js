import { Routes, Route, NavLink } from 'react-router-dom';
import Books from './components/Books';
import './App.scss';

function App() {
  return (
    <div className="container">
      <nav className="d-flex align-items-center">
        <h1>Bookstore CMS</h1>
        <ul className="d-flex mb-2 ms-4">
          <li className="ms-2"><NavLink to="/books">BOOKS</NavLink></li>
          <li className="ms-2"><NavLink to="/categories">CATEGORIES</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
