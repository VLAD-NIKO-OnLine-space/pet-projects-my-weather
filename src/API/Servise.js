
export const getResponceWiather = async (location) => {
    // функция получения ключа по его значению
    const getKeyByValue = (object, value) => {
        return Object.keys(object).find(key => object[key] === value)
    } 

    const API = '1afbb913bec7dd16d03555c1a964e43b';
    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=ru&appid=${API}`)
    const data = await url.json()
    const weather =  await data.weather[0].main.replace(' ', '')

    const gif = {
        './clouds.gif' : 'Clouds',
        './Thunderstorm.gif' : 'Thunderstorm',
        './Drizzle.gif': 'Drizzle',
        './Rain.gif': 'Rain',
        './Snow.gif' : 'Snow',
        './Clear.gif': 'Clear',
        './Mist.gif': 'Mist',
        './Something.gif': 'Fog',
        './Tornado.gif': 'Tornado',
        './Squall.gif' : 'Squall',
        './Dust.gif' : 'Dust',
        './Something11.gif' : 'Sand',
        './Something2.gif' : 'Ash',
        './Something3.gif' : 'Smoke',
        './Something4.gif' : 'Haze'
    }
    return [data, getKeyByValue(gif, weather)]
}


// функция получения прогноза погоды
export const getWeatherForest = async(location) => {
    const API = '1afbb913bec7dd16d03555c1a964e43b';
    const url = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=5&appid=${API}&lang=ru&units=metric`)
    const data = await url.json()

    const times = []
    const temps = []
    const weathers = []

    data.list.forEach((e)=> {
        times.push(e.dt_txt.slice(11, 16))
        temps.push(e.main.temp.toFixed(0))
        weathers.push(e.weather[0].main)

    }) 
    
    const getKeyByValue = (object, value) => {
        return Object.keys(object).find(key => object[key] === value)
    }

    const gif = {
        './clouds.gif' : 'Clouds',
        './Thunderstorm.gif' : 'Thunderstorm',
        './Drizzle.gif': 'Drizzle',
        './Rain.gif': 'Rain',
        './Snow.gif' : 'Snow',
        './Clear.gif': 'Clear',
        './Mist.gif': 'Mist',
        './Something.gif': 'Fog',
        './Tornado.gif': 'Tornado',
        './Squall.gif' : 'Squall',
        './Dust.gif' : 'Dust',
        './Something11.gif' : 'Sand',
        './Something2.gif' : 'Ash',
        './Something3.gif' : 'Smoke',
        './Something4.gif' : 'Haze'
    }

    const icon = []

    weathers.forEach(elem=>{
        icon.push(getKeyByValue(gif, elem))
    })
    return [times, temps, icon]
    
}