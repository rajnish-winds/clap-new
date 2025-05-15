import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar custom_navbar">
        <div className="container">
          <ul className="navItemWrapper">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <button className="btn btn-primary ms-auto login-btn">Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
