import React from 'react';
import './banner-footer.styles.scss';
import {ReactComponent as Customers} from '../../assets/customers.svg';

const BannerFooter = () => (

    <div className='banner-footer'>

        <p>SERVING CUSTOMERS FROM OVER 90 COUNTRIES</p>
        <Customers className='customers'/>
    </div>
);

export default BannerFooter;