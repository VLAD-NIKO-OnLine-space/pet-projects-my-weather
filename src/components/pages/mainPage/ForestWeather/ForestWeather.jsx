import React from 'react';
import styles from './ForestWeather.module.css'

const ForestWeather = ({timeForest, tempForest, icon}) => {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <h4 className={styles.time}>{timeForest.step1}</h4>
                <img src={icon.step1} alt="icon" className={styles.icon}/>
                <h4 className={styles.temp}>{tempForest.step1}°</h4>
            </div>
            <div className={styles.content}>
                <h4 className={styles.time}>{timeForest.step2}</h4>
                <img src={icon.step2} alt="icon" className={styles.icon}/>
                <h4 className={styles.temp}>{tempForest.step2}°</h4>
            </div>
            <div className={styles.content}>
                <h4 className={styles.time}>{timeForest.step3}</h4>
                <img src={icon.step3} alt="icon" className={styles.icon}/>
                <h4 className={styles.temp}>{tempForest.step3}°</h4>
            </div>
            <div className={styles.content}>
                <h4 className={styles.time}>{timeForest.step4}</h4>
                <img src={icon.step4} alt="icon" className={styles.icon}/>
                <h4 className={styles.temp}>{tempForest.step4}°</h4>
            </div>
            <div className={styles.content}>
                <h4 className={styles.time}>{timeForest.step5}</h4>
                <img src={icon.step5} alt="icon" className={styles.icon}/>
                <h4 className={styles.temp}>{tempForest.step5}°</h4>
            </div>
        </div>
    );
};



export default ForestWeather;