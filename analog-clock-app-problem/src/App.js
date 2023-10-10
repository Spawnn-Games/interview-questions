// src/App.js
import React, { useState } from 'react';
import './App.css';
import Clock from './Clock.js'

function App() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  // Update the time when user input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTime({ ...time, [name]: parseInt(value, 10) });
  };

  return (
    <div className="App">
      <h1>Analog Clock</h1>
      <div className="time-input">
        <input
          type="number"
          name="hours"
          value={time.hours}
          onChange={handleInputChange}
        />
        :
        <input
          type="number"
          name="minutes"
          value={time.minutes}
          onChange={handleInputChange}
        />
        :
        <input
          type="number"
          name="seconds"
          value={time.seconds}
          onChange={handleInputChange}
        />
      </div>
      <Clock {...time} />
      <div>
        <text>Angle Between hour and minute = {}</text>
        <text>Angle Between hour and second = {}</text>
        <text>Angle Between minute and second = {}</text>
      </div>
    </div>
  );
}

export default App;
