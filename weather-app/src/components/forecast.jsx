import React from "react";
import './forecast.scss';
import {Switch} from 'antd';
function Forecast({
    weather: {
        date,
        maxtemp_c,
        maxtemp_f,
        mintemp_c,
        mintemp_f
    }
    
}){     
    const[toggle_maxTemp,setToggle_maxTemp] = React.useState(false);
    const toggler_maxTemp = () => {
        toggle_maxTemp? setToggle_maxTemp(false) : setToggle_maxTemp(true);
    }
    const[toggle_minTemp,setToggle_minTemp] = React.useState(false);
    const toggler_minTemp = () => {
        toggle_minTemp? setToggle_minTemp(false) : setToggle_minTemp(true);
    }
    return(
        <div className="container">
            <div className="container__forecast">                                  
                <div>
                    <div className="forecast__date">
                        <p>{`${date}`}</p>
                    </div>
                    <div className="container__forecast__temp">
                        <div>
                            <p>Max Temperature:</p>
                            <Switch
                            onClick={toggler_maxTemp}
                            className="details__temp__switch"
                            />
                            {toggle_maxTemp? <p>{`${maxtemp_f}`} °F</p>   : <p>{`${maxtemp_c}`} °C</p> }                                               
                        </div>
                        <div>
                            <p>Min Temperature:</p>
                            <Switch
                            onClick={toggler_minTemp}
                            className="details__temp__switch"
                            />
                            {toggle_minTemp? <p>{`${mintemp_f}`} °F</p>      : <p>{`${mintemp_c}`} °C</p>  }                        
                        </div>  
                    </div>                  
                </div>   
            </div>                                                
        </div>
    );
}
export default Forecast;