import React from 'react';
import styles from './SignIn.module.scss';
const SignIn = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.signInContainer}>
        <div className={styles.formContainer}>
          <div className={styles.leftSection}>Text</div>
          <div className={styles.formSection}>Form</div>
        </div>
        <div className={styles.floatingImg}></div>
      </div>
    </div>
  );
};

export default SignIn;
