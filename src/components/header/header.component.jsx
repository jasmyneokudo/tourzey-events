import React from 'react';
import './header.styles.scss';
import AccountDropdown from '../account-dropdown/account-drowdown';
import {ReactComponent as AppLogo} from '../../assets/tourzey-logo.svg';
import { useState } from 'react';

const Header = () => {
    
    const [clicked, setClicked] = useState(true);
    const [accountClicked, setAccountClicked] = useState(false);

    const renderAccountOptions = () => {
        if(accountClicked){
            return(
                <AccountDropdown/>
            )
        }
    }
    const render =(option, clicked, setClicked) =>{
        if(clicked){
            return (
                <div onMouseLeave={
                    () => setClicked(false) 
                } style={{  display:'flex', flexDirection:'column'}}>
                         <a style={{fontWeight:'bold', display:'flex',alignItems:'center' , height:'100%'}} >{option}</a>

                    <AccountDropdown/>

                </div>
               
            )
        }else{
            return (
                <a style={{ display:'flex',alignItems:'center' , height:'100%'}}  onMouseEnter={
                    () => setClicked(true)
                }>{option}</a>
            )
        }

    }
    return(

   
   <div className='header'>

        <AppLogo className='app-logo'/>

        <div className='options'>
            <a onClick={()=>{
                if(clicked){

                }
            }}>Available Cities</a>
            <a>About Us</a>
            <a>|</a>
            <a>Help</a>
            {
                render('Account', accountClicked, setAccountClicked)
            }
            {
                
            }
            
        </div>
    </div>
)};

export default Header;