import React, { Component } from 'react';

class ForecastWeather extends Component {
    state = {  } 
    render() { 
        const temperature = this.props.currentTemperature;
        return (
            <div className="forecast-weather">
                <div>
                    <h5>Temperature</h5>
                    <p>{temperature}</p> 
                </div>  
            </div>
        );
    }
}
 

export default ForecastWeather;