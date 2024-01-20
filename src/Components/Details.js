import React from 'react';
import account from '../Assets/accounts.avif';

function Details() {
  return (
    <div className='w-full bg-[#ececec] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={account} alt='accounting images' />
        </div>
    </div>
  )
}

export default Details