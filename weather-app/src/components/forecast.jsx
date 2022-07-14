import React from "react";
import './forecast.scss';

function Forecast({
    weather: {
        date,
        maxtemp_c,
        maxtemp_f,
        mintemp_c,
        mintemp_f
    }
    
}){     
   
    return(
        <div className="container">
            <div className="container__forecast">                                  
                <div>
                    <div className="forecast__date">
                        <p>{`${date}`}</p>
                    </div>
                    <div>
                        <p>Max Temperature:</p>
                        <p>{`${maxtemp_c}`} °C</p> 
                        <p>{`${maxtemp_f}`} °F</p> 
                    </div>
                    <div>
                        <p>Min Temperature:</p>
                        <p>{`${mintemp_c}`} °C</p> 
                        <p>{`${mintemp_f}`} °F</p>    
                    </div>                    
                </div>   
            </div>                                                
        </div>
    );
}
export default Forecast;