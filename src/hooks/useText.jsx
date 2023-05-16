import React, { useState } from "react";


export const useWeather = (callback) => {
    const [isLoading, setIsloading] = useState(false)
    const [errorValue, setErrorValue] = useState(false)

    const changeWeather = async (...args) => {
  
        try{
            setIsloading(true)
            await callback(...args)
            setIsloading(false)
            setErrorValue(false)

        } catch (e) {
            setErrorValue(true)
            setIsloading(false)
        } 
    }
    return [changeWeather, isLoading, errorValue]



}