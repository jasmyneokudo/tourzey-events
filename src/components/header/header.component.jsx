import React from 'react';
import './header.styles.scss';
import {ReactComponent as AppLogo} from '../../assets/tourzey-logo.svg';


const Header = () => (

    <div className='header'>

        <AppLogo className='app-logo'/>

        <div className='options'>
            <h3>Available Cities</h3>
            <h3>About Us</h3>
            <h3>|</h3>
            <h3>Help</h3>
            <h3>Account</h3>
        </div>
        

    </div>
);

export default Header;