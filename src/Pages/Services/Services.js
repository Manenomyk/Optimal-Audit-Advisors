import React from 'react'
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './Services.css';
import consult from '../../Assets/consult.avif';
import report from '../../Assets/report.svg';
import Tax from '../../Assets/tax.png';
import filling from '../../Assets/filling.svg';
import reporting from '../../Assets/reporting.jpg';
import { Helmet } from 'react-helmet';
import * as save from "react-bootstrap";

function Services() {
  return (
  <div>
      <Navbar />
    <Helmet>
      <meta charSet="utf-8" />
      <title>Optimal Audit Advissors</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <meta
        name="description"
        content="Best Audit services"
      />
    </Helmet>
    <div className="background w-full h-[30rem] bg-cover bg-center" >
    <div className='w-full p-[2rem] px-4 bg-transparent'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3'>
      <div className='flex flex-col justify-self-center relative top-52'>
        <p className='md:text-3xl sm:text-xl text-lg text-[#e4c131] font-bold py-2'> Expertise Meets Innovation:</p>
              <p className='sm:text-xl text-white'>
              
               Unleashing Tailored Solutions for Your Unique Needs
               
               Navigating Excellence, Delivering Results:
                Because Your Business Deserves the Best!
              </p>
              <a href='#services'><button className='bg-[#e4c131] w-[200px] rounded-md  my-6  p-2 text-black font-bold'>Explore More</button></a>
      </div>
      
    </div>
  </div>
    </div>

      <div className='w-full p-[5rem] px-4 bg-white'>
      <a id='services'/>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        
        <div className='flex flex-col justify-center'>
        
          <h1 className='text-[#00df9a] uppercase font-bold text-center mt-3'>Audit and accounting consultancy</h1>
          <p className='md:text-2xl sm:text-xl text-lg font-bold py-2'>Search no further!</p>
                <p>
                We are your trusted partner in audit and accounting
                 consultancy. We understand that in today's
                  dynamic business environment, effective
                   financial management is crucial for success. 
                   Our dedicated team of experts is here to 
                   guide you through the complexities of 
                   auditing and accounting, helping you achieve
                    financial transparency, compliance, and 
                    strategic growth
                </p>
                <button className='bg-[#e4c131] w-[200px] rounded-md  my-6 mx-auto md:mx-0 p-2 text-black font-bold'>Read More</button>
        </div>
        <img className='w-[500px] mx-auto my-3' src={consult} alt='accounting images' />
        </div>
      </div>
<hr className='text-white' />

      <div className='w-full p-[2rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[300px] mx-auto my-3' src={report} alt='accounting images' />
        <div className='flex flex-col justify-center'>
          <h1 className='text-[#00df9a] uppercase font-bold text-center mt-3'>Financial reporting and forecasting</h1>
          <p className='md:text-2xl sm:text-xl text-lg font-bold py-2'>We've got you covered!</p>
                <p>
                we understand that in today's fast-paced business 
                landscape, accurate financial reporting and insightful
                 forecasting are the cornerstones of success. Our
                  dedicated team of financial experts is here to 
                  empower your business with unparalleled financial
                   intelligence,
                 driving strategic decision-making and sustainable growth.
                </p>
                <button className='bg-[#e4c131] w-[200px] rounded-md  my-6 mx-auto md:mx-0 p-2 text-black font-bold'>Read More</button>
        </div>
        
        </div>
      </div>

      <hr className='text-white' />


    <div className='w-full p-[5rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      
      <div className='flex flex-col justify-center'>
        <h1 className='text-[#00df9a] uppercase font-bold text-center mt-3'>Tax compliance certificate application</h1>
        <p className='md:text-2xl sm:text-xl text-lg font-bold py-2'>We Beat that hassle for you</p>
              <p>
              Unlock Business Confidence! Secure Your Success
               with Our Hassle-Free Tax Compliance 
               Certificate Application. We Simplify,
                You Thrive - Let's Navigate the Path
                 to Financial Compliance Together!"
              </p>
              <button className='bg-[#e4c131] w-[200px] rounded-md  my-6 mx-auto md:mx-0 p-2 text-black font-bold'>Read More</button>
      </div>
      <img className='w-[500px] mx-auto my-3' src={Tax} alt='accounting images' />
      </div>

      <hr className='text-white' />

    </div>

    <div className='w-full p-[2rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[300px] mx-auto my-3' src={filling} alt='accounting images' />
        <div className='flex flex-col justify-center'>
          <h1 className='text-[#00df9a] uppercase font-bold text-center mt-3'>NSSF, NHIF and PAYE filing</h1>
          <p className='md:text-2xl sm:text-xl text-lg font-bold py-2'>You won't believe what we have for you</p>
                <p>
                Experience Seamless Payroll Solutions for Your Success!
                 Elevate Your Business with Effortless NSSF,
                  NHIF, and PAYE Filing. Navigate the Future
                   of Payroll Management – Where Accuracy 
                   Meets Efficiency
                </p>
                <button className='bg-[#e4c131] w-[200px] rounded-md  my-6 mx-auto md:mx-0 p-2 text-black font-bold'>Read More</button>
        </div>
        
      </div>
    </div>

      <hr className='text-white' />

    <div className='w-full p-[5rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      
      <div className='flex flex-col justify-center'>
        <h1 className='text-[#00df9a] uppercase font-bold text-center mt-3'>Audit and Financial Reporting</h1>
        <p className='md:text-2xl sm:text-xl text-lg font-bold py-2'>Precision Beyond Numbers, Insights Beyond Reports</p>
              <p>
              Beyond the Numbers: Unleash the Power of Precision
               with Our Audit Reporting Services! Your
                Financial Guardians for Trustworthy Insights 
                and Compliance Excellence. Elevate Your Business 
                Story – Let's Audit Success Together!
                <br />
                <b>#Audit Excellence</b> <br />
                <b>#Financial Confidence!</b>
              </p>
              <button className='bg-[#e4c131] w-[200px] rounded-md  my-6 mx-auto md:mx-0 p-2 text-black font-bold'>Read More</button>
      </div>
      <img className='w-[500px] mx-auto my-3' src={reporting} alt='accounting images' />
      </div>

    </div>

      <Footer />
    </div>
  )
}

export default Services