import React from 'react';
import {Number} from './Number/Number';
import './MainNumbers.scss';

export const MainNumbers = () => {
    return (
        <React.Fragment>
        <div className='main-number-container'>
            <Number title='Speakers' number={200}/>
            <Number title='Speeches' number={176}/>
            <Number title='Startups' number={350}/>
            <Number title='Side Events' number={10}/>
        </div>
        <div className='main-number-text-container'>
        <h5 className='main-number-text'>6000+ ATTendees and you can be one of them. why?</h5>
        </div>
        </React.Fragment>
    )
}