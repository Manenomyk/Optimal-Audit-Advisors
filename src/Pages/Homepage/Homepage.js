import React from 'react';

import Navbar from '../../Components/Navbar.js';
import Loadpage from '../../Components/Loadpage.js';
import Newsletter from '../../Components/Newsletter.js';
import Details from '../../Components/Details.js';
import ServiceSection from '../../Components/ServiceSection.js';
import Footer from '../../Components/Footer.js';


function Homepage() {
  return (
    <div>
      <Navbar />
      <Loadpage />
      <Details />
      <Newsletter />
      <ServiceSection />
      <Footer />
    </div>
  )
}

export default Homepage