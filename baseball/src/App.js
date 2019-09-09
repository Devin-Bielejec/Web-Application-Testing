import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayComponent from "./components/DisplayComponent";
import DashboardComponent from "./components/DashboardComponent";

function App() {
  const useInput = (key, initialValue) => {
    const [value, setValue] = useState(initialValue);
    return [value, setValue];
    }

  const [ball, setBall] = useInput("ball", 0);
  const [strike, setStrike] = useInput("strike", 0);
  const [hit, setHit] = useInput("hit", 0);
  const [foul, setFoul] = useInput("foul",0);

  const resetAll = () => {
    setBall(0);
    setStrike(0);
    setFoul(0);
    setHit(0);
  }

  const foulChanges = () => {
    if (strike === 0) {
      setStrike(1);
    } else if (strike === 1) {
      setStrike(2);
    }
    setFoul(foul+1)
  }

  const hitChanges = () => {
    resetAll();
  }

  const ballChanges = () => {
    if (ball === 3) {
      resetAll();
    } else {
      setBall(ball+1);
    }
  }

const strikeChanges = () => {
  if (strike === 2) {
    resetAll();
  } else {
    setStrike(strike+1);
  }
}
    
  return (
    <div className="App">
      <DisplayComponent ball={ball} strike={strike} foul={foul} hit={hit}/>
      <DashboardComponent ballChanges={ballChanges} strikeChanges={strikeChanges} foulChanges={foulChanges} hitChanges={hitChanges}/>
    </div>
  );
}

export default App;
