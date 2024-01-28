import React, { useState } from 'react';
import './Load.css';
import { Helmet } from 'react-helmet';
import * as rev from 'react-reveal';

function Loadpage() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Optimal Audit Advissors</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="description"
          content="Best Audit services"
        />
      </Helmet>
    <div className='load w-full h-full bg-cover bg-center text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <rev.Zoom delay={400}>
            <p className='text-[#00df9a] uppercase font-bold p-2'>Best and Quality accounting services</p>
          </rev.Zoom>
          <rev.Zoom delay={500}>
            <h1 className='md:text-6xl sm:text-5xl text-4xl md:py-6'>At Optimal, We deliver</h1>
          </rev.Zoom>
          <rev.Zoom delay={600}>
            <p className='md:text-xl sm:text-l text font-bold'>Dare to Experience Excellence</p>
            </rev.Zoom>
            <rev.Zoom delay={600}>
            <p className='text-gray-300 p-4 font-bold'>We are you one stop place for all your audit and accounting needs</p>
            </rev.Zoom>
            <rev.Zoom delay={700}>
            <button className='bg-[#e4c131] w-[200px] rounded-md  my-6 mx-auto p-2 text-black font-bold'>Reach out</button>
            </rev.Zoom>

          </div>
    </div>
    </div>
    
  )
}

export default Loadpage