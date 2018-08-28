import React from 'react';
import { connect } from 'react-redux';
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
        this.audio = new Audio();
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.track !== null) {
            this.audio = new Audio(nextProps.track.src)
            this.audio.play();
        }
        if (nextProps.track === null) {
            this.audio = null;
        }
    }

    componentDidMount() {
        if (this.props.track){
            setInterval(() => {
                this.setState({
                    currentTime: Math.trunc(this.audio.currentTime),
                    close: false,
                })
            }, 1000)
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
        this.pause();
        this.audio.currentTime = 0;
    }

    handleCurrentTime = (time) => {
        console.log(time)
        this.audio.currentTime = time;
    }
   
    handleClose = () => {
        this.stop();
        this.setState({ close: true })
        setTimeout(() => this.setState({ close: false}), 400)
    }

    renderPlayer = () => {
        
        if (!this.props.track){
            return null;
        }
        const { track } = this.props;
        const { play, close } = this.state;
        return(
            <div className={!close ? "audio-player" : "audio-player close-player"}>
                <PlayerClose 
                    initiateClose={this.handleClose} />
                <PlayerLabel 
                    name={track.name} />
                <PlayerControls
                    play={play}
                    handlePlay={this.play}
                    handleStop={this.stop} />
                <PlayerProgress 
                    duration={this.audio.duration} 
                    currentTime={this.audio.currentTime} 
                    handleCurrentTime={this.handleCurrentTime} />
            </div>
        )
    }
    render() {
        return (<div>
            {this.renderPlayer()}
        </div>)
    }
}

function mapStateToProps({ track }){
    return { track };
}

export default connect(mapStateToProps)(Player);