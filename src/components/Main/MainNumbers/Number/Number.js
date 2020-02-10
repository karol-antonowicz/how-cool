import React from 'react';
import './Number.scss';

export const Number = props => {
    return (
        <div className='number-container'>
            <h4 className='number-heading'>{props.title}</h4>
            <span className='number-number'>{props.number}</span>
        </div>
    )
}