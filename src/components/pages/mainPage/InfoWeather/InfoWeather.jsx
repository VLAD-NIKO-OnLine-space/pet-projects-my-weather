import React from 'react';
import styles from './InfoWeather.module.css'
import LeftInfoWeather from '../../../LeftInfoWeather/LeftInfoWeather';
import TopInfoWeather from '../../../TopInfoWeather/TopInfoWeather';
import Loader from '../../../../UI/Loader/Loader';
import BottomInfoWeather from '../../../BottomInfoWeather/BottomInfoWeather';

const InfoWeather = ({location, isLoading}) => {

    if (isLoading){
        return(
            <div className={styles.main2}>
                <Loader/>
            </div>
        )
    }; 


    return (

        <div className={styles.main}>
            <LeftInfoWeather/>
            <TopInfoWeather location={location} />
            <BottomInfoWeather location={location} />
            
        </div>
       
    );
};



export default InfoWeather;