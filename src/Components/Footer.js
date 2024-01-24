import React from 'react';
import logo from "../Assets/logo.jpeg";

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-10 grid md:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <div className='flex'>
                <img src={logo} alt='/'  className='w-20 rounded-full mx-2'/>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Optimal Audit Advissors</h1>
            </div> 
            <p className='my-4'>
            Navigating Finances, Ensuring Compliance:
             Your Success, Our Assurance Optimal Audit Advisors at Your Service!
            </p>
            
        </div>
        <div className='mx-2 md:col-span-2 flex justify-between'>
            <div>
                <h2 className='text-[#e4c131] font-bold text-lg'>Servises</h2>
                <ul >
                    <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>Payroll Services</li></a> 
                    <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>Bookkeeping</li></a> 
                    <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>Tax compliance certificate application</li></a> 
                    <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>Financial Reporting and forecasting</li></a> 
                    <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>NSSF, NHIF and  PAYE filing</li></a> 
                    <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>Vat filing</li></a> 
                    <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>Audit and accounting consultancy</li></a> 

                </ul>
            </div>

            <div>
                <h2 className='text-[#e4c131] font-bold text-lg'>Quick Access</h2>
                <ul>
                <a href='/Homepage'><li className='py-1 text-sm hover:text-[#00df9a]'>Home</li></a> 
                <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>Services</li></a> 
                <a href='/About'><li className='py-1 text-sm hover:text-[#00df9a]'>About</li></a> 
                <a href='/Contact'><li className='py-1 text-sm hover:text-[#00df9a]'>Contact</li></a> 
                    
                </ul>
            </div>
            <div>
                <h2 className='text-[#e4c131] font-bold text-lg'>Company</h2>
                <ul>
                    <li className='py-1 text-sm'>+254720565289</li>
                    <li className='py-1 text-sm'>+254734565289</li>
                    <li className='py-1 text-sm'>Upperhill, Nairobi.</li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer