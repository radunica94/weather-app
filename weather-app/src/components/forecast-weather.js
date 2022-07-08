import React, {useState} from 'react';
import './forecast-weather.scss';

function ForecastWeather(props) {  
    
    const[state,setState] = useState({
        temperature: '',
        moonPhase: '',
        icon: '',
        days: '' 
    });
    console.log(props);
    return (
        <div className="forecast-weather">
            <div>
                <h5>Moon Phase</h5>
                <p>{state.moonPhase}</p>
            </div> 
            <div>
                <h5>Day</h5>
                <p>{state.days}</p>
                {/* <div className='forecst-weather-days'>{days.map((day)=>{
                    return <span key={day}>{day}</span>
                })}</div> */}
                <p>{state.temperature}</p>
                <img width='64' src={state.icon} alt={state.icon}/>  
            </div>                              
        </div>
    );
}
 

export default ForecastWeather;