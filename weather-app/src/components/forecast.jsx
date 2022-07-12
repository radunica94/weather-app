import React from "react";

function Forecast({title, items}){
    
    return(
        <div className="container">
            <div className="container__city">
                <p>{title}</p>
                <p>Forecast</p>
            </div>
            {/* {items.map((item, index) => (
                <div key={index}>
                    <p>{item.title}</p>
                </div>
            ))} */}           
        </div>
    );
}
export default Forecast;