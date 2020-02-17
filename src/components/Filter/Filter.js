import React from 'react';
import './Filter.scss';

export const Filter = props => {
const filters = ['devtrends', 'front-end', 'deeptech', 'backend']

const whatClass = () => {
    if (props.active===props.title && filters.includes(props.title)) {
        return 'btn-secondary-active' 
    } else if (props.active!==props.title && filters.includes(props.title)) {
        return 'btn-secondary'
    } else if (props.active===props.title && !filters.includes(props.title)) {
        return 'btn-primary-active' 
    } else {
        return 'btn-primary'
    }
}
    return (
        <button 
        className={whatClass()}
        style={props.uppercase?{textTransform: 'uppercase'}:{textTransform:'none'}}
        >
            {props.icon?(<img alt='icon' src={props.icon}/>):null}
            {props.title}
            
            </button>
    )
}