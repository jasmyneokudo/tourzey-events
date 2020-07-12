import React from 'react';
import {ReactComponent as Logo} from '../../assets/logo-2-0.svg';
import {ReactComponent as Fb} from '../../assets/facebook.svg';
import {ReactComponent as Twitter} from '../../assets/twitter.svg';
import {ReactComponent as Ig} from '../../assets/instagram.svg';

import './footer.styles.scss';

const Footer = () => (

    <div className='footer'>

        <div className='top'>

            <div className='left'>

                <Logo/>
                <div className='social-media'>
                    <Twitter style={{
                        cursor:'pointer'
                    }} />
                    <Fb style={{
                        cursor:'pointer',
                        margin: '0px 20px'
                    }}/>
                    <Ig  style={{
                        cursor:'pointer'
                    }}/>
                </div>

                <div className='contact'>
                    <img src='/images/oval3.png'style={{
                        width:'50px',
                        height:'50px'
                    }}/>
                    <div className='details'>
                        <span className='title'>Want to talk about your event?</span>
                        <span className='desc'>We’ll be happy to hear from you!</span>
                        <span>
                            <span className='others'>1-888-8TOURZEY  </span> <span style={{
                                color:'#8C8C8C'
                            }}>  &#8226;   </span>
                            <span  className='others'>hello@tourzey.com</span>
                        </span>
                    </div>
                </div>

            </div>
            <div className='right'>

                <div className='about-list'>
                    <p className='title'>ABOUT US</p>
                    <p className='item'>About Tourzey</p>
                    <p className='item'>Blog &amp; News</p>
                    <p className='item'>Contact Us</p>
                    <p className='item'>Careers</p>
                    <p className='item'>FAQs</p>
                </div>

                <div className='tourzey-list'>
                    <p className='title'>TOURZEY EVENTS</p>
                    <p className='item'>My Account</p>
                    <p className='item'>Events Package</p>
                    <p className='item'>Available Cities</p>
                    <p className='item'>How It Works</p>
                    <p className='item'>Request an Event</p>
                </div>
            </div>

        </div>

        <div style={{
            background:'white',
            width:'80%',
            opacity:0.4,
            height:'0.5px'
        }}/>

        <div className='bottom'>

            <p className='item'>&#169; Tourzey Event. All Rights Reserved.</p>
            
            <p className='item'>Privacy Policy</p>
            <p className='item'>Terms of Service</p>
            <p className='item'>Billing Agreement</p>

        </div>

    </div>
);

export default Footer;