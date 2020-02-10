import React from 'react';
import './MainWhoAreYou.scss';

export const MainWhoAreYou = props => {
    return (
        <div className='who-container'>
            <a href='https://infoshare.pl' >
            <h5 className='who-heading'>I'M {props.who.toUpperCase()}</h5>
            <div className='who-list'>
                <li className='who-list-paragraph'>{props.firstParagraph}</li>
                <li className='who-list-paragraph'>{props.secondParagraph}</li>
            </div>
            <a href='https://infoshare.pl'><span className='who-read'>read more</span></a>
            </a>
        </div>
    )
}