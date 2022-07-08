import React, { useState } from 'react';

function CurrentWeather(){
    
    const[state,setState] = useState({
        image: '',
        temperature: '',
        time: '',
        wind: '',
        pressure: '',        
        uv_index: ''
      });    
    return (
        <div className='current-weather'>
            <div>
                <h5>Temperature</h5>
                <p>{state.temperature}</p> 
            </div>                   
            <div>
                <img width='64' src={state.image} alt={state.image}/>
            </div>
            <div>
                <h5>Time</h5>
                <p className='current-weather-time'>Time: {state.time}</p>
            </div>
            <div>
                <h5>Precipitation Index</h5>
                <p>{state.precipitation_index}</p>
            </div>
            <div>
                <h5>Wind</h5>
                <p>{state.wind}</p>
            </div>
            <div>
                <h5>Pressure</h5>
                <p>{state.pressure}</p>
            </div>
            <div>
                <h5>UV Index</h5>
                <p>{state.uv_index}</p>
            </div>                
        </div>
    );
    
}
 
export default CurrentWeather;