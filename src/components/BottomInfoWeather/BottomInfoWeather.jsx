import React from 'react';
import styles from './BottomInfoWeather.module.css'

const BottomInfoWeather = ({location}) => {
    return (
       
        <div className={styles.main}>
            <div className={styles.cont}>
                <p className={styles.par}>Рассвет</p>
                <img src="./sunrise.gif" alt="" className={styles.gif}/>
                <h4 className={styles.title}>{location.sunrise}</h4>

            </div>
            <div className={styles.cont}>
                <p className={styles.par}>закат</p>
                <img src="./sunset.gif" alt="" className={styles.gif2}/>
                <h4 className={styles.title}>{location.sunset}</h4>

            </div>
        </div>
        
        
        
    );
};

export default BottomInfoWeather;