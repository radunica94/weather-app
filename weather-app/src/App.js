import './App.css';
import React, {useEffect, useState} from 'react';
import SearchBar from './components/search-bar';
import TimeAndLocation from './components/location';
import Details from './components/details';
import Forecast from './components/forecast';
import getFormatCurrentWeather from './api/weather-api';

function App(){

  const[query,setQuery] = useState({q: "Sibiu"});
  const[units,setUnits] = useState({units: "metric"});
  const[weather,setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      //const data = await getWeatherData("weather", {q: "Sibiu"});
      await getFormatCurrentWeather({ ...query}).then((data) => {
          setWeather(data);
      });
      
    };
    
    fetchWeather();
  },[query]);
  
 

 

    return(
      <div className='container'>
        <SearchBar
          setQuery={setQuery} units={units} setUnits={setUnits}
        />
          {weather && (
            <div className='weather-container'>                               
                <TimeAndLocation weather={weather}/>
                <Details weather={weather}/>
                <Forecast title="Daily Forecast" items={weather.daily}/>
            </div>
          )}
        
      </div>
    );
};

export default App;
