import React from 'react'
import Navbar from '../../Components/Navbar';
import './Services.css';

function Services() {
  return (
    <div>
      <Navbar />

      <div className="background w-full h-[30rem] bg-cover bg-center" >
      
      </div>

      <div className='w-full py-[10rem] px-4 bg-white'>
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
        </div>
      </div>
    </div>
  )
}

export default Services