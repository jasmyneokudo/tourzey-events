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
            date: null,
             eventTypeHidden: true,
             statesShown: false,
              guestSizeHidden: true,
                calendarHidden: true};

    }
    
    onChange = date => this.setState({ date });


render(){
    
    

    console.log(this.state.hidden+'hi');
    return(

    <div   className='banner'  onClick={ ()=> {
        
        if (this.state.statesShown) {
            this.setState({
                // citiesHidden: true,
                statesShown: false
            });
        }

        // if(!this.state.citiesHidden){
        //     this.setState({
        //         citiesHidden: true
        //     });
        //     this.props.selectOption(null);
        // }

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

        // if (!this.state.calendarHidden) {
        //     this.setState({
        //         calendarHidden: true
        //     });
        // }
    }}>

        <div 
        
        
        className='inner'>
        <img className='image' style={{
            zIndex:-1,
            
            // position:'absolute',
            
            backgroundSize:'contain'
        }} src='/images/hero-header@2x.jpg'/>

        <div className='banner-details'>
            <span className='bannerDesc'>Book corporate and group events that will entertain and inspire your team.</span>

        <div className='form'>
                
        <div onMouseLeave={
            () => {
                if (!this.state.eventTypeHidden) {
                    this.setState({
                        eventTypeHidden: true
                    });
                   
                }
            }
        } 
         style={{display:'flex', width:'40%',height:'100%', justifyContent:'space-between',  flexDirection:'column'}}>    
            <CustomInput 
            value={this.props.selectedEvent}
            style={{width:'100%', height:'100%'}}
            onClick={ ()=> {
            
                if (this.state.eventTypeHidden) {
                    this.setState({
                        eventTypeHidden: false
                    });
                }
            }}
            hint='Event Type'svg={<EventLogo className='logo'/>}/>

            {
                this.state.eventTypeHidden ? null:
                <EventType/> 
            }
        </div>  
        <div style={{width: '0.5px',
            height: '22px',
            background: '#c6c6c6',
            marginRight:15,
            alignSelf:'center'}} ></div>

        <div onMouseLeave={
            () => {
                if (!this.state.citiesHidden) {
                    this.setState({
                        citiesHidden: true
                    });
                   
                }
            }
        } style={{display:'flex', width:'15%' , height:'100%', flexDirection:'column'}}>
                <CustomInput hint='City' 
                value={this.props.selectedCity}
            style={{width:'100%', height:'100%'}}
                onClick={ ()=> {
                
                   
                    if (this.state.citiesHidden) {
                        this.setState({
                            citiesHidden: false
                        });
                        this.props.selectOption(1);
                    }else{
                        this.props.selectOption(null);
                    }
                }} 
                 svg={<CityLogo className='logo'/>}/>

                {
                
                (this.state.citiesHidden) ? null:
                <CityDropdown onTopClicked={  
                    () => alert('hii')
                } onClicked={
                    () => {
                        if (!this.state.statesShown) {
                            this.setState({
                                statesShown: true,
                                citiesHidden: true
                            });
                        }
                    }
                }/> 
              }
        </div>
        <div style={{width: '0.5px',
            height: '22px',
            background: '#c6c6c6',
            marginRight:15,
            alignSelf:'center'}} ></div>
        
        <div
        onMouseLeave={
            () => {
                if (!this.state.guestSizeHidden) {
                    this.setState({
                        guestSizeHidden: true
                    });
                   
                }
            }
        }
        
        style={{display:'flex', width:'20%',  height:'100%', flexDirection:'column'}}>
            <CustomInput
             value={this.props.selectedSize}
             style={{width:'100%',height:'100%'}}
             onClick={ ()=> {
            
                if (this.state.guestSizeHidden) {
                    this.setState({
                        guestSizeHidden: false
                    });
                }
            }}
            hint='Guest Size'  width='20%' svg={<GuestLogo className='logo'/>}/>
            { 
                this.state.guestSizeHidden ? <div/>:
                <GuestSize/> 
           }

        </div>
        <div style={{width: '0.5px',
            height: '22px',
            background: '#c6c6c6',
            marginRight:15,
            alignSelf:'center'}} ></div>
        
        <div
        onMouseLeave={
            () => {
                if (!this.state.calendarHidden) {
                    this.setState({
                        calendarHidden: true
                    });
                   
                }
            }
        }
        
        style={{display:'flex', width:'15%', height:'100%', flexDirection:'column'}}>
            <CustomInput 
            value={this.state.date}
            style={{width:'100%', height:'100%'}}
            onClick={ ()=> {
            
                if (this.state.calendarHidden) {
                    this.setState({
                        calendarHidden: false
                    });
                }
            }}
            hint='Date'  svg={<DateLogo className='logo'/>}/>
             
            { 
            this.state.calendarHidden ? <div/>:
            <Calendar  onChange={this.onChange}
            value={this.state.date}/> 
        }
        </div>
    
        <div className='search-btn' onClick={this.props.toggleDropdown} 
        style={{cursor:'pointer', background:'#e31f3d', width:'10%'}}>
            <SearchIcon/>
        </div>
    </div>
    
        </div>
        </div>
      
    </div>
)};}

const mapStateToProps = (state) => {
    return{
        hidden: state.dropdown.hidden,
        selectedEvent: state.selectedEvent,
        selectedCity: state.selectedCity.selectedState,
        option: state.selectedCity.option,
        selectedSize: state.selectedSize,
        selectedDate: state.selectDate,
        selectedOption: state.selectedCity.option}
};

const mapDispatchToProps = dispatch => ({
    
    toggleDropdown: () => dispatch(actions.toggleDropdown()),
    selectOption: (option) => dispatch(actions.selectOption(option))
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Banner);