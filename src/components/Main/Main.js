import React from 'react';
import './Main.scss';
import { MainHero } from './MainHero/MainHero';
import { MainNumbers } from './MainNumbers/MainNumbers';
import {MainWhoAreYou} from './MainWhoAreYou/MainWhoAreYou';

const arr1 = {
    name: 'a developer',
    firstParagraph: 'discover new, up-to-date solutions',
    secondParagraph: 'learn from the worlds best developers from companies such as Slack...',
}
const arr2 = {
    name: 'a startuper',
    firstParagraph: 'learn how to scale your business',
    secondParagraph: 'show your service to hundreds of VCs and investors',
}
const arr3 = {
    name: 'a marketer',
    firstParagraph: 'see how technology can help you scale and sale',
    secondParagraph: 'no marketing bull*t - only the best speakers and knowledge',
}
const arr4 = {
    name: 'an executive',
    firstParagraph: 'network with thousands of tech-oriented potential clients',
    secondParagraph: 'stay up to date with all the TECH your company needs',
}
const arr5 = {
    name: 'an investor',
    firstParagraph: 'meet over 350+ innovative and promising startups',
    secondParagraph: 'build your network during dedicated, closed events',
}
const arr6 = {
    name: 'a just a geek',
    firstParagraph: 'discover how technology affects your life',
    secondParagraph: 'meet new people and join the society',
}

export const Main = () => {
    return (
        <div className='main'>
            <MainHero />
            <MainNumbers />
            <MainWhoAreYou who={arr1.name}
                firstParagraph={arr1.firstParagraph}
                secondParagraph={arr1.secondParagraph} />
            <MainWhoAreYou who={arr2.name}
                firstParagraph={arr2.firstParagraph}
                secondParagraph={arr2.secondParagraph} />
            <MainWhoAreYou who={arr3.name}
                firstParagraph={arr3.firstParagraph}
                secondParagraph={arr3.secondParagraph} />
            <MainWhoAreYou who={arr4.name}
                firstParagraph={arr4.firstParagraph}
                secondParagraph={arr4.secondParagraph} />
            <MainWhoAreYou who={arr5.name}
                firstParagraph={arr5.firstParagraph}
                secondParagraph={arr5.secondParagraph} />
            <MainWhoAreYou who={arr6.name}
                firstParagraph={arr6.firstParagraph}
                secondParagraph={arr6.secondParagraph} />
        </div>
    )
}