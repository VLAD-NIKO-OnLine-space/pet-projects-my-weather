import React from 'react';
import styles from './Loader.module.css'

const Loader = () => {
    return (
        <img src="./Loading.gif" alt="loading" className={styles.load}/>
    );
};


export default Loader;