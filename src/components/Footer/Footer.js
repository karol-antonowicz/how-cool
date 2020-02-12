import React from 'react';
import './Footer.scss';


export const Footer = () => {
    const website = 'https://infoshare.pl'
    return (
        <footer className='footer'>
                <section className='footer-section'>
                    <h5 className='footer-section-heading'>Shortcuts</h5>
                    <ul className='footer-section-list'>
                        <li className='footer-list-element'><a href={website} className='list-element-anchor'><span>full speakers list</span></a></li>
                        <li className='footer-list-element'><a href={website} className='list-element-anchor'><span>about</span></a></li>
                        <li className='footer-list-element'><a href={website} className='list-element-anchor'><span>partners</span></a></li>
                        <li className='footer-list-element'><a href={website} className='list-element-anchor'><span>code of conduct</span></a></li>
                        <li className='footer-list-element'><a href={website} className='list-element-anchor'><span>contact</span></a></li>
                        <li className='footer-list-element'><a href={website} className='list-element-anchor'><span>privacy policy and information clauses</span></a></li>
                        <li className='footer-list-element'><a href={website} className='list-element-anchor'><span>regulations of the infoshare 2020 conference</span></a></li>
                    </ul>
                </section>
                <section className='footer-section'>
                    <h5 className='footer-section-heading'>Previous editions</h5>
                    <ul className='footer-section-list'>
                        <li className='footer-list-element'><a href={website} className='list-element-anchor'><span>2019</span></a></li>
                        <li className='footer-list-element'><a href={website} className='list-element-anchor'><span>2018</span></a></li>
                        <li className='footer-list-element'><a href={website} className='list-element-anchor'><span>2017</span></a></li>
                        <li className='footer-list-element'><a href={website} className='list-element-anchor'><span>2016</span></a></li>
                        <li className='footer-list-element'><a href={website} className='list-element-anchor'><span>2015</span></a></li>
                        <li className='footer-list-element'><a href={website} className='list-element-anchor'><span>2014</span></a></li>
                    </ul>
                </section>
                <section className='footer-section'>
                    <h5 className='footer-section-heading'>Newsletter</h5>
                    <button className='footer-subscribe'>Subscribe <i class="fas fa-long-arrow-alt-right"></i></button>
                </section>
                <section className='footer-section'>
                    <h5 className='footer-section-heading'>Join Infoshare</h5>
                    <div className='social' >
                        <a href={website} title='facebook' className='social-link'><i class="fab fa-facebook-f"></i></a>

                        <a href={website} title='twitter' className='social-link'><i class="fab fa-twitter"></i></a>


                        <a href={website} title='linkedin' className='social-link'><i class="fab fa-linkedin"></i></a>


                        <a href={website} title='youtube' className='social-link'><i class="fab fa-youtube"></i></a>


                        <a href={website} title='instagram' className='social-link'><i class="fab fa-instagram"></i></a>
                    </div>
                </section>
    

        </footer>
    )
}