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
                    <p>Temperature:</p>
                    <p> {`${temp_c}`} °C</p>
                    <p> {`${temp_f}`} °F</p>
                    <img src={`${icon}`} alt={`${icon}`}></img>                    
                </div>
                <div className="details">
                    <div className="details__precip">                    
                        <p>Precipitation index: </p>
                        <p>{`${precip_in}`} in</p>
                        <p>{`${precip_mm}`} mm</p>
                    </div>
                    <div className="details__wind">
                        <p>Wind:</p>
                        <p> {`${wind_kph}`} kph</p>
                        <p> {`${wind_mph}`} mph</p>
                    </div>
                    <div className="details__pressure">
                        <p>Pressure:</p>
                        <p> {`${pressure_in}`} in</p>
                        <p> {`${pressure_mb}`} mb</p>
                    </div>                
                    <div className="details__visibility">
                        <p>Visibility:</p>
                        <p> {`${vis_km}`} km</p>
                        <p> {`${vis_miles}`} miles</p>
                    </div>
                    <div className="details__uvIndex">
                        <p>UV Index: {`${uv}`}</p>
                    </div>
                </div>   
            </div>
        </div>
    );
}
export default Details;