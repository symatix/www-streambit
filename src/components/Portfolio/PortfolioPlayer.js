import React from 'react';
import {connect} from 'react-redux';
import Icon from '../Icons/Icon';
import {playTrack} from '../../actions/index';

const PortfolioPlayer = (props) => {
   const { playTrack, track } = props;

   return (
      <div className="container-audio">
         <div className="audio-controls">
            <div onClick={() => playTrack(track)}>
               <Icon css="audio-controls-play-pause" id={"speaker"}/>
            </div>
         </div>
      </div>
   )
}

export default connect(null, {playTrack})(PortfolioPlayer);
