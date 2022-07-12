import React from "react";
import './location.scss';

function TimeAndLocation({weather: {date,country,name,region,tz_id}}){

    return(
        <div className="container">            
            <div className="container__city">
                <div className="city__name">
                    <p>{`${name}`}</p>            
                    <p>{`${country},${tz_id}`}</p>
                </div>
            </div>
        </div>
    );
}
export default TimeAndLocation;