import React from 'react';
import Swiper from 'swiper'
import "swiper/css/swiper.css";
// import 'swiper/css/swiper.min.css'
// import 'swiper/js/swiper.min.js'

import './featured-events.styles.scss';

class FeaaturedEvents extends React.Component  {
    
    componentDidMount(){

        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 10,
            // slidesPerGroup: 4,
            
            watchOverflow: true,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
              el: '.swiper-pagination',
              bulletClass:'bullet',
              clickable: true,
            },
            navigation: {
                type:'none',
                
              nextEl: '.swiper-button-right',
              prevEl: '.swiper-button-left',
            },
          });
    }

    render(){
        
        return(

            <div className='container'>

                

                <div className='header'>
                        <p className='title'>Featured events</p>
                        <p className='desc'>FROM EVENT IDEAS TO VENUES FOR YOUR NEXT 
                        TEAM-BUILDING <br/> ACTIVITY, 
    COMPANY PARTY, CORPORATE MEETING AND MORE.</p>

                    </div>  
                <div className='featured-events'>
                    
         
                    <div class="swiper-button-left"></div>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            
                            <div className='event'>

                                <img src='/images/corporate-dinner.png'/>       

                                <div className='details'>

                                    <p className='title'>Corporate Dinner</p>
                                    <p className='state'>New York</p>
                                    <p className='desc'>Daniel Boulud's cafe is run by chef 
                                    Aaron Bludorn, serving high-end 
                                    French fare in a chic setting.</p>
                                    
                                </div>
                                <div className='footer'>
                                    <p>
                                        <text className='amount'>$65 </text>
                                        <text className='per-person'>/ PER PERSON</text>
                                    </p>
                                    <p className='others'>10 - 40 Guests &#8226; 3 hrs Duration</p>

                                </div>
                                
                            </div>
                        
                        </div>
                        <div class="swiper-slide">
                            
                                <div className='event'>

                                <img src='/images/ridge-climbing.png'/>       

                                <div className='details'>

                                    <p className='title'>Ridge Climbing</p>
                                    <p className='state'>Chicago</p>
                                    <p className='desc'>A unique and fun way to bond with 
your team. Make your team building 
event athletic and exciting too.</p>
                                    
                                </div>
                                <div className='footer'>
                                    <p>
                                        <text className='amount'>$31 </text>
                                        <text className='per-person'>/ PER PERSON</text>
                                    </p>
                                    <p className='others'>10 - 80 Guests &#8226; 2 hrs Duration</p>

                                </div>
                                
                            </div>
                        </div>
                        <div class="swiper-slide">
                            
                                    <div className='event'>

                                <img src='/images/city-hunt.png'/>       

                                <div className='details'>

                                    <p className='title'>City Hunt</p>
                                    <p className='state'>Los Angeles</p>
                                    <p className='desc'>Discover all the fun your team can 
                                        have in a world-famous shopping, 
                                        dining, and entertainment center. </p>
                                    
                                </div>
                                <div className='footer'>
                                    <p>
                                        <text className='amount'>$125 </text>
                                        <text className='per-person'>/ PER PERSON</text>
                                    </p>
                                    <p className='others'>10 - 200 Guests &#8226; 4 hrs Duration</p>

                                </div>
                                
                            </div>

                        </div>
                        <div class="swiper-slide">
                            

                                    <div className='event'>

                                <img src='/images/escape-room.png'/>       

                                <div className='details'>

                                    <p className='title'>Escape Room</p>
                                    <p className='state'>Florida</p>
                                    <p className='desc'>Teamwork, communication and 
                                    thinking "out of the box" will be the 
                                    order of the day as the plot unfold.</p>
                                    
                                </div>
                                <div className='footer'>
                                    <p>
                                        <text className='amount'>$42 </text>
                                        <text className='per-person'>/ PER PERSON</text>
                                    </p>
                                    <p className='others'>10 - 50 Guests &#8226; 2 hrs Duration</p>

                                </div>
                                
                            </div>
                        </div>
                        <div class="swiper-slide">
                            
                                <div className='event'>

                                <img src='/images/corporate-dinner.png'/>       

                                <div className='details'>

                                    <p className='title'>Corporate Dinner</p>
                                    <p className='state'>New York</p>
                                    <p className='desc'>Daniel Boulud's cafe is run by chef 
                                    Aaron Bludorn, serving high-end 
                                    French fare in a chic setting.</p>
                                    
                                </div>
                                <div className='footer'>
                                    <p>
                                        <text className='amount'>$65 </text>
                                        <text className='per-person'>/ PER PERSON</text>
                                    </p>
                                    <p className='others'>10 - 40 Guests &#8226; 3 hrs Duration</p>

                                </div>
                                
                            </div>
                        </div>
                        {/* <div class="swiper-slide">Slide 6</div>
                        <div class="swiper-slide">Slide 7</div>
                        */}
                        </div>
                    
                    
                        <div class="swiper-pagination"></div>
                    
                        
                </div>
                <div class="swiper-button-right"></div>
                
                </div>

                <button style={{
                    backgroundColor:'#e31f3d',
                    color:'white',
                    fontSize:'12px',
                    padding:'0px 30px',
                    border:'none',
                    height:'40px',
                    marginTop:'50px',
                    marginBottom:'80px',
                    cursor:'pointer'
                }}>SEE MORE FEATURED EVENTS</button>
            </div>

        )}
    
    };

export default FeaaturedEvents;