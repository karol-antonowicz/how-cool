import React from 'react';
import './Main.scss';
import { MainHero } from './MainHero/MainHero';
import { MainNumbers } from './MainNumbers/MainNumbers';
import { AfterMovie } from './AfterMovie/AfterMovie';
import { Speakers } from './Speakers/Speakers';
import { MainWho } from './MainWho/MainWho';



export const Main = () => {
    return (
        <div className='main'>
            <MainHero />
            <MainNumbers />
            <MainWho />
            <AfterMovie />
            <Speakers />
        </div>
    )
}