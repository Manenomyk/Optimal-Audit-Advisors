import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import * as rev from 'react-reveal';

function Newsletter() {
    
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wtcq0xt', 'template_uvekgoa', form.current, 'GLJHLD4VjfTBI3MPl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

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
            <form ref={form} onSubmit={sendEmail} className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <rev.Zoom delay={300}> 
                <input className='p-2 flex w-full rounded-md text-black' 
                        type='email'
                        placeholder='Enter Email' 
                        required
                        name='user_email'
                    />
                </rev.Zoom>
                <rev.Zoom delay={400}>
                    <button type="submit" className='bg-[#00df9a] w-[200px] rounded-md  my-6 mx-auto md:mx-0 p-2 text-black font-bold'>Subscribe</button>
                </rev.Zoom>
            </form>
                    <rev.Zoom delay={400}>
                    <p>Welcome into the team</p>
                    </rev.Zoom>
            </div>
        </div>
        
    </div>
  )
}

export default Newsletter