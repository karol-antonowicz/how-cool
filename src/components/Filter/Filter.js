import React from 'react';
import './Filter.scss';

export const Filter = props => {

    return (
        <button 
        className={props.secondary?'btn-secondary':'btn-primary'}
        style={props.uppercase?{textTransform: 'uppercase'}:{textTransform:'none'}}
        >
            {props.icon?(<img src={props.icon}/>):null}
            {props.title}
            
            </button>
    )
}