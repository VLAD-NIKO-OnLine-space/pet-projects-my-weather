import React from 'react';
import styles from './Weather.module.css'
import ForestWeather from '../ForestWeather/ForestWeather';
import Loader from '../../../../UI/Loader/Loader';



const Weather = ({location, timeForest, tempForest, icon, isLoading}) => {

    if (isLoading){
        return (<Loader/>)
    };

    return (
        <div className={styles.main}>
            <img src="./figure.png" alt="" className={styles.figure}/>
            <img src="./figure2.png" alt="" className={styles.figure2}/>
            <img src={location.gif} alt="" className={styles.gif}/>

            <div className={styles.left}>
                <h1 className={styles.location}>{location.place}</h1>
                <p className={styles.data}>{location.data}</p>
                <img src="" alt="" />
            </div>

            <div className={styles.right}>
                <p className={styles.weather}>{location.weather}</p>
                <h1 className={styles.temp}>{(location.temp-273).toFixed(1)}°</h1>
                <img src="" alt="" />
                <div className={styles.bot}>
                    <p className={styles.ect}>мин: {(location.minTemp-273).toFixed(1)}°</p>
                    <p className={styles.ect}>макс: {(location.maxTemp-273).toFixed(1)}°</p>
                </div>

                <div className={styles.bottomContainer}>
                    <img src="./water.svg" alt="" className={styles.water}/>
                    <div className={styles.humidityCont}>
                        <h5 className={styles.humidityText}>Влажность</h5>
                        <p className={styles.humidity}>{location.humidity} %</p>
                    </div>
                </div>
            </div>

            <ForestWeather timeForest={timeForest} tempForest={tempForest} icon={icon}/>
        </div>
    );
};

export default Weather;