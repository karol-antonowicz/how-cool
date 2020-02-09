import React from 'react';
import './MainHero.scss';

const infoShareWhiteLogo = 'https://infoshare.pl/system/themes/infoshare/img/logo-infoshare2-white.png';
const infoShareMovie = 'https://infoshare.pl/infoshare/_media/video/infoshare2020-header-video-dark-cmprsd.mp4'

export const MainHero = () => {
    return (
        <div className='hero'>
            <div className='hero-video'>
                <video autoPlay className='video' loop='loop' muted preload='auto'>
                    <source src={infoShareMovie} type='video/mp4' />
                </video>
            </div>
            <div className='hero-text'>
                <img src={infoShareWhiteLogo} className='text-logo'/>
                <div className='text-info'>
                    <h1 className='info-info-heading'>the biggest tech conference in cee</h1>
                    <h1 className='info-info-heading'>Gdańsk, AMberexpo, June 19 - 21, 2021</h1>
                    <h2 className='info-info heading secondary'>Join a truly innovative society and get inspired by the world of technology</h2>
                    <button className='info-btn-ticket'>Grab your Infoshare ticket</button>
                </div>
            </div>
        </div>
    )
}
