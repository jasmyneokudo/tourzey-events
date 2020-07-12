import React from 'react';

import './guest-size.styles.scss';
import {connect} from 'react-redux';
import * as actions from '../../actions';

const GuestSize = ({selectSize}) => (

    <div className='guest-size'>
        <span onClick={() => selectSize('10 - 20')} className='name'>10 - 20</span>
        <span  onClick={() => selectSize('20 - 30')} className='name'>20 - 30</span>
        <span  onClick={() => selectSize('30 - 50')} className='name'>30 - 50</span>
        <span  onClick={() => selectSize('50 - 70')} className='name'>50 - 70</span>
        <span  onClick={() => selectSize('70 - 100')} className='name'>70 - 100</span>
        <span  onClick={() => selectSize('100 - 200')} className='name'>100 - 200</span>
        <span  onClick={() => selectSize('200 - 500')} className='name'>200 - 500</span>
        <span  onClick={() => selectSize('500 - 1000')} className='name'>500 - 1000</span>
        <span  onClick={() => selectSize('1000+')} className='name'>1000+</span>
    </div>
);

const mapStateToProps = state =>{

    return{
        // countries: state.countries,
        selectedSize: state.selectedSize
    };

};

export default connect(mapStateToProps, actions)(GuestSize);