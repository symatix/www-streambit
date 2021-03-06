import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from '../Icons/Icon';
import { playTrack, removeTrack } from '../../actions';
// img, name, mood, id


class VoicesCard extends Component {
   state = { player: false }

   render(){
      const { img, name, mood, sample } = this.props;
      return (
         <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="team-item wow fadeInUp" data-wow-delay="0.2s" onClick={() => this.props.playTrack(sample)}>
               <div className="team-img">
                  <img className="img-fluid" src={img} alt="" />
                  <div className="team-overlay">
                     <div className="overlay-social-icon text-center">
                        <ul className="social-icons voices-ear">
                           <Icon id={"ear"} width={"80px"} height={"80px"} fill="rgba(255, 255, 255, 0.9)" />
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="info-text">
                  <h3><a href="index.html">{name}</a></h3>
                  <p>{mood}</p>
               </div>
            </div>
         </div>
      )
   }
}

export default connect(null, { playTrack, removeTrack })(VoicesCard);