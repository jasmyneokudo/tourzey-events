import React from 'react';
import {ReactComponent as Help} from '../../assets/help_black.svg';
import {ReactComponent as Heart} from '../../assets/heart_black.svg';

import './account-dropdown.scss';

const AccountDropdown = () => (

    <div className='account-dropdown'>
    
    <span>Register</span>
    <span>Login</span>
    <div style={{width:'100%',backgroundColor:'#c6c6c6',  height:1}}/>
    <span> <Heart style={{marginRight:10 }}/>Wishlist</span>
    <span><Help  style={{marginRight:10 }} />Help</span>
    </div>
);

export default AccountDropdown;