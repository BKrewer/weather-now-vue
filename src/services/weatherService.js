
import Axios from 'axios';

const {
    VUE_APP_WEATHER_API_URL,
    VUE_APP_WEATHER_API_KEY
} = process.env;

const requestWeather = (requestString) => {
    const urlRequest = `${VUE_APP_WEATHER_API_URL}/group?id=${requestString}&units=metric&appid=${VUE_APP_WEATHER_API_KEY}`
    return Axios.get(urlRequest);
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
    formatData
}