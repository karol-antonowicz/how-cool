import React, { useState } from 'react';
import './HeaderNav.scss';

const infoShareWebSiteAdress = 'https://www.infoshare.pl';
const gdanskWebSiteAdress = 'https://www.gdansk.pl'

export const HeaderNav = () => {

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        console.log('dupa')
        setMenu(!menu)
    }

    return (
        <div className='header-nav'>
            <div className='wrapper'>
            <div className='top-header'>
                <div className='logo'>
                    <a href={infoShareWebSiteAdress} className='infoshare-logo' alt='infoShare' />
                    <a href={gdanskWebSiteAdress} className='gdansk-logo' alt='Gdansk city' />
                </div>
                <div className='menu'>
                    <div className='menu-btns'>
                        <button className='menu-btn-register'>REGISTER for Infoshare 2020</button>
                        <button className='menu-btn-login'>Login</button>
                    </div>
                    <a className='menu-hamburger-icon' onClick={() => toggleMenu()} >
                    </a>
                </div>
            </div>
            <div className='menu-dropdown' style={menu ? { display: 'flex' } : { display: 'none' }}>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
            <div className='bottom-nav'>
                <ul>
                    <li>
                        <a>infoShare 2020</a>
                        <ul>
                            <li>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>Why attend</a>
                        <ul>
                            <li>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>Outline agenda</a>
                        <ul>
                            <li>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>Speakers</a>
                        <ul>
                            <li>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>Become a partner</a>
                        <ul>
                            <li>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>Startups</a>
                        <ul>
                            <li>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>Our projects</a>
                        <ul>
                            <li>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>About</a>
                        <ul>
                            <li>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                                <a>Stages</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}