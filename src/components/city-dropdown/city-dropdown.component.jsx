import React from 'react';

import './city-dropdown.styles.scss';
import { connect } from 'react-redux';
import {ReactComponent as Open} from '../../assets/triangle1.svg';

import {ReactComponent as Close} from '../../assets/triangle2.svg';

import * as actions from '../../actions';

class CityDropdown extends React.Component {

    constructor(onClicked, onTopClicked){
        super(onClicked, onTopClicked);
    }

    renderCountry(name){

        if (this.props.selectedCountry === name){
            return(
                <div style={{background:'#FCEDEF'}}  className='item'>
                {
                    this.renderArrow(name)
                }
                    <p onClick={() => {
                        if(this.props.selectedCountry === name){
                        this.props.selectCountry(null)
                        }else{
                        this.props.selectCountry(name)
                        }  
                    }} className='country'>{name}</p>
            </div>
            )
        }else{
            return(
                <div    className='item'>
                {
                    this.renderArrow(name)
                }
                    <p onClick={() => {
                        if(this.props.selectedCountry === name){
                        this.props.selectCountry(null)
                        }else{
                        this.props.selectCountry(name)
                        }  
                    }} className='country'>{name}</p>
            </div>
            )
        }
    }

    renderStates(state, states){

        const {selectedCountry} = this.props;
        // console.log(selected);
        if (state === selectedCountry ){

            return (

                <div onClick={ this.props.onClicked } className='drop-down'>
                   { 
                        states.map( ({name}) => (
                            <span
                                onClick={() =>  {
                                        this.props.selectCity(name);
                                        this.props.selectOption(3)
                                    }   
                                }
                                className='state'>{name}</span>
                        ))
                    }
                </div>
            );
        }else {
            return null;
        }
    }

    renderArrow(name){

        if (name === this.props.selectedCountry ){

            return(
                <Close style={{cursor:'pointer'}} 
                onClick={() => this.props.selectCountry(null)}/>
            )
        }else {
            return(

                <Open style={{cursor:'pointer'}} 
                onClick={() => {
                    this.props.selectOption(2);
                    this.props.selectCountry(name)}}/>
                                   
            );

        }
        
    }

    render(){

        return(
            <div className='dropdown'>

                { 
                    this.props.countries.map( ({name, states}) => (
                        <div>
                            {
                                this.renderCountry(name)
                            }

                            {
                                this.renderStates(name, states)
                            }
                        </div>   
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = state =>{

    return{
        countries: state.countries,
        selectedCountry: state.selectedCountry,
        selectedCity: state.selectedCity
    };

};
const mapDispatchToProps = dispatch => ({
    
    selectOption: (option) => dispatch(actions.selectOption(option)),
    selectCountry: (country) => dispatch(actions.selectCountry(country)),
    selectCity: (city) => dispatch(actions.selectCity(city))
    
});

export default connect(mapStateToProps, mapDispatchToProps)(CityDropdown);