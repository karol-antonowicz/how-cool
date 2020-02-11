import React from 'react';
import './Videos2019.scss';
import venkat from '../../../assets/img/devtrends_venkat.jpg';
import sadek from '../../../assets/img/inspire_sadek.jpg';
import tkaczyk from '../../../assets/img/marketing_tkaczyk.jpg';
import {VideoSpeaker} from './VideoSpeaker/VideoSpeaker';

export const Videos2019 = () => {

const videoSpeakersArray = [
    {backgroundPic: sadek, name: 'Michał Sadowski', title: '7 Things I Wish To Knew when Starting a Business'},
    {backgroundPic: venkat, name: 'Venkat Subramaniam', title: 'It could be heaven or it could be hell'},
    {backgroundPic: tkaczyk, name: 'Paweł Tkaczyk', title: 'Marketing w czasach zero-click'},
]
    return (
        <div className='videos2019-wrapper'>
            <h5 className='videos2019-heading'>Infoshare 2019 <span className='videos2019-heading-span'>videos</span></h5>
            <section className='videos2019-videoSpeaker-container'>

            {videoSpeakersArray.map((speakerVideo, index)=>{
                if (index % 2 === 0) {
                return (
                    <VideoSpeaker alt={speakerVideo.name} backgroundPic={speakerVideo.backgroundPic} name={speakerVideo.name} title={speakerVideo.title} primary />
                )
                } else { 
                    return (
                    <VideoSpeaker alt={speakerVideo.name} backgroundPic={speakerVideo.backgroundPic} name={speakerVideo.name} title={speakerVideo.title} />
                    )
                }
            })}
            </section>
            <button className='btn-more-vids'>More infoShare 2019 Videos</button>
        </div>
    )
}