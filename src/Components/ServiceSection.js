import React from 'react';
import finance from '../Assets/finance.svg';

function ServiceSection() {
  return (
    <div className='w-full py-[3rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
            <div className='bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-[300px] mx-auto mt-1' src={finance} alt='/'  />
                <h1 className='text-xl font-bold text-center py-5 text-[#00df9a]'>Financial Accounting</h1>
                <p className='text-center'>
                Elevate Your Finances with Our Expert Financial
                 Accounting Services! 💼📈 Unleash the Potential
                  of Your Numbers, Gain Clarity, and Chart a Course 
                  to Financial Success. Let Us Be Your Partner in
                   Precision, Where Every Dollar Finds Its Purpose.
                    Your Financial Future Starts Here! 💰✨
                </p>
                <button className='bg-[#e4c131] w-[200px] rounded-md  my-6 mx-auto p-2 text-black font-bold'>Get in touch</button>
            </div>

            <div className='bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-[300px] mx-auto mt-1' src={finance} alt='/'  />
                <h1 className='text-xl font-bold text-center py-5 text-[#00df9a]'>Empower Your Prosperity</h1>
                <p className='text-center'>
                Elevate Your Finances with Our Expert Financial
                 Accounting Services! 💼📈 Unleash the Potential
                  of Your Numbers, Gain Clarity, and Chart a Course 
                  to Financial Success. Let Us Be Your Partner in
                   Precision, Where Every Dollar Finds Its Purpose.
                    Your Financial Future Starts Here! 💰✨
                </p>
                <button className='bg-[#e4c131] w-[200px] rounded-md  my-6 mx-auto p-2 text-black font-bold'>Get in touch</button>
            </div>

            <div className='bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-[300px] mx-auto mt-1' src={finance} alt='/'  />
                <h1 className='text-xl font-bold text-center py-5 text-[#00df9a]'>Empower Your Prosperity</h1>
                <p className='text-center'>
                Elevate Your Finances with Our Expert Financial
                 Accounting Services! 💼📈 Unleash the Potential
                  of Your Numbers, Gain Clarity, and Chart a Course 
                  to Financial Success. Let Us Be Your Partner in
                   Precision, Where Every Dollar Finds Its Purpose.
                    Your Financial Future Starts Here! 💰✨
                </p>
                <button className='bg-[#e4c131] w-[200px] rounded-md  my-6 mx-auto p-2 text-black font-bold'>Get in touch</button>
            </div>

            <div className='bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-[300px] mx-auto mt-1' src={finance} alt='/'  />
                <h1 className='text-xl font-bold text-center py-5 text-[#00df9a]'>Empower Your Prosperity</h1>
                <p className='text-center'>
                Elevate Your Finances with Our Expert Financial
                 Accounting Services! 💼📈 Unleash the Potential
                  of Your Numbers, Gain Clarity, and Chart a Course 
                  to Financial Success. Let Us Be Your Partner in
                   Precision, Where Every Dollar Finds Its Purpose.
                    Your Financial Future Starts Here! 💰✨
                </p>
                <button className='bg-[#e4c131] w-[200px] rounded-md  my-6 mx-auto p-2 text-black font-bold'>Get in touch</button>
            </div>
        </div>
    </div>
  )
}

export default ServiceSection