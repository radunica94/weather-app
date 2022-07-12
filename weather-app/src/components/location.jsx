import React from "react";

function TimeAndLocation({weather: {date,country,name,region,tz_id}}){

    return(
        <div>            
            <div>
                <p>{`${name},${country}`}</p>            
                <p>{`${region},${tz_id}`}</p>
            </div>
        </div>
    );
}
export default TimeAndLocation;