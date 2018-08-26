import React, { Component } from 'react';
import Icon from '../Icons/Icon';

class PortfolioPlayer extends Component {
   constructor(props){
      super(props);

      this.state = { 
            player: null,
            paused: true,
            muted: false 
      }
   }

   componentDidMount(){
      this.setState({player: document.getElementById(this.props.id)})
   }

   play(){
      const {player} = this.state;
      player.paused 
            ? player.play()
            : player.pause();

      this.setState({ paused: !this.state.paused })
   }
   stop(){
      const {player} = this.state;
      player.pause();
      player.currentTime = 0;
      this.setState({muted: false, paused: true})
   }
   mute(){
      const {player} = this.state;
      player.muted=!player.muted
      this.setState({ muted: !this.state.muted })
   }

   renderControls(){
      if (this.state.player !== null) {
         const { paused, muted } = this.state;

         return(
            <div className="audio-controls">
               <div onClick={() => this.play()}>
                  <Icon css="audio-controls-play-pause" id={paused ? "play-button" : "pause"} />
               </div>
               <div onClick={() => this.stop()}>
                  <Icon css="audio-controls-stop audio-controls-small" id="stop" />
               </div>
               <div onClick={() => this.mute()}>
                  <Icon css="audio-controls-mute audio-controls-small" id={muted ? "mute" : "speaker"} />
               </div>
            </div>
         )
      }
   }



   render(){
      const { sample, id } = this.props;
      const { player } = this.state;
      return (
         <div className="container-audio">
            <audio id={id} src={sample}></audio>
            {this.renderControls()}
         </div>
      )
   }
}

export default PortfolioPlayer;



