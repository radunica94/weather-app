import React, { Component } from 'react';
import './forecast-weather.scss';

class ForecastWeather extends Component {
    state = {  } 
    render() { 
        const temperature = this.props.currentTemperature;
        const moonPhase = this.props.currentMoonPhase;
        const image = this.props.currentIcon;
        const days = this.props.days;
        return (
            <div className="forecast-weather">
                <div>
                    <h5>Moon Phase</h5>
                    <p>{moonPhase}</p>
                </div> 
                <div>
                    <h5>Day</h5>
                    <p>{days}</p>
                    {/* <div className='forecst-weather-days'>{days.map((day)=>{
                        return <span key={day}>{day}</span>
                    })}</div> */}
                    <p>{temperature}</p>
                    <img width='64' src={image} alt={image}/>  
                </div>                              
            </div>
        );
                }
}
 

export default ForecastWeather;