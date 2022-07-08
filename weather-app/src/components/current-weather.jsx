import React, { useState } from 'react';

function CurrentWeather(props){
    
    const[state,setState] = useState({
        icon: '',
        temperature: '',
        wind: '',
        pressure: '',        
        uv_index: ''
      });    
      console.log(props);
    return (
        <div className='current-weather'>
            <div>
                <h5>Temperature</h5>
                <p>{state.temperature}</p> 
            </div>                   
            <div>
                <img width='64' src={state.icon} alt={state.icon}/>
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