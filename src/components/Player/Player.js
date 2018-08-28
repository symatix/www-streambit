import React from 'react';

class Player extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         play: false,
         pause: true,
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

   displayTime = (time) => {
      const seconds = Math.trunc(time);
      const m = Math.floor(seconds / 60);
      if (m < 0) {
         return `${'0'}:${seconds}`;
      }

      const s = seconds - m * 60;
      return `${m}:${s}`
   }

   render() {
      return (
         <div>
            <h1>{this.displayTime(this.state.currentTime)}
               / {this.displayTime(this.audio.duration)}</h1>
            <button onClick={this.play}>Play</button>
            <button onClick={this.pause}>Pause</button>
            <button onClick={this.stop}>Stop</button>
         </div>
      );
   }
}

export default Player;