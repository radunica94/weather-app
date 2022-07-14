import React from "react";
import './location.scss';

function TimeAndLocation({weather: {localtime,country,name,tz_id}}){

    return(
        <div className="container">            
            <div className="container__location">
                <div className="city__name">
                    <p>{`${localtime}`}</p>
                    <p>{`${name}`}</p>            
                    <p>{`${country},${tz_id}`}</p>
                </div>
            </div>
        </div>
    );
}
export default TimeAndLocation;