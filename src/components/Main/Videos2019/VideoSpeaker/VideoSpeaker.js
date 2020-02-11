import React from 'react';
import './VideoSpeaker.scss';
import playIcon from '../../../../assets/img/plyicon2.png';

export const VideoSpeaker = props => {
    return (
        <div className='videoSpeaker-container'>
            <div className='videoSpeaker-video' style={{ backgroundImage: `url(${props.backgroundPic})` }}>
                <img src={playIcon} className='videoSpeaker-video-icon' alt={props.alt}></img>
            </div>
            <div className={props.primary ? 'videoSpeaker-text-primary' : 'videoSpeaker-text-secondary'}>
                <p className='videoSpeaker-text-infoshare'>Infoshare 2019</p>
                <div className='videoSpeaker-text-container'>
                    <h5 className='videoSpeaker-text-name'>{props.name}</h5>
                    <p className='videoSpeaker-text-title'>{props.title}</p>
                </div>

            </div>
        </div>
    )
}