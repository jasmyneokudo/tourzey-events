import React from 'react';
import {ReactComponent as Open} from '../../assets/open-2.svg';
import {ReactComponent as Close} from '../../assets/close.svg';

import { connect } from 'react-redux';
import * as actions from '../../actions';


import './faqs.styles.scss';


class Faqs extends React.Component {



    renderDescription(id, question){

        const {selected} = this.props;
        // console.log(selected);
        if (id === selected ){

            this.open_close(id);
            return (

                <div className='drop-down'>
                    <p className='desc'>{question}</p>
                </div>
            );
        }
    }//0074610597

    open_close(id){

        if (id === this.props.selected){
            return(
                <Close className='open' onClick={() => this.props.selectItem(id)}/>
                                    
            )
        }else{
            return(
                <Open className='open' onClick={() => this.props.selectItem(id)}/>
                                    
            )
        }
    }



    render(){

        // const {id, question} = this.prope.questions;

       

        return(
                <div className='faqs'>

                <p className='title'>FAQs</p>
                    <div className='list'>
                    {
                        
                        this.props.questions.map( ({id, question}) => (


                            <div>
                                <div className='faq'>
                                    
                                    <p className='question'> {question}</p>
                                    {
                                        this.open_close(id)
                                     }
                                    
                                </div>
                                {
                                    this.renderDescription(id, question)
                                }
                                <hr />
                             </div>
                        ))
                    }
                    <p className='footer'>Need more help and support?</p>
                    </div>
            
                </div>
        );
    }
}

const mapStateToProps = state => {


    return{ 
        questions: state.questions,
        selected: state.selected
    };
};


export default connect(mapStateToProps, actions)(Faqs);