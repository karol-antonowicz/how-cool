import React from 'react';
import './Speaker.scss';
import { inspireIcon } from '../Speakers'
import { growthIcon } from '../Speakers'
import { marketingIcon } from '../Speakers'
import { devtrendsIcon } from '../Speakers'
import { frontEndIcon } from '../Speakers'
import { deeptechIcon } from '../Speakers'
import { backEndIcon } from '../Speakers'

const speakerPhoto = 'https://infoshare.pl/system/cache/img/paris-buttfield-addison-20-74dntvlmmoj0.jpg';
const filters = ['inspire', 'growth', 'marketing', 'devtrends', 'front-end', 'deeptech', 'backend']
const primaryColor = '#FE4B53'
const secondaryColor = '#21DFDF'
export const Speaker = props => {

    return (
        <div className='speaker-container'>
            <img className='speaker-photo' src={props.photo} alt='speaker' />
            <div className='speaker-info'>
                <div className={(props.technology === filters[0] || props.technology === filters[1] || props.technology === filters[2]) ? 'speaker-filter-primary' : 'speaker-filter-secondary'}>
                    <img className='speaker-filter-logo' alt='technology' src={props.filterLogo} />
                </div>
                <p className='speaker-name'>{props.speakerName}</p>
                <p className='speaker-company'>{props.speakerCompany}</p>
            </div>
        </div>
    )
}