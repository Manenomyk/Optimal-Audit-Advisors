import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './About.css';
import logo from '../../Assets/logo.jpeg';
import happy from '../../Assets/happy.svg';
import services from '../../Assets/services.webp';
import { Helmet } from 'react-helmet';
import * as rev from 'react-reveal';

function About() {
  return (
    <div>
    <Navbar />
    <Helmet>
        <meta charSet="utf-8" />
        <title>Optimal Audit Advisors</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="description"
          content="Best Audit services"
        />
      </Helmet>
      
      <div className="about_background w-full h-[20rem] bg-cover bg-center" >
      <rev.Zoom delay={400}>
      <h1 className='w-full text-3xl font-bold text-[#e4c131] text-end absolute bottom-80 pr-6 '>Nurturing Visions, Building Legacies</h1>
      </rev.Zoom>
    </div>
        <div className='w-full p-[5rem] px-4 bg-white'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          
          <rev.Zoom delay={500}>
          <img className='w-[300px] mx-auto my-3' src={logo} alt='accounting images' />
          </rev.Zoom> 
          
          <div className='flex flex-col justify-center'>
            <rev.Zoom delay={600}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Optimal Audit Advissors</h1>
            </rev.Zoom>
            <rev.Zoom delay={600}>
            <p className='md:text-2xl sm:text-xl text-lg font-bold py-2'>Welcome to a New Standard of Excellence!</p>
            </rev.Zoom> 
            <rev.Zoom delay={600}>
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
             </rev.Zoom>     
            </div>
            
            </div>
        </div>

        <div className='flex flex-row mx-auto justify-center'>
          <div className='my-12 p-6 h-auto w-1/2 md:flex gap-6 bg-slate-100 rounded-lg text-xl'>
            
            <div>
            <rev.Zoom delay={500}>
              <img src={happy} alt='image' className='mx-auto w-96' />
            </rev.Zoom>
            </div>
            <div>
            <rev.Zoom delay={400}>
                  <h1 className='py-5 font-bold text-[#00df9a]'>What we pride in
                  <hr  className='w-40 mt-1'/>
                  </h1>
              </rev.Zoom>
                <div className='text-[16px] text-gray-600'>
                <rev.Zoom delay={600}>
                  <p>
                      Beyond Audits, We Illuminate Paths 
                      to Prosperity: Precision, Insight, 
                      and Integrity - Your Trusted Partners
                      in Audit Advisory Excellence!
                  </p>
                  </rev.Zoom>
                </div>
            </div>
        </div>
      </div>
      
      <div className='w-full p-[5rem] px-4 bg-white'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          
            <div className='flex flex-col justify-center'>
            <rev.Zoom delay={400}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Elevate Your Experience</h1>
            </rev.Zoom>
            <rev.Zoom delay={500}>
            <p className='md:text-2xl sm:text-xl text-lg font-bold py-2'>Your Success, Our Commitment </p>
            </rev.Zoom>
            <p>
            <rev.Zoom delay={500}>
                    Numbers in Harmony, Trust in Every Transaction.
                     Welcome to Optimal Audit Advissors – 
                    Your Partner in Precision Accounting and Auditing Solutions.
                    <br />
                    </rev.Zoom>
                    <rev.Zoom delay={600}>
                    As an Audit and accounting company we offer a range of services to help
                     businesses and organizations manage their financial affairs,
                      ensure compliance with regulations, and make informed 
                      decisions. Here are some common services provided by
                       audit and accounting firms:
                       </rev.Zoom>
                    </p>
                    <rev.Zoom delay={600}>
                    <button className='bg-[#e4c131] w-[200px] rounded-md  my-6 mx-auto md:mx-0 p-2 text-black font-bold'>Read More</button>
                    </rev.Zoom>
            </div>
            <rev.Zoom delay={600}>
            <img className='w-[400px] mx-auto my-3' src={services} alt='accounting images' />
            </rev.Zoom>
            </div>
        </div>
    <Footer />
    </div>
  )
}

export default About