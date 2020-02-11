import React, { useState } from 'react';
import { Filter } from '../../Filter/Filter';
import { Speaker } from './Speaker/Speaker';
import './Speakers.scss';

export const inspireIcon = 'https://infoshare.pl/system/cache/img/inspire-w-2lg49qa1llh0.png';
export const growthIcon = 'https://infoshare.pl/system/cache/img/growth-w-j22oo1frrkk0.png';
export const marketingIcon = 'https://infoshare.pl/system/cache/img/marketing-w-5o308cmmnig0.png';
export const devtrendsIcon = 'https://infoshare.pl/system/cache/img/devtrends-w-1ijsihtk3rcg.png';
export const frontEndIcon = 'https://infoshare.pl/system/cache/img/front-end-w-53fdoel8qnd0.png';
export const deeptechIcon = 'https://infoshare.pl/system/cache/img/deep-tech-w-5i4etgdcbik0.png';
export const backEndIcon = 'https://infoshare.pl/system/cache/img/back-end-w-3449a56nk9hg.png'

export const Speakers = () => {
    const filters = ['inspire', 'growth', 'marketing', 'devtrends', 'front-end', 'deeptech', 'backend']
    const filtersArray = [
        {technology: 'inspire', icon: inspireIcon},
        {technology: 'growth', icon: growthIcon},
        {technology: 'marketing', icon: marketingIcon},
        {technology: 'devtrends', icon: devtrendsIcon},
        {technology: 'front-end', icon: frontEndIcon},
        {technology: 'deeptech', icon: deeptechIcon},
        {technology: 'backend', icon: backEndIcon},
];
    const speakersArray = [
        { name: 'nicci stewart', company: 'the why effect', icon:inspireIcon, technology: 'inspire', photoUrl: 'https://infoshare.pl/system/cache/img/paris-buttfield-addison-20-74dntvlmmoj0.jpg', },
        { name: 'brian spears', company: 'new age meats',icon:growthIcon, technology: 'growth', photoUrl: 'https://infoshare.pl/system/cache/img/paris-buttfield-addison-20-74dntvlmmoj0.jpg' },
        { name: 'jakub biel', company: 'x-kom', icon:marketingIcon, technology: 'marketing', photoUrl: 'https://infoshare.pl/system/cache/img/paris-buttfield-addison-20-74dntvlmmoj0.jpg' },
        { name: 'charlotte han', company: 'independent', icon: devtrendsIcon, technology: 'devtrends', photoUrl: 'https://infoshare.pl/system/cache/img/paris-buttfield-addison-20-74dntvlmmoj0.jpg' },
        { name: 'maciej aniserowicz', company: 'slowbiz.pl', icon:marketingIcon, technology: 'marketing', photoUrl: 'https://infoshare.pl/system/cache/img/paris-buttfield-addison-20-74dntvlmmoj0.jpg' },
        { name: 'kyle boss', company: 'tinder', icon:frontEndIcon, technology: 'front-end', photoUrl: 'https://infoshare.pl/system/cache/img/paris-buttfield-addison-20-74dntvlmmoj0.jpg' },
        { name: 'charles ehredt', company: 'currency alliance', icon:marketingIcon, technology: 'marketing', photoUrl: 'https://infoshare.pl/system/cache/img/paris-buttfield-addison-20-74dntvlmmoj0.jpg' },
        { name: 'paris buttfield-addison', company: 'secret lab pty. ltd.',icon:deeptechIcon, technology: 'deeptech', photoUrl: 'https://infoshare.pl/system/cache/img/paris-buttfield-addison-20-74dntvlmmoj0.jpg' },
        { name: 'anya navidski', company: 'voulez capital', icon: growthIcon, technology: 'growth', photoUrl: 'https://infoshare.pl/system/cache/img/paris-buttfield-addison-20-74dntvlmmoj0.jpg' },
        { name: 'uberto barbini', company: 'independent consultant', icon:backEndIcon, technology: 'backend', photoUrl: 'https://infoshare.pl/system/cache/img/paris-buttfield-addison-20-74dntvlmmoj0.jpg' },
        { name: 'joanne pransky', company: 'world\'s first robotic psychiatrist', icon:inspireIcon, technology: 'inspire', photoUrl: 'https://infoshare.pl/system/cache/img/paris-buttfield-addison-20-74dntvlmmoj0.jpg' },
        { name: 'emily jiang', company: 'ibm', icon:backEndIcon, technology: 'backend',photoUrl: 'https://infoshare.pl/system/cache/img/paris-buttfield-addison-20-74dntvlmmoj0.jpg' },
        { name: 'shari langemak', company: 'relearnlabs gmbh', icon:inspireIcon, technology: 'inspire',photoUrl: 'https://infoshare.pl/system/cache/img/paris-buttfield-addison-20-74dntvlmmoj0.jpg' },
        { name: 'michael shtelma', company: 'databricks', icon:deeptechIcon, technology: 'deeptech', photoUrl: 'https://infoshare.pl/system/cache/img/paris-buttfield-addison-20-74dntvlmmoj0.jpg' },
        { name: 'daniel lundh', company: 'lifvs', icon:growthIcon, technology: 'growth', photoUrl: 'https://infoshare.pl/system/cache/img/paris-buttfield-addison-20-74dntvlmmoj0.jpg' },
        { name: 'dana kanze', company: 'london business school', icon:growthIcon, technology: 'growth', photoUrl: 'https://infoshare.pl/system/cache/img/paris-buttfield-addison-20-74dntvlmmoj0.jpg' },
        { name: 'alan cross', company: 'brain dead dog productions', icon:growthIcon, technology: 'growth', photoUrl: 'https://infoshare.pl/system/cache/img/paris-buttfield-addison-20-74dntvlmmoj0.jpg' },
        { name: 'james rodgers', company: 'sdu / lse', icon:inspireIcon, technology: 'inspire', photoUrl: 'https://infoshare.pl/system/cache/img/paris-buttfield-addison-20-74dntvlmmoj0.jpg' }
    ];

    const [filter, setFilter] = useState(filters);

    const toggleFilter = filterName => filter !== filterName ? setFilter(filterName) : setFilter(filters);

    return (
        <div className='speakers-container'>
            <h5 className='speakers-heading'>first Speakers <span className='speakers-heading-span'>2020</span></h5>
            <section className='speakers-filter'>

                    {filtersArray.map(el=>{
                        return (
                            <div className='btn-container' onClick={() => { toggleFilter(el.technology) }} >
                            <Filter active={filter} icon={el.icon} title={el.technology} uppercase />
                        </div>
                        )
                    })}
            </section>
            <secton className='speakers'>

                {speakersArray.filter(speaker=>filter.includes(speaker.technology)).map(speaker=>{
                    return(
                        <Speaker technology={speaker.technology} filterLogo={speaker.icon} speakerName={speaker.name} speakerCompany={speaker.company} photo={speaker.photoUrl} />
                    )
                })}


            </secton>
            <button className='btn-more-speakers'>More infoShare 2020 Speakers</button>
        </div>
    )
}