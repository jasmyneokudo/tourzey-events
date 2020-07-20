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
                    <div className='city-container'>
                    <p  className='hover hover-3'>Atlanta</p>
                    </div>
                    <div className='city-container'>
                    <p className='hover hover-3'>Austin</p></div>
                    <div className='city-container'>
                    <p className='hover hover-3'>Baltimore-Maryland</p></div>
                    <div className='city-container'>
                    <p className='hover hover-3'>Boston</p></div>
                    <div className='city-container'>
                    <p className='hover hover-3'>Charlotte</p></div>
                    <div className='city-container'>
                    <p className='hover hover-3'>Chicago</p></div>

                </div>

                <div className='list'>
                <div className='city-container'>
                    <p className='hover hover-3'>Dallas-Fort Work</p></div>
                    <div className='city-container'>
                    <p className='hover hover-3'>Denver</p></div>
                    <div className='city-container'>
                    <p className='hover hover-3'>Las Vegas</p></div>
                    <div className='city-container'>
                    <p className='hover hover-3'>Los Angeles</p></div>
                    <div className='city-container'>
                    <p className='hover hover-3'>Miami</p></div>
                    <div className='city-container'>
                    <p className='hover hover-3'>Minneapolis-St. Paul</p></div>

                </div>

                <div className='list'>
                <div className='city-container'>
                    <p className='hover hover-3'>New York hover hover-3</p></div>
                    <div className='city-container'>
                    <p className='hover hover-3'>Orange County</p></div>
                    <div className='city-container'>
                    <p className='hover hover-3'>Palm Springs</p></div>
                    <div className='city-container'>
                    <p className='hover hover-3'>Philadelphia</p></div>
                    <div className='city-container'>
                    <p className='hover hover-3'>Phoenix</p></div>
                    <div className='city-container'>
                    <p className='hover hover-3'>Portland</p></div>

                </div>

                <div className='list'>
                   <div className='city-container'>
                     <p className='hover hover-3'>Sacramento</p></div>
                    <div className='city-container'>
                     <p className='hover hover-3'>San Diego</p></div>
                    <div className='city-container'>
                     <p className='hover hover-3'>San Francisco</p></div>
                    <div className='city-container'>
                     <p className='hover hover-3'>Seattle</p></div>
                    <div className='city-container'>
                     <p className='hover hover-3'>Tampa Bay</p></div>
                    <div className='city-container'>
                     <p className='hover hover-3'>Washington D.C</p></div>

                </div>
                
            </div>
            
            <div style={{
                marginTop:'50px',
                marginBottom:'50px',
                height: '0.5px',
                backgroundColor:'#c6c6c6',
                width:'70%'
            }}/>

        <div class="swiper-container s1">
            <div class="swiper-wrapper">

            <div className='swiper-slide'>

            <img src='/images/user2.jpg'/>

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