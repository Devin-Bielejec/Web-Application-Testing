import React, { useState } from "react";

const DisplayComponent = () => {
    const useInput = (key, initialValue) => {
        const [value, setValue] = useLocalStorage(key, initialValue);
        const handleChanges = updatedValue => {
            setValue(updatedValue);
        };
    return [value, setValue, handleChanges];
    }

    const [ball, setBall, ballChanges] = useInput("ball", 0);
    const [strike, setStrike, strikeChanges] = useInput("strike", 0);
    const [foul, setFoul, foulChanges] = useInput("foul", 0);
    const [hit, setHit, hitChanges] = useInput("hit", 0);

    return(
        <div>
            <p class="ballCount">Ball Count: {ball}</p>
            <p class="strikeCount">Strike Count: {strike}</p>
            <p class="foulCount">Foul Count: {foul}</p>
            <p class="hitCount">Hit Count: {hit}</p>
        </div>
    )


}
