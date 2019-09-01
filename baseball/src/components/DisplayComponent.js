import React, { useState } from "react";

const DisplayComponent = (props) => {
    
    return(
        <div>
            <p class="ballCount">Ball Count: {props.ball}</p>
            <p class="strikeCount">Strike Count: {props.strike}</p>
            <p class="foulCount">Foul Count: {props.foul}</p>
            <p class="hitCount">Hit Count: {props.hit}</p>
        </div>
    )
}

export default DisplayComponent;
