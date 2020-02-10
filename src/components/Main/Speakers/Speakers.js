import React, { useState } from 'react';
import { Filter } from '../../Filter/Filter';
import './Speakers.scss';

const inspireIcon = 'https://infoshare.pl/system/cache/img/inspire-w-2lg49qa1llh0.png';
const growthIcon = 'https://infoshare.pl/system/cache/img/growth-w-j22oo1frrkk0.png';
const marketingIcon = 'https://infoshare.pl/system/cache/img/marketing-w-5o308cmmnig0.png';
const devtrendsIcon = 'https://infoshare.pl/system/cache/img/devtrends-w-1ijsihtk3rcg.png';
const frontEndIcon = 'https://infoshare.pl/system/cache/img/front-end-w-53fdoel8qnd0.png';
const deeptechIcon = 'https://infoshare.pl/system/cache/img/deep-tech-w-5i4etgdcbik0.png';
const backEndIcon = 'https://infoshare.pl/system/cache/img/back-end-w-3449a56nk9hg.png'

export const Speakers = () => {
    const filters = ['inspire', 'growth', 'marketing', 'devtrends', 'front-end', 'deeptech', 'backend']
    const [filter, setFilter] = useState("")

    const toggleFilter = filterName => filter!==filterName?setFilter(filterName):setFilter("")
  
    return (
        <div className='speakers-container'>
            <h5 className='speakers-heading'>first Spekaers <span className='speakers-heading-span'>2020</span></h5>
            <section className='speakers-filter'>
                <div className='btn-container' onClick={()=>{toggleFilter(filters[0])}} >
                    <Filter className='btn-filter' icon={inspireIcon} title={filters[0]} uppercase />
                </div>
                <div className='btn-container' onClick={()=>{toggleFilter(filters[1])}}>
                    <Filter className='btn-filter'  icon={growthIcon} title={filters[1]} uppercase />
                </div>
                <div className='btn-container' onClick={()=>{toggleFilter(filters[2])}}>
                    <Filter className='btn-filter'  icon={marketingIcon} title={filters[2]} uppercase />
                </div>
                <div className='btn-container' onClick={()=>{toggleFilter(filters[3])}}>
                    <Filter className='btn-filter'  icon={devtrendsIcon} title={filters[3]} secondary uppercase />
                </div>
                <div className='btn-container' onClick={()=>{toggleFilter(filters[4])}}>
                    <Filter className='btn-filter'  icon={frontEndIcon} title={filters[4]} secondary uppercase />
                </div>
                <div className='btn-container' onClick={()=>{toggleFilter(filters[5])}}>
                    <Filter className='btn-filter'  icon={deeptechIcon} title={filters[5]} secondary uppercase />
                </div>
                <div className='btn-container' onClick={()=>{toggleFilter(filters[6])}}>
                    <Filter className='btn-filter'  icon={backEndIcon} title={filters[6]} secondary uppercase />
                </div>
            </section>
            <secton className='speakers'>
                
            </secton>
        </div>
    )
}