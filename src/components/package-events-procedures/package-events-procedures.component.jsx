import React from 'react';
import {ReactComponent as Arrow} from '../../assets/right-arrow.svg';
import './package-events-procedures.styles.scss';

const PackageEventsProcedures = () => (

    <div className='procedures'>

        <p className='title'>how Tourzey event works?</p>
        <p className='desc'>It’s as easy as specifying your event, customize it and then order.</p>
        <div className='procedure'>

            <img src='/images/choose-events.png' />

            <div>

                <p className='title'><text className='index'>1.   </text><text className='name'> Choose your event</text></p>
                <p className='desc'>Ready to start your special event? Simply use the 
                    search bar to select the type of event, location, 
                    date and the expected number of guests.</p>
                <button className='btn'>GET STARTED NOW</button>
            </div>
        </div>

        <div className='procedure'>

            

            <div>

                <p className='title'><text className='index'>2.
                   </text><text className='name'> Customize event package</text></p>
                <p className='desc'>Add mood to your event such as family, formal, 
                adventure, and more details to personalize 
                your event.</p>
                <p style={{
                    fontSize:'11px',
                    letterSpacing:'1px',
                    color:'red',
                    cursor:'pointer'
                    

                }}>  SEE LIST OF PACKAGES <Arrow/> </p>
            </div>
            <img src='/images/cutsomisation.png' />
        {/* &#x2190; */}
        </div>
        
        <div className='procedure'>

            <img src='/images/place-order.png' />

            <div>

                <p className='title'><text className='index'>3.
                   </text><text className='name'> Place the order</text></p>
                <p className='desc'>Once you order an event, we do all the planning and 
                confirming of the who’s attending, what it involved, 
                when it’s happening, and where to meet.</p>
                <button style={{
                    background:'white',
                    color:'#e31f3d',
                    height:'40px',
                    fontSize:'12px',
                    border: 'solid 2px #e31f3d',
                    padding:'0px 20px'
                }}>GET STARTED NOW</button>
            </div>
        </div>
    </div>
);

export default PackageEventsProcedures;