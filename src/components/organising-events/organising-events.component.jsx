import React from 'react';
import Swiper from 'swiper'
import "swiper/css/swiper.css";

import {ReactComponent as Quotes} from '../../assets/quotes-2.svg';

import './organising-events.styles.scss';

class OrganisingEvents extends React.Component {
    

    componentDidMount(){

        var swiper = new Swiper('.s1', {
            spaceBetween: 30,
            centeredSlides: true,
            // autoplay: {
            //   delay: 2500,
            //   disableOnInteraction: false,
            // },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });


    }
    
    
    render()
    {
        
        
        return(

        <div className='events'>

            <p className='title'>Organising Events In</p>
            <p className='desc'>Over 200+ cities and counting</p>
            <span className='desc1'>
                Things to do nearby and your entire event in a few clicks.</span>

            <div className='cities'>

                <div className='list'>
                    <p className='city'>Atlanta</p>
                    <p className='city'>Austin</p>
                    <p className='city'>Baltimore-Maryland</p>
                    <p className='city'>Boston</p>
                    <p className='city'>Charlotte</p>
                    <p className='city'>Chicago</p>

                </div>

                <div className='list'>
                    <p className='city'>Dallas-Fort Work</p>
                    <p className='city'>Denver</p>
                    <p className='city'>Las Vegas</p>
                    <p className='city'>Los Angeles</p>
                    <p className='city'>Miami</p>
                    <p className='city'>Minneapolis-St. Paul</p>

                </div>

                <div className='list'>
                    <p className='city'>New York City</p>
                    <p className='city'>Orange County</p>
                    <p className='city'>Palm Springs</p>
                    <p className='city'>Philadelphia</p>
                    <p className='city'>Phoenix</p>
                    <p className='city'>Portland</p>

                </div>

                <div className='list'>
                    <p className='city'>Sacramento</p>
                    <p className='city'>San Diego</p>
                    <p className='city'>San Francisco</p>
                    <p className='city'>Seattle</p>
                    <p className='city'>Tampa Bay</p>
                    <p className='city'>Washington D.C</p>

                </div>
                
            </div>
            
            <hr style={{
                marginTop:'50px',
                marginBottom:'50px',
                color:'#c6c6c6',
                width:'70%'
            }}/>

        <div class="swiper-container s1">
            <div class="swiper-wrapper">

            <div className='swiper-slide'>

            <img src='/images/user2.png'/>

            <div className='comment-block'>

                <Quotes/>

                <p className='comment'>“I LOVE everything about Tourzey Event. First, let me start with the 
                amazing customer service I get from Tourzey. They always give me 
                a variety of different options to choose from, and they are super 
                accommodating for my last minute needs.”</p>
                <span className='name'>Isabelle Bryant</span>
                <span className='position'>SR. MANAGER, TRYHUNGRY</span>
            </div>
            </div>
            
            </div>
           
           
            <div class="swiper-pagination"></div>
            
            
           
        </div>


           
        </div>
)}};

export default OrganisingEvents;