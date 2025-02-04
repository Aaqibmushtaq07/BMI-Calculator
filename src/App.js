import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [height, setHeight] = useState(180); // Height in cm
  const [weight, setWeight] = useState(50); // Weight in kg
  const [bmi, setBmi] = useState(0);

  // Function to calculate BMI
  useEffect(() => {
    const heightInMeters = height / 100; // Convert height to meters
    const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2); // BMI formula
    setBmi(calculatedBmi); // Update BMI state
  }, [height, weight]); // Recalculate BMI whenever height or weight changes

  const onWeightChange = (e) => {
    setWeight(Number(e.target.value)); // Convert to number
  };

  const onHeightChange = (e) => {
    setHeight(Number(e.target.value)); // Convert to number
  };

  return (
    <div className="div">

   
    <main className="main">
      <h1>BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight} KG</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          value={weight}
          onChange={onWeightChange}
        />
        <p className="slider-output">Height: {height} CM</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="100"
          max="250"
          value={height}
          onChange={onHeightChange}
        />
      </div>
      <div className="output-section">
        <p>YOUR BMI IS</p>
        <p className="output">{bmi}</p>
      </div>
    </main>
    </div>
  );
};
export default App;
