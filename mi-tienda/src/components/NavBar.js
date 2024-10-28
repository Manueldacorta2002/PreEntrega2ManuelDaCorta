// src/components/NavBar.js
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        DA CORTA SOFTWARE
      </Link>
      <ul className="categories">
        <li><NavLink to="/category/ram">RAM</NavLink></li>
        <li><NavLink to="/category/procesadores">Procesadores</NavLink></li>
        <li><NavLink to="/category/placas">Placas de Video</NavLink></li>
      </ul>
      <CartWidget /> {}
    </nav>
  );
};

export default NavBar;
