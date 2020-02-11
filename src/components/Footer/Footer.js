import React from 'react';
import './Footer.scss';


export const Footer = () => {
    const website = 'https://infoshare.pl'
    return (
        <footer className='footer'>
            <section className='footer-section'>
                <h5 className='footer-section-heading'>Shortcuts</h5>
                <ul className='footer-section-list'>
                    <li className='footer-list-element'><a href={website} className='list-element-anchor'>full speakers list</a></li>
                    <li className='footer-list-element'><a href={website} className='list-element-anchor'>about</a></li>
                    <li className='footer-list-element'><a href={website} className='list-element-anchor'>partners</a></li>
                    <li className='footer-list-element'><a href={website} className='list-element-anchor'>code of conduct</a></li>
                    <li className='footer-list-element'><a href={website} className='list-element-anchor'>contact</a></li>
                    <li className='footer-list-element'><a href={website} className='list-element-anchor'>privacy policy and information clauses</a></li>
                    <li className='footer-list-element'><a href={website} className='list-element-anchor'>regulations of the infoshare 2020 conference</a></li>
                </ul>
            </section>
            <section className='footer-section'>
                <h5 className='footer-section-heading'>previous editions</h5>
                <ul className='footer-section-list'>
                    <li className='footer-list-element'><a href={website} className='list-element-anchor'>2019</a></li>
                    <li className='footer-list-element'><a href={website} className='list-element-anchor'>2018</a></li>
                    <li className='footer-list-element'><a href={website} className='list-element-anchor'>2017</a></li>
                    <li className='footer-list-element'><a href={website} className='list-element-anchor'>2016</a></li>
                    <li className='footer-list-element'><a href={website} className='list-element-anchor'>2015</a></li>
                    <li className='footer-list-element'><a href={website} className='list-element-anchor'>2014</a></li>
                </ul>
            </section>
            <section className='footer-section'>
                <h5 className='footer-section-heading'>Newsletter</h5>
                <button className='footer-subscribe'>Subscribe</button>
            </section>
            <section className='footer-section'>
                <h5 className='footer-section-heading'>Join Infoshare</h5>
                <div className='social' >
                <a title='facebook' className='social-link'><img className='social-img' /></a>

                <a title='twitter' className='social-link'><img className='social-img' /></a>


                <a title='linkedin' className='social-link'><img className='social-img' /></a>


                <a title='youtube' className='social-link'><img className='social-img' /></a>


                <a title='instagram' className='social-link'><img className='social-img' /></a>
                </div>


            </section>
        </footer>
    )
}