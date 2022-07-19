import './navigation.css';
import logo from './book-outline.svg';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img className="logo-icon" src={logo} alt="logo" />
        </NavLink>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list__item">
            <NavLink className="nav-link nav-link__about" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink className="nav-link nav-link__cart" to="/cart">
              Cart
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink className="nav-link nav-link__login" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
