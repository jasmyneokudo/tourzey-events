import React from 'react';
import {ReactComponent as EventLogo} from '../../assets/events.svg';
import {ReactComponent as CityLogo} from '../../assets/location.svg';
import {ReactComponent as GuestLogo} from '../../assets/hash-no.svg';
import {ReactComponent as DateLogo} from '../../assets/calendar.svg';
import {Reactcomponent as Mail} from '../../assets/mail.svg';


import './custom-input.styles.scss';



const CustomInput = ({hint, value, svg, style, onClick}) => (

    <div style={style} className='custom-input'>

        {svg}
        <input value={value} readOnly='true'
         onClick={onClick} style={{width:'100%', height:'100%'}} 
         placeholder={hint} />
    </div>
);

export default CustomInput;