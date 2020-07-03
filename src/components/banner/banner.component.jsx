import React from 'react';
import CustomInput from '../custom-input/custom-input.component';
import {ReactComponent as EventLogo} from '../../assets/events.svg';
import {ReactComponent as CityLogo} from '../../assets/location.svg';
import {ReactComponent as GuestLogo} from '../../assets/hash-no.svg';
import {ReactComponent as DateLogo} from '../../assets/calendar.svg';
import {ReactComponent as SearchIcon} from '../../assets/searchlight-2.svg';
import CityDropdown from '../../components/city-dropdown/city-dropdown.component';
import EventType from '../../components/event-type/event-type.component';
import GuestSize from '../../components/guest-size/guest-size.component';
import Calendar from 'react-calendar';


import {connect} from 'react-redux';

import * as actions from '../../actions';


import './banner.styles.scss';
import 'react-calendar/dist/Calendar.css';


class Banner extends React.Component {

    constructor(){

        super();
        this.state = {citiesHidden: true,
            date: new Date(),
             eventTypeHidden: true,
              guestSizeHidden: true,
                calendarHidden: true};

    }
    
    onChange = date => this.setState({ date });


render(){
    
    

    console.log(this.state.hidden+'hi');
    return(

    <div   className='banner'>

        <div 
         onClick={ ()=> {
        
            if (!this.state.citiesHidden) {
                this.setState({
                    citiesHidden: true
                });
            }
            if (!this.state.eventTypeHidden) {
                this.setState({
                    eventTypeHidden: true
                });
            }
            if (!this.state.guestSizeHidden) {
                this.setState({
                    guestSizeHidden: true
                });
            }
    
            if (!this.state.calendarHidden) {
                this.setState({
                    calendarHidden: true
                });
            }
        }}
        
        className='inner'>
        <img style={{
            zIndex:-1,
            height: '600px',
            // position:'absolute',
            width:'100%',
            backgroundSize:'contain'
        }} src='/images/hero-header@2x.png'/>

        <div className='banner-details'>
            <p >Book corporate and group events 
        that will entertain and inspire your team.</p>

        <div 
       
        className='form'>
                
                
        <CustomInput
        onClick={ ()=> {
        
            if (this.state.eventTypeHidden) {
                this.setState({
                    eventTypeHidden: false
                });
            }
        }}
        hint='Event Type' width='60%' svg={<EventLogo className='logo'/>}/>
        <p style={{marginTop:-1, color:'#e2e2e2', marginRight:10, position:'relative', top:5}}>&#x2758;</p>
        <CustomInput hint='City'
        onClick={ ()=> {
        
            if (this.state.citiesHidden) {
                this.setState({
                    citiesHidden: false
                });
            }
        }}
        width='20%'  svg={<CityLogo className='logo'/>}/>
        <p style={{marginTop:-1, color:'#e2e2e2', marginRight:10, position:'relative', top:5}}>&#x2758;</p>
        
        <CustomInput
        onClick={ ()=> {
        
            if (this.state.guestSizeHidden) {
                this.setState({
                    guestSizeHidden: false
                });
            }
        }}
        hint='Guest Size'  width='20%' svg={<GuestLogo className='logo'/>}/>
        <p style={{marginTop:-1, color:'#e2e2e2', marginRight:10, position:'relative', top:5}}>&#x2758;</p>
        
        <CustomInput 
         onClick={ ()=> {
        
            if (this.state.calendarHidden) {
                this.setState({
                    calendarHidden: false
                });
            }
        }}
        hint='Date' width='10%' svg={<DateLogo className='logo'/>}/>
    
        <div className='search-btn' onClick={this.props.toggleDropdown} style={{cursor:'pointer', background:'#e31f3d'}}>
            <SearchIcon/>
        </div>
    </div>
    
        </div>
        </div>

        {
           
           this.state.citiesHidden ? null:
           <CityDropdown/> 
       }
        {
           this.state.eventTypeHidden ? null:
           <EventType/> 
       }
       { 
           this.state.guestSizeHidden ? <div/>:
           <GuestSize/> 
       }
        { 
           this.state.calendarHidden ? <div/>:
           <Calendar  onChange={this.onChange}
           value={this.state.date}/> 
       }

    </div>
)};}

const mapStateToProps = (state) => {
    return{
        hidden: state.dropdown.hidden}
};

const mapDispatchToProps = dispatch => ({
    
    toggleDropdown: () => dispatch(actions.toggleDropdown())
});


export default connect(mapStateToProps, mapDispatchToProps)(Banner);