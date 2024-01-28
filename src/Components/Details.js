import React from 'react';
import account from '../Assets/accounts.avif';
import * as rev from 'react-reveal';

function Details() {
  return (
    <div className='w-full bg-[#ececec] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <rev.Zoom delay={500}>   
        <img className='w-[500px] mx-auto my-3' src={account} alt='accounting images' />
        </rev.Zoom>    
        <div className='flex flex-col justify-center'>
            <rev.Zoom delay={500}>
                <h1 className='text-[#00df9a] uppercase font-bold text-center mt-3'>Unlocking Financial Brilliance</h1>
              </rev.Zoom>
              <rev.Zoom delay={600}>
                <p className='md:text-2xl sm:text-xl text-lg font-bold py-2'>Your Trusted Partner in Numbers!</p>
                </rev.Zoom>
                <p>
                <rev.Zoom delay={800}>
                We turn your financial
                 chaos into organized success! 🌐💰 Let us be your
                  financial compass, guiding you through the numbers
                   with precision and expertise. 🚀 From meticulous 
                   bookkeeping to strategic financial planning, we're 
                   here to simplify the complexities and empower your
                    financial journey. 📈💼 Your success is our bottom
                     line! 💼✨ 
                     #FinancialFreedom 
                     #NumbersNinja 
                     #AccountingExcellence"
                </rev.Zoom>
                </p>
                <rev.Zoom delay={800}>
                <button className='bg-[#e4c131] w-[200px] rounded-md  my-6 mx-auto md:mx-0 p-2 text-black font-bold'>Talk to us</button>
                </rev.Zoom>
              </div>
        </div>
    </div>
  )
}

export default Details