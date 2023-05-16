import React from 'react';
import styles from './TopInfoWeather.module.css'

const TopInfoWeather = ({location}) => {
    return (
        <div className={styles.main}>
            <img src="./figure3.png" alt="" className={styles.img}/>
            <img src={location.gif} alt="" className={styles.gif}/>
            <h1 className={styles.location}>{location.place}</h1>
            <div className={styles.temp}>
                <h1 className={styles.h1}>{(location.temp-273).toFixed(1)}°</h1>
                <h3 className={styles.h3}>{location.weather}</h3>
            </div>
            <div className={styles.minmax}>
                <h3 className={styles.max}>Макс: {(location.maxTemp-273).toFixed(1)}°</h3>
                <h3 className={styles.max}>мин: {(location.minTemp-273).toFixed(1)}°</h3>
            </div>
        </div>
    );
};



export default TopInfoWeather;