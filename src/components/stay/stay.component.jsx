import React from 'react';
import CustomInput from '../../components/custom-input/custom-input.component';
import {ReactComponent as Mail} from '../../assets/mail.svg';


import './stay.styles.scss';

const Stay = () => (

    <div className='stay'>

        <p className='title'>STAY UP TO DATE</p>
        <p className='desc'>Get event offers, planning, suggestions and more</p>

        <div className='content'>

            <div style={{
                display:'flex',
                flexDirection: 'row',
                backgroundColor:'white',
                alignItems:'center',
                width:'70%'
            }}>

                <Mail className='mail'/>
                <input
                placeholder='Your Email Address' />
            </div>
            <button>Subscribe</button>
        </div>

    </div>
);

export default Stay;