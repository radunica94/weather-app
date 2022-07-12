import React from "react";
import './details.scss';

function Details({
    weather: {
        temp_c,
        temp_f,
        pressure_in,
        pressure_mb,
        uv,
        wind_kph,
        wind_mph,
        precip_in,
        precip_mm,
        vis_km,
        vis_miles,
        icon
    }
}){
    return(
        <div className='container'>
            <div className="container__details">
                <div className="details__temp">
                    <p>Temperature: {`${temp_c}`} °C</p>
                    <img src={`${icon}`} alt={`${icon}`}></img>                    
                </div>
                <div className="details__left">
                    <div>                    
                        <p>Precipitation index: {`${precip_in}`} in</p>
                    </div>
                    <div>
                        <p>Wind: {`${wind_kph}`} kph</p>
                    </div>
                    <div>
                        <p>Pressure: {`${pressure_in}`} in</p>
                    </div>
                </div>
                <div className="details__right">
                    <div>
                        <p>Visibility: {`${vis_km}`} km</p>
                    </div>
                    <div>
                        <p>UV Index: {`${uv}`}</p>
                    </div>
                </div>   
            </div>
        </div>
    );
}
export default Details;