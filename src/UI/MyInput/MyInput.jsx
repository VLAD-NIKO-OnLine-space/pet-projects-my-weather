import React from 'react';
import styles from './MyInput.module.css'

const MyInput = ({setValue,...props}) => {
    return (
        <div>
            <img src="./magnify.svg" alt="icon-search" className={styles.svg}/>
            <img src="./delete.svg" alt="icon-delete" className={styles.delete} onClick={()=>setValue('')}/>
            <input className={styles.input} {...props} />
        </div>
    );
};


export default MyInput;