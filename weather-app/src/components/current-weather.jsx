import React, { useState } from 'react';

function CurrentWeather(){
    //const[location,setLocation] = useState('');
    const[image,setImage] = useState('');
    const[temperature,setTemperature] = useState('');
    const[time,setTime] = useState('');
    const[air_quality,setAirQuality] = useState('');
    const[precipitation_index,setPrecipitationIndex] = useState('');
    const[wind,setWind] = useState('');
    const[pressure,setPressure] = useState('');
    const[uv_index,setUvIndex] = useState('');
        
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
 
export default CurrentWeather;