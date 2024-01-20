import React from 'react';
import account from '../Assets/accounts.avif';

function Details() {
  return (
    <div className='w-full bg-[#ececec] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-3' src={account} alt='accounting images' />
            <div className='flex flex-col justify-center'>
                <h1 className='text-[#00df9a] uppercase font-bold'>Unlocking Financial Brilliance</h1>
                <p className='md:text-2xl sm:text-xl text-lg font-bold py-2'>Your Trusted Partner in Numbers!</p>
                <p>
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
                </p>
            </div>
        </div>
    </div>
  )
}

export default Details