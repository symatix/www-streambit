import React from 'react';
import Icon from '../Icons/Icon';

const iconProps = {
    fill: 'rgba(255,255,255,0.9)',
    width:'50px',
    height: '50px'
}

const PlayerControls = (props) => {
    const { width, height, fill } = iconProps;
    const { play, handlePlay, handleStop } = props;

    return (
        <div className="audio-player-controls">
            <div onClick={play ? handleStop : handlePlay}>
                <Icon
                    css={play ? "rotate" : ""}
                    id={play ? "casette-pause" : "casette-play-button"}
                    fill={fill} width={width} height={height} />
            </div>
            <div onClick={handleStop}>
                <Icon
                    css={play ? "rotate" : ""}
                    id={"casette-stop"}
                    fill={fill} width={width} height={height} />
            </div>
        </div>
    );
}

export default PlayerControls;