import React from 'react';
import './MainWhoAreYou';

export const MainWhoAreYou = props => {
    return (
        <div className='who-container'>
            <h5 className='who-heading'>I'm {props.who}</h5>
            <div className='who-list'>
                <li className='who-list-paragraph'>{props.firstParagraph}</li>
                <li className='who-list-paragraph'>{props.secondParagraph}</li>
            </div>
            <span className='who-read'>read more</span>
        </div>
    )
}