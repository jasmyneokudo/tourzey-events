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
                backgroundColor:'white'
            }}>

                <Mail style={{
                    margin:'0px 20px'
                }} />
                <input
                placeholder='Your Email Address' />
            </div>
            <button>Subscribe</button>
        </div>

    </div>
);

export default Stay;