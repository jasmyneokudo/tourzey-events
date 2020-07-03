import React from 'react';

import './guest-size.styles.scss';

const GuestSize = () => (

    <div className='guest-size'>
        <span name={'10-20'} className='name'>10 - 20</span>
        <span className='name'>20 - 30</span>
        <span className='name'>30 - 50</span>
        <span className='name'>50 - 70</span>
        <span className='name'>70 - 100</span>
        <span className='name'>100 - 200</span>
        <span className='name'>200 - 500</span>
        <span className='name'>500 - 1000</span>
        <span className='name'>1000+</span>
    </div>
);

export default GuestSize;