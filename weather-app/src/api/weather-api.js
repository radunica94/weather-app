// import axios from 'axios';

// function getCurrentWeather(location){
//     return axios.get(
//         `/current.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&aqi=yes`
//     );
// }

// function getDaysForecast(location){
//     return axios.get(
//         `/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=5&aqi=no&alerts=no`
//     );
// }

// export {
//     getCurrentWeather,getDaysForecast
// }

const API_KEY ='5454d24cf1da2658241b216295fcf9f9';
const BASE_URL = 'https://pro.openweathermap.org/data/2.5';

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType); 
    url.search = new URLSearchParams({...searchParams, appid: API_KEY});

    return fetch(url).then((res) => res.json());
}
export default getWeatherData;
