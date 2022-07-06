import axios from 'axios';


function getCurrentWeather(location){
    return axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&aqi=yes`
    );
}

function getFiveDaysForecast(location){
    return axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=5&aqi=no&alerts=no`
    );
    }

export {
     getCurrentWeather,getFiveDaysForecast
}