import React from 'react';
import { connect } from 'react-redux';
import { removeTrack } from '../../actions';
import PlayerClose from './PlayerClose';
import PlayerLabel from './PlayerLabel';
import PlayerProgress from './PlayerProgress';
import PlayerControls from './PlayerControls';

const sample = {
    artist: "Radost!",
    title: "Vikipedija",
    src: "portfolio/music/radost1.mp3"
}

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            close: false,
            player: null,
            play: true,
            currentTime: 0
        }
        this.audio = new Audio(this.props.track.src);
    }

    componentDidMount() {
        this.audio.play();
        setInterval(() => {
            this.setState({
                currentTime: Math.trunc(this.audio.currentTime),
                close: false,
            })
        }, 1000)
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.track.src)
        if (nextProps.track !== this.props.track){
            this.audio.pause();
            this.audio = new Audio(nextProps.track.src)
            this.audio.play();
        }
    }


    play = () => {
        this.setState({ play: true })
        this.audio.play();
    }

    pause = () => {
        this.setState({play: false })
        this.audio.pause();
    }

    stop = () => {
        let playrate = 1;
        this.audio.playbackRate = -1
        setTimeout(() => {
            this.audio.pause();
            this.audio.playbackRate = 1;
            this.audio.currentTime = 0;
            this.setState({ play: false })
        }, 500)
        // const dropSpeed = setInterval(() => {
        //     this.audio.playbackRate = playrate;
        //     playrate -= 0.01
        //     console.log(playrate)
        //     if (playrate <= 0.1) {
        //         clearInterval(dropSpeed)
        //         playrate = 1;                
        //         this.audio.pause();
        //         this.audio.playbackRate = 1;
        //         this.audio.currentTime = 0;
        //         this.setState({ play: false })
        //     }
        // }, 5)
    }

    handleCurrentTime = (time) => {
        console.log(time)
        this.audio.currentTime = time;
    }
   
    handleClose = () => {
        this.audio.pause();
        this.setState({ close: true })
        setTimeout(() => {
            this.props.removeTrack()
        }, 350)
    }

    render() {
        const { track } = this.props;
        const { play, close } = this.state;
        return(
            <div 
                id="player-component"
                className={!close ? "audio-player open-player" : "audio-player close-player"}>
                <PlayerClose 
                    initiateClose={this.handleClose} />
                <PlayerLabel 
                    name={track.name} />
                <PlayerControls
                    play={play}
                    handlePlay={this.play}
                    handleStop={this.stop} />
                {this.audio 
                    ? <PlayerProgress 
                        duration={this.audio.duration} 
                        currentTime={this.audio.currentTime} 
                        handleCurrentTime={this.handleCurrentTime} />
                    : null}
            </div>
        )
    }
}

export default connect(null, {removeTrack})(Player);