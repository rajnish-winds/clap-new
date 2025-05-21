import React from 'react';
import styles from './Navbar.module.scss';
import Button from '../../UI//Buttons/Button';
import { Link } from 'react-router-dom';

console.warn('styles', styles);

const handleClick = () => {
  console.log('Clicked');
};

const Navbar = () => {
  return (
    <div>
      <nav className={`navbar ${styles.customNavbar}`}>
        <div className={styles.navWrapper}>
          <div className={styles.container}>
            <ul className={styles.navItemWrapper}>
              <li className={styles.navItem}>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link className="nav-link" to="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Button onClick={handleClick}>Login</Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
