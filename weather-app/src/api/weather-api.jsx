import axios from 'axios';

// const REACT_APP_API_KEY='9f3a5ae1afe244179cc100933220707';
function getCurrentWeather(location){
    return axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&aqi=yes`
    );
}

function getDaysForecast(location){
    return axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=5&aqi=no&alerts=no`
    );
}

function getHistory(location){
    return axios.get(
        `http://api.weatherapi.com/v1/history.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&dt=2010-01-01`    
    );
}

export {
     getCurrentWeather,getDaysForecast,getHistory
}