import React, { useState, useEffect } from 'react';
import './HeaderNav.scss';

const infoShareWebSiteAdress = 'https://www.infoshare.pl';
const gdanskWebSiteAdress = 'https://www.gdansk.pl'

export const HeaderNav = () => {

    const [menu, setMenu] = useState(false);
    const [bigScreen, setBigScreen] = useState(false)

    const toggleMenu = () => {
        console.log('dupa')
        setMenu(!menu)
    }

    const toggleBigScreen = () => {
        if (window.innerWidth > 1200) {
            setBigScreen(true)
            console.log('chuj')
        }
    }

    useEffect(()=> {
        setInterval(toggleBigScreen, 20);
    })

    const infoShareArr = ['Stages', 'Side Events', 'Venue', 'Become a Volunteer', 'Media', 'Hotels', 'Discover Gdańsk', 'FAQ'];
    const whyAttendArr = ['Developer / IT Specialist', 'Marketer', 'Executive / CxO', 'Startup', 'Investor / Business Angel', 'Tech Fan'];
    const speakersArr = ['Infoshare 2020 Speakers', 'Call for Speakers'];
    const startUpsArr = ['Startup Contest', 'Speed Dating', 'Why attend - Startup', 'Webinar'];
    const ourProjectsArr = ['AI & Data Science Conference / Warsaw', 'Pipeline Summit', 'Future3', 'GrowTech Magazine', 'Poland Prize', 'Global CEO Research', 'AI Developers raport', 'Cybersec Guide'];
    const aboutArr = ['Job', 'Blog', 'IS Team', 'Contact', 'RE:infoShare']

    const infoShareLinks = infoShareArr.map(el => (
        <li>
            <a className='drop-text' alt={el} href={`https://infoshare.pl/${el.split(" ").join("-").toLowerCase()}`}>{el}</a>
        </li>
    ))

    const whyAttendLinks = whyAttendArr.map(el => (
        <li>
            <a className='drop-text' alt={el} href={`https://infoshare.pl/${el.split(" ").join("-").toLowerCase()}`}>{el}</a>
        </li>
    ))

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
                <div className='menu-normal' style={menu?{display:'flex'}:{display:'none'}} >

                    <li className='dropdown'>
                        <a className='dropbtn' alt='dupa' href='https://dupa.pl' class='click-effect'>Infoshare 2020</a>
                        <ul className='dropbtn-content'>
                            {infoShareLinks}
                        </ul>
                    </li>

                    <li className='dropdown'>
                        <a className='dropbtn' alt='dupa' href='https://dupa.pl' class='click-effect'>Poeple</a>
                        <ul className='dropbtn-content'>
                            {whyAttendLinks}
                        </ul>
                    </li>
                    <li className='dropdown'>
                        <a className='dropbtn' alt='dupa' href='https://dupa.pl' class='click-effect'>About</a>
                        <ul className='dropbtn-content'>
                            {infoShareLinks}
                        </ul>
                    </li>

                    <li className='dropdown'>
                        <a className='dropbtn' alt='dupa' href='https://dupa.pl' class='click-effect'>Our Future</a>
                        <ul className='dropbtn-content'>
                            {whyAttendLinks}
                        </ul>
                    </li>
                    <li className='dropdown'>
                        <a className='dropbtn' alt='dupa' href='https://dupa.pl' class='click-effect'>Discor FAQ</a>
                        <ul className='dropbtn-content'>
                            {infoShareLinks}
                        </ul>
                    </li>

                    <li className='dropdown'>
                        <a className='dropbtn' alt='dupa' href='https://dupa.pl' class='click-effect'>66666</a>
                        <ul className='dropbtn-content'>
                            {whyAttendLinks}
                        </ul>
                    </li>
                    <li className='dropdown'>
                        <a className='dropbtn' alt='dupa' href='https://dupa.pl' class='click-effect'>Logi Baby</a>
                        <ul className='dropbtn-content'>
                            {infoShareLinks}
                        </ul>
                    </li>

                    <li className='dropdown'>
                        <a className='dropbtn' alt='dupa' href='https://dupa.pl' class='click-effect'>OK DUDE</a>
                        <ul className='dropbtn-content'>
                            {whyAttendLinks}
                        </ul>
                    </li>

                </div>
            </div>
        </div>
    )
}