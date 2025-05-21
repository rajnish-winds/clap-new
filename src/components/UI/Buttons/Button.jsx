import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, onClick, type = 'button' }) => {
  return (
    <button className={styles.customButton} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
