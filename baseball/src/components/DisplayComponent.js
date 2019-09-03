import React, { useState } from "react";

const DisplayComponent = (props) => {
    
    return(
        <div className="counts">
            <p className="ball" value={props.ball}>Ball Count: {props.ball}</p>
            <p className="strike" value={props.strike}>Strike Count: {props.strike}</p>
            <p className="foul" value={props.foul}>Foul Count: {props.foul}</p>
            <p className="hit" value={props.hit}>Hit Count: {props.hit}</p>
        </div>
    )
}

export default DisplayComponent;
