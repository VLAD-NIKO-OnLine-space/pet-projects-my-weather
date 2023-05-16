import React from 'react';
import styles from './MyButton.module.css'

const MyButton = ({disabled, children, ...props}) => {
    return (
        <button {...props} className={disabled ? styles.btnDis: styles.btn}>
            {children}
        </button>
    );
};



export default MyButton;