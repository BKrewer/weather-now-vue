
import Axios from 'axios';

const {
    VUE_APP_WEATHER_API_URL,
    VUE_APP_WEATHER_API_KEY,
    VUE_APP_TIMER_CACHE
} = process.env;

const requestWeather = (requestString) => {
    const urlRequest = `${VUE_APP_WEATHER_API_URL}/group?id=${requestString}&units=metric&appid=${VUE_APP_WEATHER_API_KEY}`
    return Axios.get(urlRequest);
}

const saveCacheData = (data) => {
    data.updatedAt = Date.now();
    localStorage.setItem("weathernow", JSON.stringify(data))
}

const getCacheData = () => {
    JSON.parse(localStorage.getItem("weathernow"))
}

const validateCacheData = (dtSaved) => {
    const dtNow = Date.now();
    const dtCached = new Date(dtSaved);

    const timeDif = dtNow - dtCached

    return Math.round((timeDif / 1000) / 60) <= VUE_APP_TIMER_CACHE
}

const formatData = (data) => {
    const dataFormatted = []

    data && data.forEach(weather => {
        const { name } = weather;
        const { temp, humidity, pressure } = weather.main;
        const { country } = weather.sys;

        const temperatureFormatted = Math.floor(temp);

        dataFormatted.push({ city: name, country, temp: temperatureFormatted, humidity, pressure })
    })

    return dataFormatted;
}

export {
    requestWeather,
    saveCacheData,
    getCacheData,
    validateCacheData,
    formatData
}