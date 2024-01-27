import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './About.css';
import logo from '../../Assets/logo.jpeg';

function About() {
  return (
    <div>
    <Navbar />
      <div className="about_background w-full h-[20rem] bg-cover bg-center" >

    </div>
        <div className='w-full p-[5rem] px-4 bg-white'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[300px] mx-auto my-3' src={logo} alt='accounting images' />
            <div className='flex flex-col justify-center'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Optimal Audit Advissors</h1>
              <p className='md:text-2xl sm:text-xl text-lg font-bold py-2'>Get to know us better!</p>
                    <p>
                    Welcome to Optimal Audit Advissors, where numbers tell a 
                    story, and excellence is our language. We are not 
                    just auditors and consultants; we are architects of 
                    financial success. With a commitment to precision,
                     innovation, and client-centric solutions, we transform 
                     challenges into opportunities. At Optimal Audit Advissors,
                      we don't just balance the books; we balance your 
                      journey towards prosperity. Explore the art of 
                      financial mastery with us – because your success 
                      is our business!
                    </p>
                    
            </div>
            
            </div>
        </div>
    <Footer />
    </div>
  )
}

export default About