import React from 'react';
import './header.styles.scss';
import {ReactComponent as AppLogo} from '../../assets/tourzey-logo.svg';

const Header = () => (

    <div className='header'>

        <AppLogo className='app-logo'/>

        <div className='options'>
            <p>Available Cities</p>
            <p>About Us</p>
            <p>|</p>
            <p>Help</p>
            <p>Account</p>
        </div>
        

    </div>
);

export default Header;