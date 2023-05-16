import React, { useEffect, useMemo, useState } from 'react';
import styles from './MainPage.module.css';
import MyInput from '../../../UI/MyInput/MyInput';
import { getResponceWiather, getWeatherForest } from '../../../API/Servise';
import Weather from './Weather/Weather';
import { getDate, getTime } from '../../../utils/GetDate';
import MyButton from '../../../UI/MyButton/MyButton';
import TextError from '../../../UI/TextError/TextError';
import { useWeather } from '../../../hooks/useText';
import InfoWeather from './InfoWeather/InfoWeather';



const MainPage = () => {
    const [value, setValue] = useState('')
    const [timeForest, setTimeForest] = useState({step1: '-',step2: '-',step3: '-',step4: '-',step5: '-'})
    const [tempForest, setTempForest] = useState({step1: '-',step2: '-',step3: '-',step4: '-',step5: '-'})
    const [icon, setIcon] = useState({step1: './clouds.gif',step2: './clouds.gif',step3: './clouds.gif',step4: './clouds.gif',step5: './clouds.gif'})
    const [location, setLocation] = useState(
        {place: '---', temp: 273, data: '', weather: '-',minTemp: '273',maxTemp: '273',humidity: '0', gif: './clouds.gif', sunset: '-', sunrise: '-'})


    const getDateNow = useMemo(() => {
        const a = getDate()
        const res = `${a[0]}.  ${a[1]}, ${a[2]}` 
        setLocation({...location,data: res })      
    },[location.data])


    useEffect(()=>{
        console.log('[INFO] Сработал useEffect')
        getDateNow
    },[])


    const [fetchWeather, isLoading, errorValue] = useWeather( async ()=>{
        const [data, weather] = await getResponceWiather(value)
        setLocation({...location, place: value, temp: data.main.temp, 
            weather: data.weather[0].description, minTemp: data.main.temp_min, maxTemp: data.main.temp_max,
            humidity: data.main.humidity, gif: weather, sunset:  getTime(data.sys.sunset), sunrise: getTime(data.sys.sunrise)})
        
    })

    const getWeather = async () => {
        if (value){fetchWeather()
            const [times, temps, icons] = await getWeatherForest(value)
            setTimeForest({...timeForest, step1: times[0],step2: times[1],step3: times[2],step4: times[3],step5: times[4]})
            setTempForest({...tempForest, step1: temps[0],step2: temps[1],step3: temps[2],step4: temps[3],step5: temps[4]})
            setIcon({...icon, step1: icons[0],step2: icons[1],step3: icons[2],step4: icons[3],step5: icons[4]})
        }
    }




    
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <TextError visible={errorValue}/>
                <MyInput
                    value={value}
                    onChange={e=>setValue(e.target.value)}
                    setValue={setValue}
                    placeholder='Поиск...'
                />
                <MyButton disabled={value ? false : true} onClick={getWeather}>выбрать</MyButton>
                <Weather location={location} isLoading={isLoading} timeForest={timeForest} tempForest={tempForest} icon={icon}/>
            </div>

            <InfoWeather location={location} isLoading={isLoading} />
            
      
        </div>
    );
};

export default MainPage;