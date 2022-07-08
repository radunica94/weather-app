import './App.css';
import SearchBar from './components/search-bar';
import CurrentWeather from './components/current-weather';
import React, {useState} from 'react';
import { getCurrentWeather } from './api/weather-api';
import ForecastWeather from './components/forecast-weather';
import { getDaysForecast } from './api/weather-api';
import { getHistory } from './api/weather-api';

function App() {
  
  const[state,setState] = useState({
    location: '',
    temp: '',
    precipitation_index: '',
    wind: '',
    icon: '',
    pressure: '',
    moonPhase: '',
    day: '',
    uv_index: ''
  });
  const onInputChange = (e) => {
    setState({
        location: e.target.value
    });
    console.log(state.location);
  }

  const onSubmit = () =>{
    getCurrentWeather(state.location).then(res => {
      setState({
          location: res.data.location.name,
          temp: res.data.current.temp_c,
          icon: res.data.current.condition.icon,
          air_quality: res.data.current.air_quality_index,
          precipitation_index: res.data.current.precip_in,
          wind: res.data.current.wind_kph,
          pressure: res.data.current.pressure_in,
          uv_index: res.data.current.uv      
      });
      console.log(res);
  });
      getDaysForecast(state.location).then(res => {
        setState({
            temp: res.data.current.temp_c,
            icon: res.data.current.condition.icon,
            day: res.data.forecast.forecastday.map(i => console.log(i.date)),
            moonPhase: res.data.forecast.forecastday[0].astro.moon_phase
      });
      console.log(res);
      });
      getHistory(state.location).then(res => {
        setState({

        });
      });
  }
  return (
    <div className="App">
      <header>
          <SearchBar 
              location={state.location} 
              inputChange={(e) => onInputChange(e)}
              onSubmit={() => onSubmit()} 
           />          
      </header>
      <main>
        <div>
          <CurrentWeather    
            temp={state.temp}        
            icon={state.icon}            
            precipitation_index={state.precipitation_index}
            wind={state.wind}
            pressure={state.pressure}
            uv_index={state.uv_index}
          />
        </div>
        <div>
          <ForecastWeather 
            day={state.day}
            temp={state.temp}
            icon={state.icon}
            moonPhase={state.moonPhase}
          />          
        </div>
      </main>
    </div>
  );
}


export default App;
