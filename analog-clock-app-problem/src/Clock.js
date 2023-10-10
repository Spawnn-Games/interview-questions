// src/Clock.js
import React from 'react';
import './Clock.css';
import { ClockHandPositions } from './ComputeAngles';

const Clock = ({ hours, minutes, seconds }) => {
  // Calculate rotation angles for the clock hands
  const [hourDeg, minuteDeg, secondDeg] = ClockHandPositions();

  // Apply rotation transforms to clock hands
  const hourStyle = { transform: `rotate(${hourDeg + 90}deg)` };
  const minuteStyle = { transform: `rotate(${minuteDeg + 90}deg)` };
  const secondStyle = { transform: `rotate(${secondDeg + 90}deg)` };

  return (
    <div className="clock">
      <div className="hand hour-hand" style={hourStyle}></div>
      <div className="hand minute-hand" style={minuteStyle}></div>
      <div className="hand second-hand" style={secondStyle}></div>
    </div>
  );
};

export default Clock;
