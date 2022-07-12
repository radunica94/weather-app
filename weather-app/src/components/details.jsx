import React from "react";

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
        <div>
            <div>
                <p>Details</p>
            </div>
            <div>
                <p>Temperature:</p>
                <p>{`${temp_c}`} °C</p>
                <img src={`${icon}`} alt={`${icon}`}></img>
            </div>
            <div>
                <div>
                    <p>Precipitation index:</p>
                    <p>{`${precip_in}`} in</p>
                </div>
                <div>
                    <p>Wind:</p>
                    <p>{`${wind_kph}`} kph</p>
                </div>
                <div>
                    <p>Pressure</p>
                    <p>{`${pressure_in}`} in</p>
                </div>
            </div>
            <div>
                <div>
                    <p>Visibility:</p>
                    <p>{`${vis_km}`} km</p>
                </div>
                <div>
                    <p>UV Index:</p>
                    <p>{`${uv}`}</p>
                </div>
            </div>
        </div>
    );
}
export default Details;