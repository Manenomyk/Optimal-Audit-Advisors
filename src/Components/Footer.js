import React from 'react';
import logo from "../Assets/logo.jpeg";
import * as rev from 'react-reveal';

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-10 grid md:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <div className='flex'>
                <img src={logo} alt='/'  className='w-20 rounded-full mx-2'/>
                <rev.Zoom delay={200}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Optimal Audit Advissors</h1>
                </rev.Zoom>
                </div> 
            <p className='my-4'>
            <rev.Zoom delay={300}>
            Navigating Finances, Ensuring Compliance:
             Your Success, Our Assurance Optimal Audit Advisors at Your Service!
            </rev.Zoom>
             </p>
            
        </div>
        <div className='mx-2 md:col-span-2 flex justify-between'>
            <div>
            <rev.Zoom delay={200}>
                <h2 className='text-[#e4c131] font-bold text-lg'>Servises</h2>
                </rev.Zoom>
                <ul >
                <rev.Zoom delay={200}>
                    <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>Payroll Services</li></a> 
                </rev.Zoom>
                <rev.Zoom delay={300}>
                    <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>Bookkeeping</li></a> 
                 </rev.Zoom>
                 <rev.Zoom delay={300}>
                    <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>Tax compliance certificate application</li></a> 
                </rev.Zoom>
                <rev.Zoom delay={400}>
                    <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>Financial Reporting and forecasting</li></a> 
                </rev.Zoom>
                <rev.Zoom delay={400}>
                    <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>NSSF, NHIF and  PAYE filing</li></a> 
                </rev.Zoom>
                <rev.Zoom delay={500}>
                    <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>Vat filing</li></a> 
                </rev.Zoom>
                <rev.Zoom delay={500}>
                    <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>Audit and accounting consultancy</li></a> 
                </rev.Zoom>
                </ul>
            </div>

            <div>
            <rev.Zoom delay={200}>
                <h2 className='text-[#e4c131] font-bold text-lg'>Quick Access</h2>
            </rev.Zoom>
                <ul>
                <rev.Zoom delay={300}>
                <a href='/'><li className='py-1 text-sm hover:text-[#00df9a]'>Home</li></a> 
                </rev.Zoom>
                <rev.Zoom delay={400}>
                <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>Services</li></a> 
                </rev.Zoom>
                <rev.Zoom delay={500}>
                <a href='/About'><li className='py-1 text-sm hover:text-[#00df9a]'>About</li></a> 
                </rev.Zoom>
                <rev.Zoom delay={600}>
                <a href='/Contact'><li className='py-1 text-sm hover:text-[#00df9a]'>Contact</li></a> 
                </rev.Zoom>  
                </ul>
            </div>
            <div>
            <rev.Zoom delay={200}>
                <h2 className='text-[#e4c131] font-bold text-lg'>Company</h2>
                </rev.Zoom>
                <ul>
                <rev.Zoom delay={300}>
                    <li className='py-1 text-sm'>+254720565289</li>
                    </rev.Zoom>
                    <rev.Zoom delay={400}>
                    <li className='py-1 text-sm'>+254734565289</li>
                    </rev.Zoom>
                    <rev.Zoom delay={500}>
                    <li className='py-1 text-sm'>Upperhill, Nairobi.</li>
                    </rev.Zoom>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer