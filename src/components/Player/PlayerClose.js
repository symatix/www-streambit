import React from 'react';
import { connect } from 'react-redux';
import { removeTrack } from '../../actions';

const PlayerClose = (props) => {
   return (
      <div className="audio-close" onClick={props.initiateClose}>
         <label className="switch">
            <input type="checkbox"/>
            <span className="slider"></span>
         </label>
      </div>
   );
}

export default connect(null, {removeTrack})(PlayerClose);