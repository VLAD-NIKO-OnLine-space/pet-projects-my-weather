import React from 'react';
import styles from './TextError.module.css'

const TextError = ({visible}) => {

    const rootStyles = [styles.text]
    if (visible) {
        rootStyles.push(styles.active)
    }
   

    return (
        <h5 className={rootStyles.join(' ')}>Такого города не существует!</h5>
    );
};



export default TextError;