import React from 'react';

import {connect} from 'react-redux';
import './event-type.styles.scss';

import * as actions from '../../actions';

const EventType = ({selectEvent}) => (

    <div className='event-type'>
        <span onClick={() => selectEvent('Cocktail')} className='name'>Cocktail</span>
        <span onClick={() => selectEvent('Conferences')} className='name'>Conferences</span>
        <span onClick={() => selectEvent('Dining')} className='name'>Dining</span>
        <span onClick={() => selectEvent('Entertainment')} className='name'>Entertainment</span>
        <span onClick={() => selectEvent('Grouspan Activity')} className='name'>Grouspan Activity</span>
        <span onClick={() => selectEvent('Retail')} className='name'>Retail</span>
        <span onClick={() => selectEvent('Weddings')} className='name'>Weddings</span>

    </div>
);

const mapStateToProps = state =>{

    return{
        // countries: state.countries,
        selectedEvent: state.selectedEvent
    };

};

export default connect(mapStateToProps, actions)(EventType);