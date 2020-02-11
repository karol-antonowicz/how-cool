import React from 'react';
import playIcon from '../../../assets/img/plyicon2.png';
import './AfterMovie.scss';

export const AfterMovie = () => {
    return (
        <div className='aftermovie-flex-container'>
            <div className='aftermovie-video'>
                <p className='aftermovie-video-title'>2019 <span className='aftermovie-video-title-bold'>Aftermovie</span></p>
                <img src={playIcon} className='aftermovie-video-icon' alt='aftermovie'></img>
            </div>
            <div className='aftermovie-text'>
                <h5 className='aftermovie-text-heading'>Infoshare - a place to be</h5>
                <p className='aftermovie-text-paragraph'>We have always wanted to create a space where we can share our ideas and passions. That is why and how we created Infoshare. A place with an access to worthy know-how. A place where everyone can simply share.</p>
                <p className='aftermovie-text-paragraph'>Share knowledge, ideas, passion, experience, know-how, tech-news, share emotions.</p>
                <p className='aftermovie-text-paragraph'>Make sure you'll be there next year!</p>
                <button className='aftermovie-btn-secondary'>Take part in this experience</button>
            </div>
        </div>
    )
}