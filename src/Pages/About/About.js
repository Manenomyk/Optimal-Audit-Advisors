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
            
            </div>
        </div>
    <Footer />
    </div>
  )
}

export default About