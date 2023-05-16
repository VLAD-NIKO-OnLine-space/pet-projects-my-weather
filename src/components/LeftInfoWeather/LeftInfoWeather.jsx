import React from 'react';
import styles from './LeftInfoWeather.module.css'

const LeftInfoWeather = () => {
    return (
        <div className={styles.main}>
            <div className={styles.contLeft}>
                <div className={styles.contInfo}>
                    <img src="./water.svg" alt="" className={styles.icon}/>
                    <h5 className={styles.h5}>123</h5>
                    <p  className={styles.par}>воздух</p>
                </div>
                <div className={styles.contInfo}>
                    <img src="./water.svg" alt="" className={styles.icon}/>
                    <h5 className={styles.h5}>997hpa</h5>
                    <p className={styles.par}>давление</p>
                </div>
                <div className={styles.contInfo}>
                    <img src="./water.svg" alt="" className={styles.icon}/>
                    <h5 className={styles.h5}>4</h5>
                    <p className={styles.par}>яркость</p>
                </div>

                <div className={styles.contInfo}>
                    <img src="./water.svg" alt="" className={styles.icon}/>
                    <h5 className={styles.h5}>3.0mm</h5>
                    <p className={styles.par}>осадки</p>
                </div>
                <div className={styles.contInfo}>
                    <img src="./water.svg" alt="" className={styles.icon}/>
                    <h5 className={styles.h5}>3км/ч</h5>
                    <p className={styles.par}>ветер</p>
                </div>
                <div className={styles.contInfo}>
                    <img src="./water.svg" alt="" className={styles.icon}/>
                    <h5 className={styles.h5}>3.4км</h5>
                    <p className={styles.par}>видимость</p>
                </div>
                
            </div>
        </div>
    );
};



export default LeftInfoWeather;