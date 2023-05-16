import React from 'react';
import styles from './SecondPage.module.css';
import { getMap } from '../../../API/GetMap';

const SecondPage = () => {

    return (
        <div className={styles.main}>
            <div className={styles.content} id='map'>
               {getMap()}
            </div>

        </div>
    );
};



export default SecondPage;