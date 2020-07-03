import React from 'react';
import {ReactComponent as Flash} from '../../assets/flash-2.svg';
import {ReactComponent as Ideas} from '../../assets/ideas.svg';
import {ReactComponent as Help} from '../../assets/help.svg';

import './your-event.styles.scss';

const YourEvent = () => (

    <div className='your-event'>

        <p className='title'>YOUR EVENT, YOUR WAY</p>
        <div className='items'>

            <div className='item'>
                <Flash/>

                <p className='title'>Easy to Set-Up</p>
                <p className='desc'>Take advantage of one-time or 
                recurring events curated to your 
                business culture. Planning as 
                easy as a few clicks.</p>
            </div>

            <div className='item'>
                <Ideas/>

                <p className='title'>Endless Possibilities</p>
                <p className='desc'>The variety of events are endless, 
                and we are adding new ones each 
                day. From wellness to formal, we plan 
                events that keep your members 
                engaged and promotes loyalty.</p>
            </div>

            <div className='item'>
                <Help/>

                <p className='title'>Professional and Seamless</p>
                <p className='desc'>Tourzey Event Guides are professional 
and ready to help run your next event 
seamlessly.<span style={{
    fontSize:'12px',
    color:'#e31f3d'
}}>  CALL 1-888-8TOURZEY</span></p>
            </div>


        </div>
    </div>
) ;


export default YourEvent;