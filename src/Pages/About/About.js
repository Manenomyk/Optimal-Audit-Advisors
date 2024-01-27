import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './About.css';
import logo from '../../Assets/logo.jpeg';
import happy from '../../Assets/happy.svg';

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

        <div className='flex flex-row mx-auto justify-center'>
          <div className='my-12 p-6 h-auto w-1/2 md:flex gap-6 bg-slate-100 rounded-lg text-xl'>
            
            <div>
              <img src={happy} alt='image' className='mx-auto w-96' />
            </div>
            <div>
                  <h1 className='py-5 font-bold text-[#00df9a]'>What we pride in
                  <hr  className='w-40 mt-1'/>
                  </h1>

                <div className='text-lg'>
                  <p>
                      Beyond Audits, We Illuminate Paths 
                      to Prosperity: Precision, Insight, 
                      and Integrity - Your Trusted Partners
                      in Audit Advisory Excellence!
                  </p>
                </div>
            </div>

            
        </div>

        </div>
    <Footer />
    </div>
  )
}

export default About