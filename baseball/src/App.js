import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayComponent from "./components/DisplayComponent";
import DashboardComponent from "./components/DashboardComponent";

function App() {
  const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const handleChanges = () => {
        console.log(value);
        setValue(value + 1);
    };
    return [value, setValue, handleChanges];
    }

    const [ball, setBall, ballChanges] = useInput(0);
    const [strike, setStrike, strikeChanges] = useInput(0);
    const [foul, setFoul, foulChanges] = useInput(0);
    const [hit, setHit, hitChanges] = useInput(0);

  return (
    <div className="App">
      <DisplayComponent ball={ball} strike={strike} foul={foul} hit={hit}/>
      <DashboardComponent ballChanges={ballChanges} strikeChanges={strikeChanges} foulChanges={foulChanges} hitChanges={hitChanges}/>
    </div>
  );
}

export default App;
