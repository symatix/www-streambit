import React from 'react';
import { connect } from 'react-redux';
import { removeTrack } from '../../actions';

const PlayerClose = (props) => {

   const handleClose = () => {
      props.initiateClose();
      setTimeout(() => 
         props.removeTrack()
      , 350)
   }

   return (
      <div className="audio-close" onClick={handleClose}>
         <label className="switch">
            <input type="checkbox"/>
            <span className="slider"></span>
         </label>
      </div>
   );
}

export default connect(null, {removeTrack})(PlayerClose);