import React, { Component } from 'react';

class CurrentWeather extends Component {
    state = {  } 
    render() { 
        const image = this.props.currentIcon;
        const temperature = this.props.currentTemperature;
        const time = this.props.currentTime;
        const air_quality = this.props.currentAirQuality;
        const precipitation_index = this.props.currentPrecipitationIndex;
        const wind = this.props.currentWind;
        const pressure = this.props.currentPressure;
        const uv_index = this.props.currentUvIndex;
        return (
        <div className='current-weather'>
            <div>
                <h5>Temperature</h5>
                <p>{temperature}</p> 
            </div>                   
            <div>
                <img width='64' src={image} alt={image}/>
            </div>
            <div>
                <h5>Time</h5>
                <p className='current-weather-time'>Time: {time}</p>
            </div>
            <div>
                <h5>Precipitation Index</h5>
                <p>{precipitation_index}</p>
            </div>
            <div>
                <h5>Wind</h5>
                <p>{wind}</p>
            </div>
            <div>
                <h5>Pressure</h5>
                <p>{pressure}</p>
            </div>
            <div>
                <h5>UV Index</h5>
                <p>{uv_index}</p>
            </div>                
        </div>
    );
    }
}
 
export default CurrentWeather;