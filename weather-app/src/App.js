import './App.css';
import SearchBar from './components/search-bar';
import CurrentWeather from './components/current-weather';
import React, {Component} from 'react';
import { getCurrentWeather } from './api/weather-api';
import ForecastWeather from './components/forecast-weather';
import { getDaysForecast } from './api/weather-api';
import { getHistory } from './api/weather-api';
import WeatherHistory from './components/weather-history';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        location: '',
        temp: '',
       air_quality: '',
       precipitation_index: '',
       wind: '',
       icon: '',
       time: '',
        pressure: '',
        moonPhase: '',           
       day:  ''  ,
       uv_index: ''
  };       
}
onInputChange(e){
  this.setState({
      location: e.target.value
  });
}

onFormSubmit(e){
  getCurrentWeather(this.state.location).then(res => {
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
    getDaysForecast(this.state.location).then(res => {
      this.setState({
          temp: res.data.current.temp_c,
          icon: res.data.current.condition.icon,
          day: res.data.forecast.forecastday.map(i => console.log(i.date)),
          moonPhase: res.data.forecast.forecastday[0].astro.moon_phase
    });
    console.log(res);
    });
  }

    render(){
      return (
        <div className="App">
          <header>
            <SearchBar 
              location={this.state.location} 
              inputChange={(e) => this.onInputChange(e)}
              formSubmitted={() => this.onFormSubmit()} 
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
  
}


export default App;
