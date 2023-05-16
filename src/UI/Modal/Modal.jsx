import React from 'react';
import styles from './Modal.module.css'

const Modal = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};


export default Modal;