import React from 'react';
import './Main.scss';
import {MainHero} from './MainHero/MainHero';
import {MainNumbers} from './MainNumbers/MainNumbers';

export const Main = () => {
    return (
        <div className='main'>
            <MainHero/>
            <MainNumbers/>
        </div>
    )
}