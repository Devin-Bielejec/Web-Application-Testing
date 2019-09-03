import React, { useState } from "react";

const DisplayComponent = (props) => {
    
    return(
        <div className="counts">
            <p className="ball">Ball Count: {props.ball}</p>
            <p className="strike">Strike Count: {props.strike}</p>
            <p className="foul">Foul Count: {props.foul}</p>
            <p className="hit">Hit Count: {props.hit}</p>
        </div>
    )
}

export default DisplayComponent;
