import './App.css';
import SearchBar from './components/search-bar';
import CurrentWeather from './components/current-weather';
import React, { Component } from 'react';
import { getCurrentWeather } from './api/weather-api';
import ForecastWeather from './components/forecast-weather';
import { getFiveDaysForecast } from './api/weather-api';

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
        pressure: ''
        
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
            pressure: res.data.current.pressure_in
       });
       console.log(res);
    });
    getCurrentWeather(this.state.location).then(res => {
        this.setState({
            temp: res.data.current.temp_c,
            city: res.data.location.name,
            description: res.data.current.condition.text,
            icon: res.data.current.condition.icon
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
            />
          </div>
          <div>
            <ForecastWeather 
          
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
