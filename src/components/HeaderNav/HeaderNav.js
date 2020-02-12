import React, { useState } from 'react';
import plus from '../../assets/img/plus.png';
import minus from '../../assets/img/minus.png';
import './HeaderNav.scss';



export const HeaderNav = () => {

    const [menu, setMenu] = useState(false);
    const [visible, setVisible] = useState("")

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const isVisible = id => {
        setVisible(id)
    }

    const menuOptions = ['InfoShare 2020', 'Why Attend', 'Outline Agenda', 'Speakers', 'Become a Partner', 'Startups', 'Our Projects']
    const infoShareArr = ['Stages', 'Side Events', 'Venue', 'Discover Gdańsk', 'FAQ'];

    const infoShareWebSiteAdress = 'https://www.infoshare.pl';
    const gdanskWebSiteAdress = 'https://www.gdansk.pl'

    const infoShareLinks = infoShareArr.map(el => (
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
                <div className={menu ? 'menu-normal' : 'menu-alt'}>

                    {menuOptions.map((el, index) => {
                        return (
                            <div key={index}>
                                <li className='dropdown'>
                                    <div className='drop-wrapper'>
                                        <a className='dropbtn' alt='dupa' href='https://infoshare.pl'>{el}</a>
                                        <div className={(visible===index)?'clickme-close':'clickme'} onClick={() => {
                                            if (index === visible) {
                                                isVisible("")
                                            } else {
                                                isVisible(index)
                                            }
                                        }
                                        } />
                                    </div>
                                    <ul className={(visible === index) ? 'dropbtn-content' : 'dropbtn-content dropik'}>
                                        {infoShareLinks}
                                    </ul>
                                </li>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}