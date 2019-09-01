import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayComponent from "./components/DisplayComponent";
import DashboardComponent from "./components/DashboardComponent";

function App() {
  const useInput = (key, initialValue) => {
    const [value, setValue] = useState(initialValue);
    const handleChanges = () => {
        (key === "ball" && (value+1) === 4) ? setValue(0) : setValue(value+1);
        (key === "strike" && (value+1) === 3) ? setValue(0) : setValue(value+1);
        
        console.log(value);
        setValue(value + 1);
    };
    return [value, setValue, handleChanges];
    }

    const [ball, setBall, ballChanges] = useInput("ball", 0);
    const [strike, setStrike, strikeChanges] = useInput("strike", 0);
    const [foul, setFoul, foulChanges] = useInput("foul",0);
    const [hit, setHit, hitChanges] = useInput("hit", 0);

  return (
    <div className="App">
      <DisplayComponent ball={ball} strike={strike} foul={foul} hit={hit}/>
      <DashboardComponent ballChanges={ballChanges} strikeChanges={strikeChanges} foulChanges={foulChanges} hitChanges={hitChanges}/>
    </div>
  );
}

export default App;
