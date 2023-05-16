import React, {useState} from "react";


export const useForest = (callback) => {
    const [timeForest, setTimeForest] = useState({step1: '',step2: '',step3: '',step4: '',step5: ''})
    const [tempForest, setTempForest] = useState({step1: '',step2: '',step3: '',step4: '',step5: ''})
    const [icon, setIcon] = useState({step1: '',step2: '',step3: '',step4: '',tept5: ''})


    const getForestWeather = async (...args) => {
        const [times, temps, icons] = await getWeatherForest(...args)
        setTimeForest({...timeForest, step1: times[0],step2: times[1],step3: times[2],step4: times[3],step5: times[4]})
        setTempForest({...tempForest, step1: temps[0],step2: temps[1],step3: temps[2],step4: temps[3],step5: temps[4]})
        setIcon({...icon, step1: icons[0],step2: icons[1],step3: icons[2],step4: icons[3],step5: icons[4]})
        

    }



}