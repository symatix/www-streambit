import React from 'react';
import Icon from '../Icons/Icon';

class Player extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         play: false,
         pause: true,
         muted: false,
         currentTime: 0
      }
      this.audio = new Audio("portfolio/music/radost1.mp3");
   }

   componentDidMount() {
      setInterval(() => {
         this.setState({
            currentTime: Math.trunc(this.audio.currentTime)
         })
      }, 1000)
   }

   play = () => {
      this.setState({play: true, pause: false})
      this.audio.play();
   }

   pause = () => {
      this.setState({play: false, pause: true})
      this.audio.pause();
   }

   stop = () => {
      this.pause();
      this.audio.currentTime = 0;
   }
   
   mute = () => {
      this.audio.muted = !this.audio.muted;
      this.setState({ muted: !this.state.muted })
   }

   handleCurrentTime = (e) => {
       console.log(e.target)
       this.audio.currentTime = e.target.value;
   }

   displayTime = (time) => {
      const seconds = Math.trunc(time);
      const m = Math.floor(seconds / 60);
      if (m < 0) {
         return `${'0'}:${seconds}`;
      }

      const s = seconds - m * 60;
      return `${m}:${s}`
   }

    playProgress = () => {
       if (this.audio.duration) {
           return <input type="range" min="0" max={this.audio.duration} value={this.audio.currentTime} className="slider" id="myRange" onChange={this.handleCurrentTime}/>
       }
       return null;
   }

   render() {
      return (
         <div className="audio-player">
            <div className="row">
               <div className="col-sm-3 audio-player-controls">
                  <div onClick={this.state.play ? this.pause : this.play}>
                     <Icon 
                        id={this.state.play ? "pause" : "play-button"}
                        fill="rgba(255,255,255,0.9)"/>
                  </div>
                  <div onClick={this.stop}>
                     <Icon 
                        id={"stop"}
                        onClick={this.stop}
                        fill="rgba(255,255,255,0.9)"/>
                  </div>
                  <div onClick={this.mute}>
                     <Icon 
                        id={this.state.muted ? "mute" : "speaker"}
                        onClick={this.mute}
                        fill="rgba(255,255,255,0.9)"/>
                  </div>
               </div>
               <div className="col-sm-6 audio-player-progress">
                  {this.playProgress()}
               </div>
               <div className="col-sm-3 audio-player-info">
                  <span>{this.displayTime(this.state.currentTime)} / {this.audio.duration ? this.displayTime(this.audio.duration) : '0:0'}</span>
               </div>
            </div>
         </div>
      );
   }
}

export default Player;