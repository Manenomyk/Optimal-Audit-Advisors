import React from 'react';
import * as rev from 'react-reveal';

function Newsletter() {
  return (
    <div className='w-full py-6 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
            <rev.Zoom delay={200}>
                <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>
                Stay ahead of every transfomation
                </h1>
            </rev.Zoom>
            <rev.Zoom delay={300}>
                <p>Sign up to our newsletter and stay updated</p>
            </rev.Zoom>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <rev.Zoom delay={300}> 
                <input className='p-2 flex w-full rounded-md text-black' 
                        type='email'
                        placeholder='Enter Email' 
                    />
                </rev.Zoom>
                <rev.Zoom delay={400}>
                    <button className='bg-[#00df9a] w-[200px] rounded-md  my-6 mx-auto md:mx-0 p-2 text-black font-bold'>Subscribe</button>
                </rev.Zoom>
                    </div>
                    <rev.Zoom delay={400}>
                    <p>Welcome into the team</p>
                    </rev.Zoom>
            </div>
        </div>
        
    </div>
  )
}

export default Newsletter