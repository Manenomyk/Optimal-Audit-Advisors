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
                <ul>
                    <li className='py-1 text-sm'>Payroll Services</li>
                    <li className='py-1 text-sm'>Tax Services</li>
                    <li className='py-1 text-sm'>Bookkeeping</li>
                    <li className='py-1 text-sm'>Tax compliance certificate application</li>
                    <li className='py-1 text-sm'>Financial Reporting and forecasting</li>
                    <li className='py-1 text-sm'>NSSF, NHIF and  PAYE filing </li>
                    <li className='py-1 text-sm'>Vat filing </li>
                    <li className='py-1 text-sm'>Audit and accounting consultancy</li>
                </ul>
            </div>

            <div>
                <h2 className='text-[#e4c131] font-bold text-lg'>Quick Access</h2>
                <ul>
                    <li className='py-1 text-sm'>Home</li>
                    <li className='py-1 text-sm'>Services</li>
                    <li className='py-1 text-sm'>About</li>
                    <li className='py-1 text-sm'>Contact</li>
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