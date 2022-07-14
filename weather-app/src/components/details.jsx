import React from "react";
import './details.scss';
import {Switch} from 'antd';

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
    const[toggle_temp,setToggle_temp] = React.useState(false);
    const[toggle_pressure,setToggle_pressure] = React.useState(false);
    const[toggle_wind,setToggle_wind] = React.useState(false);
    const[toggle_precip,setToggle_precip] = React.useState(false);
    const[toggle_vis,setToggle_vis] = React.useState(false);

    const toggler_temp = () => {
        toggle_temp? setToggle_temp(false) : setToggle_temp(true);
    }
    const toggler_precip_index = () => {
        toggle_precip? setToggle_precip(false) : setToggle_precip(true);
    }
    const toggler_wind = () => {
        toggle_wind? setToggle_wind(false) : setToggle_wind(true);
    }
    const toggler_pressure = () => {
        toggle_pressure? setToggle_pressure(false) : setToggle_pressure(true);
    }
    const toggler_visibility = () => {
        toggle_vis? setToggle_vis(false) : setToggle_vis(true);
    }
    return(
        <div className='container'>
            <div className="container__details">
                <div className="details__temp">
                    <p>Temperature:</p>
                    <Switch
                        onClick={toggler_temp}
                        className="details__temp__switch"
                    />
                    {toggle_temp? <p>{temp_f}°F</p> : <p>{temp_c}°C</p>}
                    <img src={`${icon}`} alt={`${icon}`}></img>                    
                </div>
                <div className="details">
                    <div className="details__precip">                    
                        <p>Precipitation index: </p>
                        <Switch
                        onClick={toggler_precip_index}
                        className="details__temp__switch"
                        />
                        {toggle_precip? <p>{`${precip_in}`} in</p> : <p>{`${precip_mm}`} mm</p>}                        
                    </div>
                    <div className="details__wind">
                        <p>Wind:</p>
                        <Switch
                        onClick={toggler_wind}
                        className="details__temp__switch"
                        />
                        {toggle_wind? <p> {`${wind_kph}`} kph</p> : <p> {`${wind_mph}`} mph</p>}                       
                        
                    </div>
                    <div className="details__pressure">
                        <p>Pressure:</p>
                        <Switch
                        onClick={toggler_pressure}
                        className="details__temp__switch"
                        />
                        {toggle_pressure? <p> {`${pressure_in}`} in</p> : <p> {`${pressure_mb}`} mb</p>}                            
                        
                    </div>                
                    <div className="details__visibility">
                        <p>Visibility:</p>
                        <Switch
                        onClick={toggler_visibility}
                        className="details__temp__switch"
                        />
                        {toggle_vis? <p> {`${vis_km}`} km</p> : <p> {`${vis_miles}`} miles</p>}                           
                        
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