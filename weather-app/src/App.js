import './App.css';
import React, {useEffect, useState} from 'react';
import SearchBar from './components/search-bar';
import TimeAndLocation from './components/location';
import Details from './components/details';
import Forecast from './components/forecast';
import getFormatCurrentWeather from './api/weather-api';

function App(){

  const[query,setQuery] = useState({q: "Sibiu"});
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
          setQuery={setQuery} 
        />
          {weather && ( 
            <div className='weather-container'>                               
                <TimeAndLocation weather={weather}/>
                <Details weather={weather}/>                 
                {/* <Forecast weather={weather[0]}/> */}
                <Forecast weather={weather[1]}/>
                <Forecast weather={weather[2]}/>
            </div>
          )}
        
      </div>
    );
};

export default App;
