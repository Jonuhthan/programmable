import React from 'react';
import './StreakBar.css';

const StreakBar = ({ streakDays }) => {
  return (
    <div className="navbar">
      <h1>Start practicing and building your daily streak!</h1>
      <div className="streak-section">
        <span>🔥 {streakDays} day streak</span>
        <div className="progress-bar">
          <div className="progress" style={{ width: '70%' }}></div>
        </div>
        <span>70/100 daily</span>
      </div>
    </div>
  );
};

export default StreakBar;
