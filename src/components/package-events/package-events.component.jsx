import React from 'react';
import {ReactComponent as EventsLogo} from '../../assets/conferences.svg';
import {ReactComponent as CocktailLogo} from '../../assets/cocktail.svg';
import {ReactComponent as DiningLogo} from '../../assets/dinning.svg';
import {ReactComponent as EntertainmentLogo} from '../../assets/entertainment.svg';
import {ReactComponent as GroupLogo} from '../../assets/guests.svg';
import {ReactComponent as RetailLogo} from '../../assets/retail.svg';

import './package-events.styles.scss';

const PackageEvents = () => (

    <div className='package-events'>

        <p className='title'>
            Our package events to choose from

        </p>

        <p className='desc'>
           THE TYPE OF EVENT THAT WILL WOW YOUR TEAM AND KEEP THEM <br/>
ENGAGED AND PROMOTES LOYALTY

        </p>

        <div className='events'>
            <div className='event'>
                <CocktailLogo/>
                <p className='name'>Cocktail</p>
                <p className='count'>20+ EVENTS</p>
            </div>
            <div className='event'>
                <EventsLogo/>
                <p className='name'>Conferences</p>
                <p className='count'>10+ EVENTS</p>
            </div>
            <div className='event'>
                <DiningLogo/>
                <p className='name'>Dining</p>
                <p className='count'>40+ EVENTS</p>
            </div>
            <div className='event'>
                <CocktailLogo/>
                <p className='name'>Entertainment</p>
                <p className='count'>100+ EVENTS</p>
            </div>
            <div className='event'>
                <GroupLogo/>
                <p className='name'>Group</p>
                <p className='count'>30+ EVENTS</p>
            </div>
            <div className='event'>
                <RetailLogo/>
                <p className='name'>Retail</p>
                <p className='count'>10+ EVENTS</p>
            </div>
        </div>

        <button className='btn'>REQUEST A SPECIAL EVENT</button>
       
    </div>
);

export default PackageEvents;