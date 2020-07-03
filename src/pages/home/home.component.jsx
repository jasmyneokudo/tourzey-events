import React from 'react';
import Banner from '../../components/banner/banner.component';
import Header from '../../components/header/header.component';
import BannerFooter from '../../components/banner-footer/banner-footer.component';
import PackageEvents from '../../components/package-events/package-events.component';
import PackageEventsProdedures from '../../components/package-events-procedures/package-events-procedures.component';
import FeaturedEvents from '../../components/featured-events/featured-events.component';
import YourEvent from '../../components/your-event/your-event.component';
import OrganisingEvents from '../../components/organising-events/organising-events.component';
import BlogANdNews from '../../components/blog-and-news/blog-and-news.component';
import Faqs from '../../components/faqs/faqs.component';
import Stay from '../../components/stay/stay.component';
import Footer from '../../components/footer/footer.component';
import CityDropdown from '../../components/city-dropdown/city-dropdown.component';
import GuestSize from '../../components/guest-size/guest-size.component';

import './home.styles.scss';
 
const HomePage = () => (

    <div className='homepage'>

         <Header/>
         <div style={{height:100}}></div>
         <Banner/>
         <BannerFooter/>
         <PackageEvents/>
         <PackageEventsProdedures/>
         <FeaturedEvents/>
         <YourEvent/>
         <OrganisingEvents/>
         <BlogANdNews/>
         <Faqs/>
         <Stay/>
         <Footer/>
         {/* <GuestSize/> */}
         {/* <CityDropdown/>  */}
        
    </div>
);

export default HomePage;