import React from "react";

function Forecast({title, items}){
    
    return(
        <div>
            <div>
                <p>{title}</p>
            </div>
            {/* {items.map((item, index) => (
                <div key={index}>
                    <p>{item.title}</p>
                </div>
            ))} */}
            <div>
                <p>Forecast</p>
            </div>
        </div>
    );
}
export default Forecast;