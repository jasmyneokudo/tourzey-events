import React from 'react';

import './city-dropdown.styles.scss';
import { connect } from 'react-redux';
import {ReactComponent as Open} from '../../assets/triangle1.svg';

import {ReactComponent as Close} from '../../assets/triangle2.svg';

import * as actions from '../../actions';

class CityDropdown extends React.Component {


    renderStates(state, states){

        const {selectedCountry} = this.props;
        // console.log(selected);
        if (state === selectedCountry ){

            return (

                <div className='drop-down'>
                   { 
                        states.map( ({name}) => (
                            <p className='state'>{name}</p>

                        ))
                    }
                </div>
            );
        }else{
            return null;
        }
    }

    renderArrow(name){

        if (name === this.props.selectedCountry ){

            return(
                <Close style={{cursor:'pointer'}} 
                onClick={() => this.props.selectCountry(null)}/>
            )
        }else{
            return(

                <Open style={{cursor:'pointer'}} 
                onClick={() => this.props.selectCountry(name)}/>
                                   
            );

        }
        
    }

    render(){


        return(
            <div className='dropdown'>

                { 
                    this.props.countries.map( ({name, states}) => (
                        <div>
                            <div className='item'>
                                {
                                    this.renderArrow(name)
                                }
                                 <p className='country'>{name}</p>
                            </div>

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
        selectedCountry: state.selectedCountry
    };

};

export default connect(mapStateToProps, actions)(CityDropdown);