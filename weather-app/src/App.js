import './App.css';
import React, {useState} from 'react';
import SearchBar from './components/search-bar';
import TimeAndLocation from './components/time_and_location';
import Details from './components/details';
import Forecast from './components/forecast';
import {getCurrentWeather} from './api/weather-api';
import getWeatherData from './api/weather-api';

function App(){

  const fetchWeather = async () => {
    const data = getWeatherData("weather", {q: "Sibiu"});
    console.log(data);
  };

  fetchWeather();


    return(
      <div className='container'>
        <SearchBar/>
        <TimeAndLocation/>
        <Details/>
        <Forecast title="Daily Forecast"/>
      </div>
    );
};

export default App;
