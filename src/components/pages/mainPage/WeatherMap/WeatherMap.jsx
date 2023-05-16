import React from 'react';
import styles from './WeatherMap.module.css'
import MyButton from '../../../../UI/MyButton/MyButton';
import { getWeatherForest} from '../../../../API/Servise';

const WeatherMap = () => {


    return (
        <div className={styles.container}>
            <MyButton>GET</MyButton>
        </div>
    );
};



export default WeatherMap;