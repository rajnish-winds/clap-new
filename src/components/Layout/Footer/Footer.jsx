import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';

const footerLinks = [
  { path: '/help', label: 'Help' },
  { path: '/websitePolicy', label: 'Website Policies' },
  { path: '/contact-us', label: 'Contact' },
  { path: '/faq', label: 'FAQ' },
  { path: '/about-us', label: 'About Us' },
  { path: '/termsConditions', label: 'Terms & Conditions' },
  { path: '/copyrightPolicy', label: 'Copyright Policy' },
  { path: '/privacyPolicy', label: 'Privacy Policy' },
];

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footerMenu}>
        <ul className={styles.footerLink}>
          {footerLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? 'fw-bold' : '')}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.copyrightText}>
        Department of Agriculture & Farmers Welfare, Government of India
      </div>
    </div>
  );
};

export default Footer;
