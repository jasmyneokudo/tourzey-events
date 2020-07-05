import React from 'react';
import './blog-and-news.styles.scss';

const BlogAndNews = () => (

    <div className='blog-and-news'>

        <p className='title'>BLOG AND NEWS</p>

        <p className='desc'>Get in the know about our new products and services </p>

        <div className='content'>

    
        <div className='image-news'>


            <div 
            className='background-image'
            style={{
                background: 'url(/images/restaurant-room.png) repeat-x' ,
                backgrouundSize:'contain',
                backgroundPosition:'center'
            }}/>

                <div className='content'>
                    <p className='title'>36 Cafes from Boston coming soon</p>
                    <p className='desc'>We’re happy to welcome the top Cafes in the city of Boston to
be part of the Tourzey family and we couldn’t be more proud.
All Cafes will be updated by the coming weeks, Says our</p>
                    <p className='others'>CONTINUE READING</p>

                </div>
            </div>
            {/* // <img src='/images/restaurant-room.png'/> */}

            <div className='right-side'>
                <div className='news'>
                    <p className='title'>Tourzey event in China!</p>
                    <p className='desc'>Today, we are announcing that Tourzey Co-Founder William McCoy 
will become Chairman of Tourzey event China as we continue to 
scale our operations in one of the largest markets in the world.</p>

                    <p className='others'>Continue reading</p>
                </div>

               <div className='images'>
                        
                <div  style={{
                    marginRight:'20px',
                }} className='image-news'>


                    <div 
                    className='background-image'
                    style={{
                        background: 'url(/images/couples-painting2.png) no-repeat',
                        backgroundSize:'contain',
                        backgroundPosition:'center'
                    }}/>

                        <div className='content'>
                            <p className='title'>Event Planning, tips 
and suggestions</p>
                            
                            <p className='others'>CONTINUE READING</p>

                        </div>
                    </div>

                    
                <div
                className='image-news'>


                    <div 
                    className='background-image'
                    style={{
                        
                        background: 'url(/images/asia-china2.png) no-repeat',
                        backgroundSize:'contain',
                        backgroundPosition:'center'
                    }}/>

                        <div className='content'>
                            <p className='title'>Top popular exec 
events in China</p>
                            <p className='others'>CONTINUE READING</p>

                        </div>
                    </div>
                  
               </div>
            </div>
        </div>

        <button className='button'>READ OUR NEWS AND BLOG</button>
    </div>
);

export default BlogAndNews;