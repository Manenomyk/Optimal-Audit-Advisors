import React from 'react';
import finance from '../Assets/finance.svg';
import booking from '../Assets/booking.svg';
import statistics from '../Assets/statistics.svg';
import * as rev from 'react-reveal';


function ServiceSection() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <rev.Zoom delay={200}>  
            <img className='w-[300px] mx-auto mt-1' src={finance} alt='/'  />
            </rev.Zoom>
            <rev.Zoom delay={300}>
                <h1 className='text-xl font-bold text-center py-5 text-black'>Financial Accounting</h1>
                </rev.Zoom>

                <p className='text-center'>
                <rev.Zoom delay={400}>
                    Elevate Your Finances with Our Expert Financial
                    Accounting Services! Unleash the Potential
                    of Your Numbers, Gain Clarity, and Chart a Course 
                    to Financial Success. Let Us Be Your Partner in
                    Precision, Where Every Dollar Finds Its Purpose.
                        Your Financial Future Starts Here!
                </rev.Zoom>
                </p>
                <rev.Zoom delay={400}>
                <button className='bg-[#e4c131] w-[200px] rounded-md  my-6 mx-auto p-2 text-black font-bold'>Get in touch</button>
                </rev.Zoom>
            </div>

            <div className='bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <rev.Zoom delay={200}>    
            <img className='w-[260px] mx-auto mt-1' src={statistics} alt='/'  />
            </rev.Zoom>
            <rev.Zoom delay={300}>
            <h1 className='text-xl font-bold text-center py-5 text-black'>Audit and accounting consultancy</h1>
            </rev.Zoom>
            <p className='text-center'>
            <rev.Zoom delay={400}>
                Upraise financial clarity with our audit
                 and accounting consultancy. Precision meets
                  prosperity as we navigate your numbers, 
                  ensuring compliance, and illuminating the
                   path to financial excellence. Let's redefine 
                   success with meticulous expertise!
                </rev.Zoom>
                </p>
                <rev.Zoom delay={400}>
                <button className='bg-[#00df9a] w-[200px] rounded-md  my-6 mx-auto p-2 text-black font-bold'>Get in touch</button>
                </rev.Zoom>
            </div>

            <div className='bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <rev.Zoom delay={200}>
            <img className='w-[230px] mx-auto mt-1' src={booking} alt='/'  />
            </rev.Zoom>
            <rev.Zoom delay={300}>
            <h1 className='text-xl font-bold text-center py-5 text-black'>Business Advisory</h1>
            </rev.Zoom>  
            <p className='text-center'>
            <rev.Zoom delay={400}>
                Unlock your business's full potential with our
                 strategic expertise. Elevate your success story
                  with tailored solutions and visionary guidance. 
                  Let's transform challenges into triumphs together!
                  our business advisory services illuminate the path 
                  to prosperity, turning challenges into opportunities
                   and strategies into triumphs.
             </rev.Zoom>
                </p>
                <rev.Zoom delay={400}>
                <button className='bg-[#e4c131] w-[200px] rounded-md  my-6 mx-auto p-2 text-black font-bold'>Get in touch</button>
                </rev.Zoom>
            </div>

        </div>
    </div>
  )
}

export default ServiceSection