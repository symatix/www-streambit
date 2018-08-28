import React from 'react';

const PlayerLabel = (props) => {
   const {name} = props;
   return (
      <div className="audio-player-info">
         {name}
      </div>
   );
}

export default PlayerLabel;