import './App.css';
import SearchBar from './components/search-bar';
import CurrentWeather from './components/current-weather';
import React, {useState} from 'react';
import { getCurrentWeather } from './api/weather-api';
import ForecastWeather from './components/forecast-weather';
import { getDaysForecast } from './api/weather-api';
import { getHistory } from './api/weather-api';
import WeatherHistory from './components/weather-history';

function App() {
  
  const[location,setLocation] = useState('');
  const[temp,setTemp] = useState('');
  const[air_quality,setAir_quality] = useState('');
  const[precipitation_index,setPrecipitation_index] = useState('');
  const[wind,setWind] = useState('');
  const[icon,setIcon] = useState('');
  const[time,setTime] = useState('');
  const[pressure,setPressure] = useState('');
  const[moonPhase,setMoonPhase] = useState('');
  const[day,setDay] = useState('');
  const[uv_index,setUv_index] = useState('');      
        


  const onInputChange = (event) => {
    this.setState({
        location: event.target.value
    });
  }

  const onSubmit = (event) =>{
    getCurrentWeather({location}).then(res => {
      this.setState({
            location: res.data.location.name,
            temp: res.data.current.temp_c,
            time: res.data.location.localtime,
            icon: res.data.current.condition.icon,
            air_quality: res.data.current.air_quality_index,
            precipitation_index: res.data.current.precip_in,
            wind: res.data.current.wind_kph,
            pressure: res.data.current.pressure_in,
            uv_index: res.data.current.uv            
      });
      console.log(res);
  });
      getDaysForecast({location}).then(res => {
        this.setState({
            temp: res.data.current.temp_c,
            icon: res.data.current.condition.icon,
            day: res.data.forecast.forecastday.map(i => console.log(i.date)),
            moonPhase: res.data.forecast.forecastday[0].astro.moon_phase
      });
      console.log(res);
      });
  }
  return (
    <div className="App">
      <header>
          <SearchBar 
              location={this.state.location} 
              inputChange={(e) => this.onInputChange(e)}
              onSubmit={() => this.onSubmit()} 
           />          
      </header>
      <main>
        <div>
          <CurrentWeather 
            currentTime={this.state.time}
            currentIcon={this.state.icon}
            currentTemperature={this.state.temp} 
            currentAirQuality={this.state.air_quality}
            currentPrecipitationIndex={this.state.precipitation_index}
            currentWind={this.state.wind}
            currentPressure={this.state.pressure}
            currentUvIndex={this.state.uv_index}
          />
        </div>
        <div>
          <ForecastWeather 
            daysOfWeek={this.state.day}
            currentTemperature={this.state.temp}
            currentIcon={this.state.icon}
            currentMoonPhase={this.state.moonPhase}
          />
        </div>
      </main>
      <footer>
        <WeatherHistory
        
        />
      </footer>
    </div>
  );
}


export default App;
