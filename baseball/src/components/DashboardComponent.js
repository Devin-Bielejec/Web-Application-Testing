import React from "react";
import { checkPropTypes } from "prop-types";

const DashboardComponent = (props) => {
    return(
        <div className="buttons">
            <button className="strike" onClick={() => props.strikeChanges()}>Strike</button>
            <button className="ball" onClick={() => props.ballChanges()}>Ball</button>
            <button className="foul" onClick={() => props.foulChanges()}>Foul</button>
            <button className="hit" onClick={() => props.hitChanges()}>Hit</button>
        </div>
    )
}

export default DashboardComponent;