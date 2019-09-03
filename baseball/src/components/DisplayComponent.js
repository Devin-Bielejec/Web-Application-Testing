import React, { useState } from "react";

const DisplayComponent = (props) => {
    
    return(
        <div>
            <p>Ball Count: {props.ball}</p>
            <p>Strike Count: {props.strike}</p>
            <p>Foul Count: {props.foul}</p>
            <p>Hit Count: {props.hit}</p>
        </div>
    )
}

export default DisplayComponent;
