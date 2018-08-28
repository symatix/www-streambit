import React from 'react';

const PlayerProgress = (props) => {
    const { currentTime, duration, handleCurrentTime } = props;
    return (
        <div className="audio-player-progress">
            <input 
                id="casette-progress" 
                type="range" 
                min="0" 
                max={duration || 100} 
                value={currentTime || 0} 
                onChange={(e) => handleCurrentTime(e.target.value)}/>
        </div>
    );
}

export default PlayerProgress;